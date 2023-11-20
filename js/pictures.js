const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.pictures');

const renderPhoto = (photo) => {
  const {url, description, comments, likes} = photo;
  const pictureElement = pictureTemplate.cloneCode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;

  return pictureElement;
};

const renderPhotos = (photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    fragment.appendChild(renderPhoto(photo));
  });

  pictures.appendChild(fragment);
};

export {renderPhotos};
