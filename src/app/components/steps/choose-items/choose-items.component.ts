import { Component } from '@angular/core';

import { DataView } from 'primeng/dataview';
import { Tag } from 'primeng/tag';
import { Rating } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { SelectButton } from 'primeng/selectbutton';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { signal } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-choose-items',
  standalone: true,
  imports: [
    DataView,
    Tag,
    Rating,
    ButtonModule,
    CommonModule,
    SelectButton,
    FormsModule
  ],
  templateUrl: './choose-items.component.html',
  styleUrl: './choose-items.component.scss'
})
export class ChooseItemsComponent {


  boxList: Product[] = [];
  products = signal<any>([]);

  options = ['list', 'grid'];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getDummyProducts().subscribe((data) => {
        this.products.set([...data.slice(0,12)]);
    });
  }
/* 
  ngOnInit(){
    this.productService.getDummyProducts().subscribe({
      next: (data) => (this.boxList = data),
      error: (err) => console.error('Failed to fetch products', err),
    });
  } */

}
