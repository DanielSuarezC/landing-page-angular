import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product,productList } from '../products/products.mocks';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  //Cuando usabamos el mock
  //product?: product;
  loading: boolean = true;
  //productList: product[] = productList
  product?: IProduct;
  color: String = '';

  constructor(private _route: ActivatedRoute, private _apiService: ApiService){ }

  ngOnInit(): void {

    /*setTimeout(() => {
      this._route.params.subscribe(params => {
        //console.log(params['productId']);
        this.product = this.productList.find(product => product.id == params['productId'])
        this.color = this.product?.price as number > 9 ? 'red': '';
        this.loading = false;
      });
    }, 1500);*/
      this._route.params.subscribe(params => {  
      this._apiService.getProduct(Number(params['productId'])).subscribe((data: IProduct) =>{
        this.product = data
        this.color = this.product?.price as number > 200 ? 'red': '';
        this.loading = false;
      });
    });

  }
}
