import {
  Edit,
  SimpleForm,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
  TopToolbar,
  PrevNextButtons,
  ShowButton,
  required,
} from 'react-admin';
import { CustomToolbar } from '../CustomToolbar';

export const PrepMaterialEdit = () => (
  <Edit
    actions={
      <TopToolbar>
        <PrevNextButtons />
        <ShowButton label='Показать' />
      </TopToolbar>
    }
  >
    <SimpleForm toolbar={<CustomToolbar showDeleteButton={false} />}>
      <h2>Диктанты</h2>
      <TextInput source='dictations.scoreUrl' label='Ссылка на ноты' validate={[required()]} fullWidth />
      <ArrayInput source='dictations.data' label='Данные'>
        <SimpleFormIterator fullWidth>
          <TextInput source='title' label='Название' validate={[required()]} fullWidth />
          <TextInput source='author' label='Композитор' validate={[required()]} fullWidth />
          <TextInput source='audioUrl' label='Ссылка на аудиозапись' validate={[required()]} fullWidth type='url' />
        </SimpleFormIterator>
      </ArrayInput>

      <h2>Слуховой анализ</h2>
      <TextInput source='soundAnalysis.title' label='Название' validate={[required()]} fullWidth />
      <TextInput source='soundAnalysis.author' label='Композитор' validate={[required()]} fullWidth />
      <TextInput
        source='soundAnalysis.audioUrl'
        label='Ссылка на аудиозапись'
        validate={[required()]}
        fullWidth
        type='url'
      />
      <TextInput
        source='soundAnalysis.tableUrl'
        label='Ссылдка на таблицу'
        validate={[required()]}
        fullWidth
        type='url'
      />
      <TextInput
        source='soundAnalysis.imageUrl'
        label='Ссылка на изображение'
        validate={[required()]}
        fullWidth
        type='url'
      />

      <h2>Гармонизация</h2>
      <TextInput source='harmonization.scoreUrl' label='Ссылка на ноты' validate={[required()]} fullWidth />
      <TextInput
        source='harmonization.imageUrl'
        label='Ссылка на изображение'
        validate={[required()]}
        fullWidth
      ></TextInput>

      <h2>Сольфеджио</h2>
      <TextInput source='solfeggio.scoreUrl' label='Ссылка на ноты' validate={[required()]} fullWidth />
      <TextInput
        source='solfeggio.imageUrl'
        label='Ссылка на изображение'
        validate={[required()]}
        fullWidth
      ></TextInput>
    </SimpleForm>
  </Edit>
);
