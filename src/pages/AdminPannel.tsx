import React from 'react';
import { Admin, Resource, defaultTheme } from 'react-admin';
import {
  Dashboard,
  AdvertList,
  AdvertEdit,
  AdvertCreate,
  LoginPage,
  PrepMaterialList,
  PrepMaterialCreate,
  PrepMaterialEdit,
  PrepMaterialShow,
  AboutOlympList,
  AboutOlympEdit,
  ResultList,
  ResultEdit,
  JuryMemberList,
  JuryMemberEdit,
} from '../components';
import dataProvider from '../providers/dataProvider';
import indigo from '@mui/material/colors/indigo';
import amber from '@mui/material/colors/amber';
import red from '@mui/material/colors/red';
import authProvider from '../providers/authProvider';
import { useTitle } from '../hooks/useTitle';
import { menuIcons } from '../utils/dashboardItems';

const lightTheme = {
  ...defaultTheme,
  palette: {
    primary: indigo,
    secondary: amber,
    error: red,
  },
};
const darkTheme = { ...defaultTheme, palette: { mode: 'dark' } };

const categoryNames: Record<string, string> = {
  '4': 'Музыковеды (старшая группа)',
  '3': 'Музыковеды (младшая группа)',
  '2': 'Исполнители (старшая группа)',
  '1': 'Исполнители (младшая группа)',
};

const AdminPannel = () => {
  useTitle('Административная панель');

  return (
    <Admin
      // @ts-ignore
      dataProvider={dataProvider}
      authProvider={authProvider}
      loginPage={LoginPage}
      basename='/admin'
      dashboard={Dashboard}
      theme={lightTheme}
      // @ts-ignore
      darkTheme={darkTheme}
    >
      <Resource
        name='adverts'
        list={AdvertList}
        options={{ label: 'Объявления' }}
        icon={menuIcons[0]}
        edit={AdvertEdit}
        create={AdvertCreate}
        recordRepresentation={(record) => `${record.title}`}
      />
      <Resource
        name='prepMaterials'
        list={PrepMaterialList}
        options={{ label: 'Материалы для подготовки' }}
        icon={menuIcons[1]}
        show={PrepMaterialShow}
        edit={PrepMaterialEdit}
        create={PrepMaterialCreate}
        recordRepresentation={(record) => `${categoryNames[record.category]}`}
      />
      <Resource
        name='musOlympData'
        list={AboutOlympList}
        options={{ label: 'Об олимпиаде' }}
        icon={menuIcons[2]}
        edit={AboutOlympEdit}
        recordRepresentation={(record) => `${record.title}`}
      />
      <Resource
        name='results'
        list={ResultList}
        options={{ label: 'Результаты' }}
        icon={menuIcons[3]}
        edit={ResultEdit}
        recordRepresentation={(record) => `${categoryNames[record.category]}`}
      />
      <Resource
        name='juryMembers'
        list={JuryMemberList}
        options={{ label: 'Жюри' }}
        icon={menuIcons[4]}
        edit={JuryMemberEdit}
        recordRepresentation={(record) => `${record.surname} ${record.name} ${record.patronymic}`}
      />
      {/* <Resource
        name='videos'
        list={VideosList}
        options={{ label: 'Видеозаписи' }}
        icon={menuIcons[5]}
        edit={VideosEdit}
        create={VideoCreate}
        recordRepresentation={(record) => `${record.composer} ${record.title}`}
      /> */}
    </Admin>
  );
};

export default AdminPannel;
