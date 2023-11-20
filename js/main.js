import {getPhotos} from './data.js';
import { renderPhotos } from './pictures.js';

const photos = getPhotos();
renderPhotos(photos);
