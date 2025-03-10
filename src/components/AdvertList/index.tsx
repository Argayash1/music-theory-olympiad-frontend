import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  TextInput,
  TopToolbar,
  CreateButton,
  FilterButton,
  ArrayField,
  ChipField,
  SingleFieldList,
} from 'react-admin';
import { BulkResetViewsButton } from '../BulkResetViewsButton';

const newsFilters = [
  <TextInput label='Заголовок' source='title' />,
  <TextInput label='Текст' source='newsText' />,
  <TextInput label='Дата создания' source='createdAt' />,
];

export const AdvertList = () => (
  <List
    filters={newsFilters}
    actions={
      <TopToolbar>
        <FilterButton />
        <CreateButton label='Создать' />
      </TopToolbar>
    }
  >
    <Datagrid rowClick='edit'>
      <TextField source='title' label='Заголовок' />
      <TextField source='content' label='Текст' />
      <DateField source='createdAt' label='Дата создания' />
      <EditButton label='' />
      <BulkResetViewsButton resource='adverts' resourceName='объявление' />
    </Datagrid>
  </List>
);

export default AdvertList;
