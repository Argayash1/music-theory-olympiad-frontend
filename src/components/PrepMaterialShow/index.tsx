import {
  Show,
  TextField,
  ImageField,
  ArrayField,
  SimpleShowLayout,
  UrlField,
  Datagrid,
  FunctionField,
  EditButton,
  TopToolbar,
} from 'react-admin';
import styles from './PrepMaterialShow.module.scss';

interface PrepMaterialRecord {
  category: string;
}

const categoryNames: Record<string, string> = {
  '4': 'Музыковеды (старшая группа)',
  '3': 'Музыковеды (младшая группа)',
  '2': 'Исполнители (старшая группа)',
  '1': 'Исполнители (младшая группа)',
};

export const PrepMaterialShow = () => (
  <Show
    title='Материалы для подготовки'
    actions={
      <TopToolbar>
        <EditButton label='Редактировать' />
      </TopToolbar>
    }
  >
    <SimpleShowLayout className={styles.root}>
      <FunctionField<PrepMaterialRecord>
        label=''
        source='category'
        render={(record) => categoryNames[record.category] || 'Неизвестная категория'}
        className={styles.title}
      />
      <h2 className={styles.materialTitle}>Диктанты</h2>
      <UrlField source='dictations.scoreUrl' label='Ссылка на ноты:' />
      <ArrayField source='dictations.data' label='Данные:'>
        <Datagrid>
          <TextField source='title' label='Название:' />
          <TextField source='author' label='Композитор:' />
          <UrlField source='audioUrl' label='Ссылка на аудиозапись:' />
        </Datagrid>
      </ArrayField>
      <h2 className={styles.materialTitle}>Слуховой анализ</h2>
      <TextField source='soundAnalysis.title' label='Название:' />
      <TextField source='soundAnalysis.author' label='Композитор:' />
      <UrlField source='soundAnalysis.audioUrl' label='Ссылка на аудиозапись:' />
      <UrlField source='soundAnalysis.tableUrl' label='Ссылка на таблицу:' />
      <ImageField source='soundAnalysis.imageUrl' label='Изображение:' />
      <h2 className={styles.materialTitle}>Гармонизация</h2>
      <UrlField source='harmonization.scoreUrl' label='Ссылка на ноты:' />
      <ImageField source='harmonization.imageUrl' label='Ссылка на изображение:' />
      <h2 className={styles.materialTitle}>Сольфеджио</h2>
      <UrlField source='solfeggio.scoreUrl' label='Ссылка на ноты:' />
      <ImageField source='solfeggio.imageUrl' label='Ссылка на изображение:' />
    </SimpleShowLayout>
  </Show>
);
