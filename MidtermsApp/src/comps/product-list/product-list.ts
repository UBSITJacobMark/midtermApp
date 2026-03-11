import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../app/services/products-Service';
import { Product } from '../../app/models/products/product.interface';
import { OnInit } from '@angular/core';
import { ProductsComponent } from '../../app/models/products/products';

@Component({
  selector: 'app-product-list',
  imports: [RouterOutlet, RouterLink, FormsModule, CommonModule, ProductsComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  products: Product[] = [];
  returnUrl: String | null = null;
  selectedId: number | null = null;
  
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ){}

ngOnInit(): void {
  this.products = this.productService.getProduct();
}

getProduct(a:Product): void {
  this.selectedId = a.id;
  this.router.navigate(['/product-list', a.id, 'details']);
}
}
