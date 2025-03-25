import * as React from 'react';
import {
  List,
  Datagrid,
  TextInput,
  TopToolbar,
  FilterButton,
  ShowButton,
  FunctionField,
  EditButton,
} from 'react-admin';

interface PrepMaterialRecord {
  category: string;
}

const categoryNames: Record<string, string> = {
  '4': 'Музыковеды (старшая группа)',
  '3': 'Музыковеды (младшая группа)',
  '2': 'Исполнители (старшая группа)',
  '1': 'Исполнители (младшая группа)',
};

export const PrepMaterialList = () => (
  <List
    filters={[<TextInput label='Категория' source='category' />]}
    actions={
      <TopToolbar>
        <FilterButton />
      </TopToolbar>
    }
  >
    <Datagrid rowClick='show'>
      <FunctionField<PrepMaterialRecord>
        label='Категория'
        source='category'
        render={(record) => categoryNames[record.category] || 'Неизвестная категория'}
      />
      <ShowButton label='Показать' />
      <EditButton label='Редактировать' />
    </Datagrid>
  </List>
);

export default PrepMaterialList;
