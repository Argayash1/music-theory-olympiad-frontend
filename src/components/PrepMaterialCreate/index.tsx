import { Create, SimpleForm, TextInput, required, useNotify, useRedirect } from 'react-admin';
import { CustomToolbar } from '../CustomToolbar';

export const PrepMaterialCreate = (props: any) => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify(`Объявление успешно создано!`);
    redirect('list', 'adverts');
  };

  const onError = () => {
    notify(`Не могу создать объявление. Пожалуйста, проверьте правильность заполнения полей ввода!`);
  };

  return (
    <Create {...props} mutationOptions={{ onSuccess, onError }} title='Создать объявление'>
      <SimpleForm toolbar={<CustomToolbar />}>
        <TextInput source='title' label='Заголовок' resettable validate={[required()]} fullWidth />
        <TextInput source='content' label='Текст объявления' resettable validate={[required()]} multiline fullWidth />
      </SimpleForm>
    </Create>
  );
};
