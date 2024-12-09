import { Component , OnInit} from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-choose-box',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule],
  templateUrl: './choose-box.component.html',
  styleUrl: './choose-box.component.scss'
})
export class ChooseBoxComponent {

  boxList: Product[] = [];
  responsiveOptions: any[] | undefined;

  constructor(private productService: ProductService) {}

  ngOnInit(){
    this.productService.getDummyProducts().subscribe({
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
