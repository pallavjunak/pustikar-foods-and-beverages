import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      {
        id: 1,
        name: 'Organic Apple',
        image: 'assets/products/apple.webp',
        description: 'Fresh organic apple directly from the farm.',
        price: '$2.00',
        nutritionImage: 'assets/products/apple_nut.webp'
      },
      {
        id: 2,
        name: 'Organic Banana',
        image: 'assets/products/banana.webp',
        description: 'Rich in potassium, this organic banana is perfect for a snack.',
        price: '1.50',
        nutritionImage: 'assets/products/banana-nut.webp'
      },
      {
        id: 3,
        name: 'Whole Wheat Bread',
        image: 'assets/products/bread.webp',
        description: 'Freshly baked whole wheat bread with no preservatives.',
        price: '3.00',
        nutritionImage: 'assets/products/bread-nut.webp'
      },
      {
        id: 4,
        name: 'Joha Rice Biscuits',
        image: 'assets/products/rice.webp',
        description: 'Freshly baked Joha Rice biscuits with no preservatives.',
        price: '3.00',
        nutritionImage: 'assets/products/rice-nut.webp'
      },
      {
        id: 5,
        name: 'Joha Bisk',
        image: 'assets/products/joha.webp',
        description: 'Freshly baked Joha Rice biscuits with no preservatives.',
        price: '3.00',
        nutritionImage: 'assets/products/joha-nut.webp'
      }
    ];
    return { products };
  }
}
