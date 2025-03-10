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
} from 'react-admin';
import { BulkResetViewsButton } from '../BulkResetViewsButton';

export const PrepMaterialList = () => (
  <List
    filters={[<TextInput label='Категория' source='category' />]}
    actions={
      <TopToolbar>
        <FilterButton />
        <CreateButton label='Создать' />
      </TopToolbar>
    }
  >
    <Datagrid rowClick='edit'>
      <TextField source='category' label='Категория' />
      <TextField source='dictations' label='Диктанты' />
      <TextField source='soundAnalysis' label='Слуховой анализ' />
      <TextField source='harmonization' label='Гармонизация мелодии' />
      <TextField source='solfeggio' label='Сольфеджирование' />
      <EditButton label='' />
      <BulkResetViewsButton resource='prepMaterials' resourceName='материал для подготовки' />
    </Datagrid>
  </List>
);

export default PrepMaterialList;
