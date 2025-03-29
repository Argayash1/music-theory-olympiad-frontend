import * as React from 'react';
import { List, Datagrid, TextField, EditButton } from 'react-admin';

export const AboutOlympList = () => (
  <List actions={<></>}>
    <Datagrid rowClick='edit'>
      <TextField source='olympNumber' label='Порядковый номер' />
      <TextField source='dates' label='Даты проведения' />
      <TextField source='registrationDates' label='Приём заявок' />
      <TextField source='city' label='Город' />
      <TextField source='topic' label='Тематика' />
      <TextField source='participants' label='Участники' />
      <EditButton label='' />
    </Datagrid>
  </List>
);

export default AboutOlympList;
