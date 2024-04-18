# Frontend лендинга IV Всероссийской олимпиады по музыкально-теоретическим предметам им. З. А. Визеля

![Скриншот главной страницы](https://github.com/Argayash1/Argayash1/assets/113699485/8343689a-a260-48b2-b573-8949fa47e5f3)

## Описание проекта

Frontend-часть лендинга **Всероссийской олимпиады по музыкально-теоретическим предметам имени З. А. Визеля**. Лендинг даёт полную информацию об Олимпиаде - даты и место проведения, сроки приёма заявок, тематика, результаты, состав жюри и контакты организаторов Олимпиады. Кроме того, лендинг содержит архив (ссылки на материалы Олимпиады за предыдущие 3 года) и материалы для подготовки - ноты, аудиозаписи, таблицы с возможностью просмотра и воспроизведения прямо на сайте.

> [!NOTE]
> Всероссийская олимпиада по музыкально-теоретическим предметам имени З. А. Визеля проводится с 2021 года. Организаторы олимпиады - **Уральская государственная консерватория имени М. П. Мусоргского** и **Региональный ресурсный центр в сфере культуры и художественного образования Свердловской области**.

## Функционал

1. **Шапка сайта** - меню с "подсвечиванием" названия секции лендинга, которую в данный момент скроллит пользователь.
2. **Главный баннер** - редактирование порядкового номера, даты и места проведения Олимпиады, срока приёма заявок на участие в Олимпиаде.
3. **Об олимпиаде** - редактирование тематики и информации об участниках Олимпиады.
4. **Объявления** - создание карточек (с использованием ссылок в тексте), редактирование и удаление карточек, переключение между карточками с помощью кнопок слайдера, просмотр полного текста объявления в отдельном компоненте.
5. **Материалы для подготовки**
    - возможность развернуть и скрыть содержимое каждого раздела с помощью меню-аккордеона
    - создание, редактирование и удаление карточек по типам заданий для каждой категории участников, переключение между карточками с помощью кнопок слайдера (на некоторых разрешениях).
    - загрузка на сайт, воспроизведение с помощью кастомного аудиоплеера и скачивание _аудиозаписей_ музыкальных диктантов и произведений для слухового анализа, редактирование автора и названия _аудиозаписей_.
    - создание, редактирование и удаление ссылок на _нотные примеры_ и _таблицы_ для гармонизации мелодии, сольфеджирования и слухового анализа, просмотр _нотных примеров_ и _таблиц_ в отдельном попапе.
6. **Архив**
    - возомжность выбора материалов по году проведения олимпиады (с помощью табов)
    - возомжность выбора и скачивания материалов по категориям участников (с помощью дропдауна на каждой карточке)
    - создание, редактирование и удаление карточек по типам заданий для каждой группы участников, переключение между карточками с помощью кнопок слайдера (на некоторых разрешениях).
7. **Результаты**
    - создание, редактирование и удаление ссылок на результаты Олимпиады для каждой категории участников, скачивание файлов результатов
    - возможность сделать кнопки для скачивания результатов неактивными, если нет данных результатов
8. **Жюри** - создание, редактирование и удаление карточек членов жюри Олримпиады, переключение между карточками с помощью кнопок слайдера (на некоторых разрешениях).

## Стек технологий

<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="html5" alt="html5" width="40" height="40"/>&nbsp
  <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-original.svg" title="css" alt="css" width="40" height="40"/>&nbsp
  <img src="https://github.com/devicons/devicon/blob/master/icons/sass/sass-original.svg" title="sass" alt="sass" width="40" height="40"/>&nbsp
  <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="javascript" alt="javascript" width="40" height="40"/>&nbsp
  <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" title="reactjs" alt="reactjs" width="40" height="40"/>&nbsp
  <img src="https://github.com/devicons/devicon/blob/master/icons/redux/redux-original.svg" title="redux/rtk" alt="redux" width="40" height="40"/>&nbsp
  <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" title="typescript" alt="typescript" width="40" height="40"/>&nbsp
  <img src="https://github.com/devicons/devicon/blob/master/icons/figma/figma-original.svg" title="figma" alt="figma" width="40" height="40"/>&nbsp
  <img src="https://github.com/devicons/devicon/blob/master/icons/vscode/vscode-original.svg" title="vs-code" alt="vs-code" width="40" height="40"/>&nbsp
  <img src="https://github.com/devicons/devicon/blob/master/icons/git/git-original.svg" title="git" alt="git" width="40" height="40"/>&nbsp
</div>

## Инструкция по использованию проекта

- `git clone https://github.com/Argayash1/music-theory-olympiad-frontend.git` - клонирование репозитория с кодом проекта
- `cd music-theory-olympiad-frontend` - перейти в папку с проектом
- `npm install` - установка зависимостей проекта
- `npm start` - сборка проекта в режиме разработки
- `npm run build` - сборка проекта в продакшн-режиме
- `npm run test` - сборка проекта в режиме тестирования
- `npm run eject` - "извлечение" скрытой конфигурации сборки приложения

## Ссылки

- [Макет в Figma](https://www.figma.com/file/ekDfxOpvREGF7v4PNtiSYh/%D0%BE%D0%BB%D0%B8%D0%BC%D0%BF%D0%B8%D0%B0%D0%B4%D0%B0?type=design&node-id=0%3A1&mode=design&t=FAKnpFbbFsL5aWw0-1)
- [Деплой](https://олимпиадавизеля.рф)

## Желаю увлекательного изучения!
