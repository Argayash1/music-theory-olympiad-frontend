import * as React from 'react';
import { List, Datagrid, EditButton, FunctionField, UrlField } from 'react-admin';

interface ResultRecord {
  category: string;
}

const categoryNames: Record<string, string> = {
  '4': 'Музыковеды (старшая группа)',
  '3': 'Музыковеды (младшая группа)',
  '2': 'Исполнители (старшая группа)',
  '1': 'Исполнители (младшая группа)',
};

export const ResultList = () => (
  <List actions={<></>}>
    <Datagrid rowClick='edit'>
      <FunctionField<ResultRecord>
        label='Категория'
        source='category'
        render={(record) => categoryNames[record.category] || 'Неизвестная категория'}
      />
      <UrlField source='url' label='Ссылка на результаты' />
      <EditButton label='' />
    </Datagrid>
  </List>
);

export default ResultList;
