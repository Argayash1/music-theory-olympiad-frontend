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
      {/* <Resource
        name='scores'
        list={ScoresList}
        options={{ label: 'Ноты' }}
        icon={menuIcons[3]}
        edit={ScoresEdit}
        create={ScoreCreate}
        recordRepresentation={(record) => `${record.composer} ${record.title}`}
      /> */}
      {/* <Resource
        name='audios'
        list={AudiosList}
        options={{ label: 'Аудиозаписи' }}
        icon={menuIcons[4]}
        edit={AudiosEdit}
        create={AudioCreate}
        recordRepresentation={(record) => `${record.composer} ${record.title}`}
      /> */}
      {/* <Resource
        name='videos'
        list={VideosList}
        options={{ label: 'Видеозаписи' }}
        icon={menuIcons[5]}
        edit={VideosEdit}
        create={VideoCreate}
        recordRepresentation={(record) => `${record.composer} ${record.title}`}
      /> */}
      {/* <Resource
        name='reports'
        list={ReportsList}
        options={{ label: 'Отчёты' }}
        icon={menuIcons[6]}
        edit={ReportsEdit}
        create={ReportCreate}
        recordRepresentation={(record) => `${record.year}`}
      /> */}
      {/* <Resource
        name='articles'
        list={ArticlesList}
        options={{ label: 'СМИ о нас' }}
        icon={menuIcons[7]}
        edit={ArticlesEdit}
        create={ArticleCreate}
        recordRepresentation={(record) => `${record.title}`}
      /> */}
      {/* <Resource
        name='ourHistory'
        list={OurHistoryList}
        options={{ label: 'Наша история' }}
        icon={menuIcons[8]}
        edit={OurHistoryEdit}
        create={OurHistoryCreate}
        recordRepresentation={() => 'Текст'}
      /> */}
    </Admin>
  );
};

export default AdminPannel;
