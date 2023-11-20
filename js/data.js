import {getRandomInteger, createIdGenerator, getRandomArrayElement} from './util.js';

const COUNT_PHOTO = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;

const DESCRIPTIONS = [
  'Романтический закат',
  'Отражение цветов',
  'Красота природы',
  'Горы и море',
  'Момент наслаждения',
  'Солнечные лучи',
  'Волшебный пейзаж',
  'Берег и облака',
  'Одинокий человек',
  'Встреча с природой'
];

const NAMES = [
  'Анна',
  'Дмитрий',
  'Елена',
  'Иван',
  'Катерина',
  'Максим',
];

const MESSAGES = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const generateCommentId = createIdGenerator();

const createMassege = () => Array.from(
  { length: getRandomInteger(1, 2) },
  () => getRandomArrayElement(MESSAGES),
).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMassege(),
  name: getRandomArrayElement(NAMES),
});

const createPicture = (index) =>({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from(getRandomInteger(0 , COUNT_PHOTO), createComment)
});

const getPhotos = () => Array.from({length: COUNT_PHOTO},
  (_, pictureIndex) => createPicture(pictureIndex + 1),
);

export {getPhotos};
