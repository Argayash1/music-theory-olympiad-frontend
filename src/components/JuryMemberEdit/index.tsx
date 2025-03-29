import { Edit, required, SimpleForm, TextInput } from 'react-admin';
import { CustomToolbar } from '../CustomToolbar';

export const JuryMemberEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm toolbar={<CustomToolbar showDeleteButton={false} />}>
      <TextInput source='imageUrl' label='Ссылка на изображение' validate={[required()]} fullWidth type='url' />
      <TextInput source='surname' label='Фамилия' validate={[required()]} fullWidth />
      <TextInput source='name' label='Имя' validate={[required()]} fullWidth />
      <TextInput source='patronymic' label='Отчество' validate={[required()]} fullWidth />
      <TextInput source='about' label='Информация' validate={[required()]} fullWidth />
      <TextInput source='link' label='Ссылка на веб-страницу' validate={[required()]} fullWidth />
    </SimpleForm>
  </Edit>
);
