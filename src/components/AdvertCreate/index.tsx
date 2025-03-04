import { Create, SimpleForm, TextInput, required, useNotify, useRedirect } from 'react-admin';
import { CustomToolbar } from '../CustomToolbar';

export const AdvertCreate = (props: any) => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify(`Новость успешно создана!`);
    redirect('list', 'news');
  };

  const onError = () => {
    notify(`Не могу создать новость. Пожалуйста, проверьте правильность заполнения полей ввода!`);
  };

  return (
    <Create {...props} mutationOptions={{ onSuccess, onError }} title='Создать объявление'>
      <SimpleForm toolbar={<CustomToolbar />}>
        <TextInput source='title' label='Заголовок' resettable validate={[required()]} fullWidth />
        <TextInput source='newsText' label='Текст объявления' resettable validate={[required()]} multiline fullWidth />
      </SimpleForm>
    </Create>
  );
};
