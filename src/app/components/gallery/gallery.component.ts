import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
    public galleryImageLinks : string[] = [];
    constructor(
        private imageService : ImageService
    ) { }

    ngOnInit(): void {
        this.galleryImageLinks = this.imageService.getAllGalleryImageLinks();
    }

}
