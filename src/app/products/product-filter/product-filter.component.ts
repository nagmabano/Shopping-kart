import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  isChecked:any=false;
  featuresList: any;
  brandList: Object;
  brandSpecificProduct = [];

  constructor(private productService: ProductService) {}

  onChange($event:Event){
     console.log($event);
     console.log("value changed");

  }

  ngOnInit() {
    this.productService.getFeatureList().subscribe((result) => {
      console.log(result);
      this.featuresList = result;
    });
    this.productService.getBrandList().subscribe((result) => {
      console.log('brands', result);
      this.brandList = result;
    });
  }

  onSelectBrand(id) {
    this.productService.getFilteredBrand(id).subscribe((result) => {
      console.log(result);
      this.brandSpecificProduct.push(result[0]);
      this.productService.setBrandSpecificProduct(this.brandSpecificProduct);
    })
  }

}
