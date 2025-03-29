import axios from 'axios';
import { Advert, LinkData } from '../redux/advert/types';
import { mainApi } from '../utils/constants';
import { IDictation } from '../redux/prepMaterial/types';

const responseErrorMessage = 'Ответ сервера не содержит данных или не содержит свойства "data"';
export const dataProviderErrorMessage = 'Ошибка в дата-провайдере:';

const dataProvider = {
  getList: async (resource: string, params: any) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const filterQueries = Object.entries(params.filter)
      .map((array) => {
        return array.join('=');
      })
      .join('&');
    const adaptedField = field === 'id' ? '_id' : field;
    const query =
      resource !== 'ourHistory'
        ? `?page=${page}&limit=${
            perPage <= 100 ? perPage : 10
          }&sortBy=${adaptedField}&order=${order.toLowerCase()}&${filterQueries}`
        : '';

    try {
      const { data: response } = await axios.get(`${mainApi}/${resource}${query}`);

      if (response && response.data) {
        const adaptedData = response.data.map((item: Advert) => {
          return { id: item._id, ...item };
        });

        return { data: adaptedData, total: response.total || 1 };
      } else {
        throw new Error(responseErrorMessage);
      }
    } catch (error) {
      console.error(dataProviderErrorMessage, error);
      throw error;
    }
  },

  getOne: async (resource: string, params: any) => {
    const itemId = resource !== 'musOlympData' ? `/${params.id}` : '';

    try {
      const { data: response } = await axios.get(`${mainApi}/${resource}${itemId}`);

      if (response && response.data) {
        const adaptedData =
          resource !== 'musOlympData'
            ? { id: response.data._id, ...response.data }
            : { id: response.data[0]._id, ...response.data[0] };

        return { data: adaptedData };
      } else {
        throw new Error(responseErrorMessage);
      }
    } catch (error) {
      console.error(dataProviderErrorMessage, error);
      throw error;
    }
  },

  create: async (resource: string, params: any) => {
    try {
      const { data: response } = await axios.post(`${mainApi}/${resource}`, params.data);

      if (response) {
        const adaptedData =
          resource !== 'ourHistory'
            ? { id: response._id, ...response.data }
            : { id: response.data[0]._id, ...response.data[0] };

        return { data: adaptedData };
      } else {
        throw new Error(responseErrorMessage);
      }
    } catch (error) {
      console.error(dataProviderErrorMessage, error);
      throw error;
    }
  },

  update: async (resource: string, params: any) => {
    const { data } = params;

    for (const key in data) {
      if (key === 'id' || key === '_id' || key === 'createdAt') {
        delete data[key];
      }
      if (key === 'links') {
        data[key] = data[key].map((linkItem: LinkData) => {
          delete linkItem._id;
          return linkItem;
        });
      }
      if (key === 'dictations' || key === 'soundAnalysis' || key === 'harmonization' || key === 'solfeggio') {
        delete data[key]._id;
      }
      if (key === 'dictations') {
        data[key].data = data[key].data.map((dictatonItem: IDictation) => {
          delete dictatonItem._id;
          return dictatonItem;
        });
      }
    }

    try {
      const { data: response } = await axios.patch(`${mainApi}/${resource}/${params.id}`, data);

      if (response) {
        return { data: { id: response._id, ...response } };
      } else {
        throw new Error(responseErrorMessage);
      }
    } catch (error) {
      console.error(dataProviderErrorMessage, error);
      throw error;
    }
  },

  delete: async (resource: string, params: any) => {
    try {
      const { data: response } = await axios.delete(`${mainApi}/${resource}/${params.id}`);

      return { data: response.data };
    } catch (error) {
      console.error(dataProviderErrorMessage, error);
      throw error;
    }
  },

  deleteMany: async (resource: string, params: any) => {
    const adaptedResource = resource === 'news' ? resource : resource.slice(0, -1);
    const payload = { [`${adaptedResource}Ids`]: params.ids };

    try {
      const { data: response } = await axios.delete(`${mainApi}/${resource}`, { data: payload });

      return { data: [response] };
    } catch (error) {
      console.error(dataProviderErrorMessage, error);
      throw error;
    }
  },
};

export default dataProvider;
