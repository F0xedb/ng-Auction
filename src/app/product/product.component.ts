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
  public product: Product;
  public SuggestedProducts_: Observable<Product[]>;

  constructor(private route: ActivatedRoute, private productservise: ProductService) {
    this.route.paramMap.pipe(
      map( x => x.params.productid),
      filter ( x => !!x)
    ).subscribe(x => {this.product_ = this.productservise.getById(x); } );
    this.product_.subscribe( x => this.product = x);


    this.SuggestedProducts_ = this.productservise.getAll();
  }

  ngOnInit() {
  }

}
