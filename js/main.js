import { getObjects } from './createObjects.js';
import { renderingThumbnails } from './renderingThumbnails.js';
import { renderingBigPicture } from './renderingBigPicture.js';
const objects = getObjects();
renderingThumbnails(objects);
renderingBigPicture(objects);
