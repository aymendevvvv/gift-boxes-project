import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getDummyProducts(): Observable<Product[]> {
    const dummyProducts: Product[] = [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
      {
        id: '1001',
        code: 'nvklal433',
        name: 'Black Watch',
        description: 'Product Description',
        image: 'black-watch.jpg',
        price: 72,
        category: 'Accessories',
        quantity: 61,
        inventoryStatus: 'INSTOCK',
        rating: 4,
      },
      {
        id: '1002',
        code: 'zz21cz3c1',
        name: 'Blue Band',
        description: 'Product Description',
        image: 'blue-band.jpg',
        price: 79,
        category: 'Fitness',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 3,
      },
      {
        id: '1003',
        code: '244wgerg2',
        name: 'Blue T-Shirt',
        description: 'Product Description',
        image: 'blue-t-shirt.jpg',
        price: 29,
        category: 'Clothing',
        quantity: 25,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
      {
        id: '1004',
        code: 'h456wer53',
        name: 'Braclet',
        description: 'Product Description',
        image: 'bracelet.jpg',
        price: 50,
        category: 'Clothing',
        quantity: 0,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4,
      },
    ];
    return of(dummyProducts);
  }

  getDummyBoxes(): Observable<Product[]> {
    const dummyBoxes: Product[] = [
      {
        id: '2000',
        code: 'box1001',
        name: 'Box of Essentials',
        description: 'A variety of daily essentials',
        image: 'assets/images/boxes/box4.png',
        price: 100,
        category: 'Boxes',
        quantity: 10,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
      {
        id: '2001',
        code: 'box1002',
        name: 'Fitness Starter Pack',
        description: 'Pack includes multiple fitness items',
        image: 'assets/images/boxes/box2.png',
        price: 120,
        category: 'Boxes',
        quantity: 15,
        inventoryStatus: 'INSTOCK',
        rating: 4,
      },
      {
        id: '2002',
        code: 'box1003',
        name: 'Luxury Gift Box',
        description: 'A premium selection of accessories',
        image: 'assets/images/boxes/box3.png',
        price: 250,
        category: 'Boxes',
        quantity: 5,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 5,
      },
      {
        id: '2003',
        code: 'box1004',
        name: 'Travel Essentials',
        description: 'Everything you need for a smooth trip',
        image: 'assets/images/boxes/box4.png',
        price: 180,
        category: 'Boxes',
        quantity: 12,
        inventoryStatus: 'INSTOCK',
        rating: 4,
      },
      {
        id: '2004',
        code: 'box1005',
        name: 'Tech Essentials',
        description: 'Tech gadgets and accessories',
        image: 'assets/images/boxes/box1.png',
        price: 150,
        category: 'Boxes',
        quantity: 8,
        inventoryStatus: 'INSTOCK',
        rating: 4,
      },
    ];
    return of(dummyBoxes);
  }
}
