import { Component , OnInit} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product';
import { Carousel } from 'primeng/carousel';
import { Tag } from 'primeng/tag';

@Component({
  selector: 'app-choose-box',
  standalone: true,
  imports: [Carousel, ButtonModule, Tag],
  templateUrl: './choose-box.component.html',
  styleUrl: './choose-box.component.scss'
})
export class ChooseBoxComponent {

  boxList: Product[] = [];
  responsiveOptions: any[] | undefined;

  constructor(private productService: ProductService) {}

  ngOnInit(){
    this.productService.getDummyBoxes().subscribe({
      next: (data) => (this.boxList = data),
      error: (err) => console.error('Failed to fetch products', err),
    });

    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

}
