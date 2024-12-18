import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-slideshow',
  standalone: true,
  imports: [GalleriaModule, RouterModule],
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.scss'
})
export class SlideshowComponent {
  images: any[] | undefined;

  ngOnInit() {
    this.images = [
      
      {
        itemImageSrc: 'assets/images/gift2.jpg',
        thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1'
      },
      {
        itemImageSrc: 'assets/images/gift3.jpg',
        thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1'
      },
    ]
  }
}
