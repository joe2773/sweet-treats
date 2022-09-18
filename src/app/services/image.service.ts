import { Injectable } from '@angular/core';
import { ImageLinks } from '../Data/ImageLinks';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  public getAllGalleryImageLinks() {
    return ImageLinks;
  }
}
