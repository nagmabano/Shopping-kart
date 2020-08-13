import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productData;

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.productData = this.productService.getItem();
  }

  onClickCancel() {
    this.router.navigate(['/']);
  }

}
