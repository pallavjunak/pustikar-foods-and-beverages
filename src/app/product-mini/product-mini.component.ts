import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-mini',
  templateUrl: './product-mini.component.html',
  styleUrls: ['./product-mini.component.css']
})
export class ProductMiniComponent {
  constructor(private router: Router) {}

  goToProducts() {
    this.router.navigate(['/products']);
  }
}
