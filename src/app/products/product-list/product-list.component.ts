import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  images = ['data:image/jpeg;base64,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',
'data:image/jpeg;base64,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',
'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMrK_jZBZX9VRZL1T-qRm_Sf6K1HhsORQGY2E0MJFLHTVeuIjS717et0BAYR5kpQV7n_OU444PamKZklnITw5eypdKOMKaM6bofg&usqp=CAU&ec=45690273',
'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjbxZBhjapY7_7jtc1GN12msVZYW05RpWZLMHG_uai_U_kunB5R7CpeYvUFVXZcTquJ6GEWfXb4z6dae1089Tb3tck8CHtjwfifA&usqp=CAU&ec=45690273',
'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBUBV0bIdPgScvWIGYPbkQmtsllkk60FWnuvhMbL3wYLzUoSE6xMBOxyhunpZ49hK2jiahEM-azVCxgZBRyAH5O90Emc2BAKMsww&usqp=CAU&ec=45690273'
];

  productList;

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.productService.getProductList().subscribe((result) => {
      console.log(result);
      
      this.productList = result;
      this.productList.forEach((item, index) => {
        this.productList[index].img = this.images[index];
      });
      console.log(this.productList, 'listp')
    });
    // this.productService.brandFilter.subscribe((response) => {
    //   this.productList = response;
    // })
  }

  onClickProduct(item) {
    this.productService.setItem(item);
    this.router.navigate(['details', item.id]);
  }



}