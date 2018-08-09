import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { ObservableMedia } from '@angular/flex-layout';
import {Product, ProductService} from '../shared/services/product.service';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'nga-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  readonly columns_: Observable<number>;
  readonly  products_: Observable<Product[]>;

  readonly bpToColumnsNum = new Map([
    ['xs', 1 ],
    ['sm', 2 ],
    ['md', 3 ],
    ['lg', 4 ],
    ['xl', 5 ]
  ]);

  constructor(private media: ObservableMedia, private productService: ProductService, private router: Router) {
    this.products_ = this.productService.getAll();
    this.columns_ = this.media.asObservable().pipe(map( y => <number>this.bpToColumnsNum.get(y.mqAlias)));

  }

  ngOnInit() {}

}
