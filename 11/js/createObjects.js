import { getInt, getElement } from './util.js';
const PHOTO_COUNT = 25;
const AVATAR_COUNT = 6;
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
const Likes = {
  MIN: 15,
  MAX: 200
};

const Comments = {
  MIN: 0,
  MAX: 30
};

const Id = {
  MIN: 1,
  MAX: 300
};

const createMessages = () =>
  Array.from({length: getInt(1, 2)},
    () => getElement(MESSAGES)).join(' ');

const getId = () => {
  let previousId = 0;
  return () => {
    previousId++;
    return previousId;
  };
};

const getPicId = getId();

const getRandomId = () => {
  const ids = [];
  return () => {
    let id = getInt(Id.MIN, Id.MAX);
    while (ids.includes(id)){
      id = getInt(Id.MIN, Id.MAX);
    }
    ids.push(id);
    return id;
  };
};

const getCommentsId = getRandomId();

const createComment = () => ({
  id: getCommentsId(),
  avatar: `img/avatar-${getInt(1, AVATAR_COUNT)}.svg`,
  message: createMessages(),
  name: getElement(NAMES),
});

const createObject = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  likes: getInt(Likes.MIN, Likes.MAX),
  description: getElement(DESCRIPTIONS),
  name: getElement(NAMES),
  comments: Array.from({ length: getInt(Comments.MIN, Comments.MAX) }, () => createComment())
});

const getObjects = () => Array.from({ length: PHOTO_COUNT }, () => createObject(getPicId()));

export {getObjects};
