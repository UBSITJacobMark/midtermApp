import { Product } from '../models/products/product.interface'; 
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})


export class ProductService {
  private products: Product[] = [
    { id: 101, name: 'Logitech G Pro', category: 'Peripherals', price: 129, stock: 15, status: 'Available', description: 'Professional wireless gaming mouse.', manufacturer: 'Logitech', warranty: '2 Years', rating: 4.8 },
    { id: 102, name: 'Keychron K2', category: 'Peripherals', price: 89, stock: 0, status: 'Out of Stock', description: 'Compact mechanical keyboard.', manufacturer: 'Keychron', warranty: '1 Year', rating: 4.5 },
    { id: 103, name: 'Samsung Odyssey G7', category: 'Monitors', price: 599, stock: 5, status: 'Limited', description: '32-inch curved gaming monitor.', manufacturer: 'Samsung', warranty: '3 Years', rating: 4.7 },
    { id: 104, name: 'Sony WH-1000XM5', category: 'Audio', price: 349, stock: 12, status: 'Available', description: 'Industry-leading noise canceling headphones.', manufacturer: 'Sony', warranty: '1 Year', rating: 4.9 },
    { id: 105, name: 'RTX 4080 Super', category: 'Hardware', price: 999, stock: 2, status: 'Limited', description: 'High-performance graphics card.', manufacturer: 'NVIDIA', warranty: '3 Years', rating: 4.6 },
    { id: 106, name: 'Blue Yeti Mic', category: 'Audio', price: 110, stock: 20, status: 'Available', description: 'Professional USB microphone.', manufacturer: 'Logitech', warranty: '2 Years', rating: 4.4 },
    { id: 107, name: 'Elgato Stream Deck', category: 'Accessories', price: 149, stock: 0, status: 'Out of Stock', description: 'Customizable keys for streaming.', manufacturer: 'Corsair', warranty: '2 Years', rating: 4.8 },
    { id: 108, name: 'Secretlab Titan', category: 'Furniture', price: 520, stock: 8, status: 'Available', description: 'Ergonomic gaming chair.', manufacturer: 'Secretlab', warranty: '5 Years', rating: 4.7 },
    { id: 109, name: 'Razer Goliathus', category: 'Peripherals', price: 30, stock: 50, status: 'Available', description: 'Large RGB gaming mousepad.', manufacturer: 'Razer', warranty: '1 Year', rating: 4.2 },
    { id: 110, name: 'Western Digital 2TB', category: 'Storage', price: 180, stock: 4, status: 'Limited', description: 'NVMe Gen4 Internal SSD.', manufacturer: 'WD_BLACK', warranty: '5 Years', rating: 4.9 }
  ];
  
  getProduct(): Product[] {
    return this.products;
  }
  
  getProductById(id: number): Product | undefined {
    return this.products.find(a => a.id === id);
  }

  updateProduct(updated: Product): void {
    const idx = this.products.findIndex(a => a.id === updated.id);
    if (idx !== -1) this.products[idx] = { ...updated };
  }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('auth_token');
  }

  login(): void { sessionStorage.setItem('auth_token', 'demo-token');}
  logout(): void { sessionStorage.removeItem('auth_token');}  

  selectedProduct: Product | null = null;
  showModal: boolean = false;

  viewProductDetails(product: Product): void {
    this.selectedProduct = product;
    this.showModal = true;
  }
  closeModal(): void {
    this.showModal = false;
  }
}