import { Edit, PrevNextButtons, required, SimpleForm, TextInput, TopToolbar } from 'react-admin';
import { CustomToolbar } from '../CustomToolbar';

export const PrepMaterialEdit = (props: any) => (
  <Edit
    {...props}
    actions={
      <TopToolbar>
        <PrevNextButtons />
      </TopToolbar>
    }
  >
    <SimpleForm toolbar={<CustomToolbar />}>
      <TextInput source='id' label='ID' disabled fullWidth />
      <TextInput source='title' label='Заголовок' validate={[required()]} fullWidth />
      <TextInput source='content' label='Текст' validate={[required()]} multiline fullWidth />
    </SimpleForm>
  </Edit>
);
