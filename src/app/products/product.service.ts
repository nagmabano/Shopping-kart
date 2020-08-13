import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  itemSelected;
  brandSpecificProducts: any;

  brandFilter = new Subject();

  constructor(private http: HttpClient) { }

  setItem(item) {
    this.itemSelected = item;
  }

  getItem() {
    return this.itemSelected;
  }

  setBrandSpecificProduct(item) {
    this.brandSpecificProducts = item;
    this.brandFilter.next(this.brandSpecificProducts);
  }

  getProductList() {
    let url = `https://my-json-server.typicode.com/banshilaldangi/ecommerce/products`;
    return this.http.get(url);
  }

  getFeatureList() {
    let url = `https://my-json-server.typicode.com/banshilaldangi/ecommerce/features`;
    return this.http.get(url);
  }

  getBrandList() {
    let url = `https://my-json-server.typicode.com/banshilaldangi/ecommerce/brands`;
    return this.http.get(url);
  }

  getCategories() {
    let url = `https://my-json-server.typicode.com/banshilaldangi/ecommerce/categories`;
    return this.http.get(url);
  }

  getFilteredBrand(id) {
    let url = `https://my-json-server.typicode.com/banshilaldangi/ecommerce/products?category_id=${id}`;
    return this.http.get(url);
  }
}
