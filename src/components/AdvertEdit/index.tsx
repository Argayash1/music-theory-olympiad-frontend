import { Edit, PrevNextButtons, required, SimpleForm, TextInput, TopToolbar } from 'react-admin';
import { CustomToolbar } from '../CustomToolbar';
import { RichTextInput } from 'ra-input-rich-text';
import styles from './AdvertEdit.module.scss';

export const AdvertEdit = (props: any) => (
  <Edit
    {...props}
    actions={
      <TopToolbar>
        <PrevNextButtons />
      </TopToolbar>
    }
  >
    <SimpleForm toolbar={<CustomToolbar />}>
      <TextInput source='title' label='Заголовок' validate={[required()]} fullWidth />
      <RichTextInput source='content' label='Текст' validate={[required()]} fullWidth className={styles.content} />
    </SimpleForm>
  </Edit>
);
