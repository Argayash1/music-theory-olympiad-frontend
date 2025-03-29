import * as React from 'react';
import { List, Datagrid, TextField, EditButton, UrlField, TextInput, TopToolbar, FilterButton } from 'react-admin';

const juryMemberFilters = [<TextInput label='Имя' source='name' />, <TextInput label='Фамилия' source='surname' />];

export const JuryMemberList = () => (
  <List
    actions={
      <TopToolbar>
        <FilterButton />
      </TopToolbar>
    }
    filters={juryMemberFilters}
  >
    <Datagrid rowClick='edit'>
      <UrlField source='imageUrl' label='Ссылка на изображение' />
      <TextField source='surname' label='Фамилия' />
      <TextField source='name' label='Имя' />
      <TextField source='patronymic' label='Отчество' />
      <TextField source='about' label='Информация' />
      <TextField source='link' label='Ссылка на веб-страницу' />
      <EditButton label='' />
    </Datagrid>
  </List>
);

export default JuryMemberList;
