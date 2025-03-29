import { Edit, required, SimpleForm, TextInput } from 'react-admin';
import { CustomToolbar } from '../CustomToolbar';

export const ResultEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm toolbar={<CustomToolbar showDeleteButton={false} />}>
      <TextInput source='url' label='Ссылка на результаты' validate={[required()]} fullWidth type='url' />
    </SimpleForm>
  </Edit>
);
