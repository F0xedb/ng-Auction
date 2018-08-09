import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../shared/services/product.service';

@Component({
  selector: 'nga-product-suggestion',
  templateUrl: './product-suggestion.component.html',
  styleUrls: ['./product-suggestion.component.scss']
})
export class ProductSuggestionComponent implements OnInit {
  @Input() products: Product[];
  constructor() { }

  ngOnInit() {
  }

}
