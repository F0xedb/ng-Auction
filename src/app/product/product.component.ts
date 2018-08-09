import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product, ProductService} from '../shared/services/product.service';
import {ActivatedRoute} from '@angular/router';
import {map, filter, switchMap} from 'rxjs/operators';

@Component({
  selector: 'nga-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public product_: Observable<Product>;
  public SuggestedProducts_: Observable<Product[]>;

  constructor(private route: ActivatedRoute, private productservise: ProductService) {
    this.product_ = this.route.paramMap.pipe(
      map(params => parseInt(params.get('productId') || '' , 10 )),
      filter( productId => !!productId),
      switchMap(productId => this.productservise.getById(productId))
    );
    this.SuggestedProducts_ = this.productservise.getAll();
  }

  ngOnInit() {
  }

}
