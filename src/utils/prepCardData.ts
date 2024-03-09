import { OLYMPIC_RULES_URL } from './constants';

export const prepCardNamesData = [
  { itemName: 'Диктанты', itemButtonText: 'Скачать ноты' },
  { itemName: 'Слуховой анализ', itemButtonText: 'Скачать таблицу' },
  { itemName: 'Гармонизация мелодии', itemButtonText: 'Скачать ноты' },
  { itemName: 'Сольфеджирование', itemButtonText: 'Скачать ноты' },
];

export const prepCardItemData = {
  _id: 1,
  category: 1,
  dictations: {
    scoreUrl: OLYMPIC_RULES_URL,
    data: [
      {
        audioUrl: 'https://www.dropbox.com/scl/fi/yogoktgvv9lz16k5tpth4/10.mp3?rlkey=kf8h1rm89u0z7yorqx9n6zfol&dl=1',
        title: 'Название',
        author: 'Иван Иванов',
      },
      {
        audioUrl: 'https://www.dropbox.com/scl/fi/yogoktgvv9lz16k5tpth4/10.mp3?rlkey=kf8h1rm89u0z7yorqx9n6zfol&dl=1',
        title: 'Название',
        author: 'Иван Иванов',
      },
    ],
  },
  soundAnalysis: {
    audioUrl: 'https://www.dropbox.com/scl/fi/yogoktgvv9lz16k5tpth4/10.mp3?rlkey=kf8h1rm89u0z7yorqx9n6zfol&dl=1',
    title: 'Название',
    author: 'Иван Иванов',
    imageUrl: 'https://i.postimg.cc/rmLx3r68/report.jpg',
    tableUrl: OLYMPIC_RULES_URL,
  },
  harmonization: {
    scoreUrl: OLYMPIC_RULES_URL,
    imageUrl: 'https://i.postimg.cc/rmLx3r68/report.jpg',
  },

  solfeggio: {
    scoreUrl: OLYMPIC_RULES_URL,
    imageUrl: 'https://i.postimg.cc/rmLx3r68/report.jpg',
  },
};
