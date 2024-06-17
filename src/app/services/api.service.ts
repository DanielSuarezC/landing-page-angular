import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL = 'https://fakestoreapi.com/products';
  //http://localhost:8080/controller/holamundo1
  constructor(private _httpClient: HttpClient) { }

  public getAllProducts(): Observable<IProduct[]> {//Devuelve un observable de productos
    return this._httpClient.get<IProduct[]>(`${this.baseURL}`);
  }

  public getProduct(id: number): Observable<IProduct>{ //Devuelve un observable de un producto
    return this._httpClient.get<IProduct>(`${this.baseURL}/${id}`)
    /*Esta sintaxis en TypeScript es una forma de crear una cadena de texto 
    (string) interpolada. Se usa con comillas invertidas (` `) y permite insertar 
    expresiones dentro de la cadena utilizando ${}.
    Esto es comúnmente utilizado para construir URLs dinámicamente en aplicaciones web o servicios */
  }

  public getAllCategories(): Observable<Category[]>{ //devuelve un observable de categorias
    return this._httpClient.get<Category[]>(`${this.baseURL}/categories`)
  }

  public newProduct(product: IProduct): Observable<IProduct> {//Devuelve un observable de un producto
    return this._httpClient.post<IProduct>(`${this.baseURL}`,product)
  }

  public updateProduct(id: number, product: IProduct): Observable<IProduct>{
    return this._httpClient.put<IProduct>(`${this.baseURL}/${id}`,product)
  }

  public deleteProduct(id:number): Observable <IProduct>{
    return this._httpClient.delete<IProduct>(`${this.baseURL}/${id}`)
  }



   // public getProducts(sort: string): Observable<IProduct[]> { //Permite hacer un sort a los datos traidos por la api
  //   const params = sort ? `?sort=${sort}` : '';
  //   return this._httpClient.get<IProduct[]>(`${this.baseURL}${params}`);
  // }
}
