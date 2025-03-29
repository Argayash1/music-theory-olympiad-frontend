import { Edit, required, SimpleForm, TextInput } from 'react-admin';
import { CustomToolbar } from '../CustomToolbar';

export const AboutOlympEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm toolbar={<CustomToolbar />}>
      <TextInput source='id' label='ID' disabled fullWidth />
      <TextInput source='olympNumber' label='Порядковый номер' validate={[required()]} fullWidth />
      <TextInput source='dates' label='Даты проведения' validate={[required()]} fullWidth />
      <TextInput source='registrationDates' label='Приём заявок' validate={[required()]} fullWidth />
      <TextInput source='registrationDates' label='Приём заявок' validate={[required()]} fullWidth />
      <TextInput source='city' label='Город' validate={[required()]} fullWidth />
      <TextInput source='topic' label='Тематика' validate={[required()]} fullWidth />
      <TextInput source='participants' label='Участники' validate={[required()]} fullWidth />
    </SimpleForm>
  </Edit>
);
