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
  FunctionField,
} from 'react-admin';
import { BulkResetViewsButton } from '../BulkResetViewsButton';
import styles from './AdvertList.module.scss';

interface AdvertRecord {
  content: string;
}

const newsFilters = [
  <TextInput label='Заголовок' source='title' />,
  <TextInput label='Текст' source='newsText' />,
  <TextInput label='Дата создания' source='createdAt' />,
];

const HtmlField = ({ record }: any) => (
  <div className={styles.root}>
    <div className='html-content' dangerouslySetInnerHTML={{ __html: record.content }} />
  </div>
);

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
      <FunctionField<AdvertRecord> source='content' label='Текст' render={(record) => <HtmlField record={record} />} />
      <DateField source='createdAt' label='Дата создания' />
      <EditButton label='' />
      <BulkResetViewsButton resource='adverts' resourceName='объявление' />
    </Datagrid>
  </List>
);

export default AdvertList;
