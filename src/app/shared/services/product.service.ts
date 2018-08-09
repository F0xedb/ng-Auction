import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map, find} from 'rxjs/operators';


export interface Product{
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
}


@Injectable({
  providedIn: 'root'
})
export class ProductService{

  constructor(private httpClient: HttpClient) { }

  // return an observable as a producst array
  getAll(): Observable<Product[]>{
    return this.httpClient.get<Product[]>('/data/products.json');
  }

  getById(productId: number): Observable<Product>{
    return this.getAll().pipe(
      map(res => res.find( p => p.id === productId))
    );
  }
}
