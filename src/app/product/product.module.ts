import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule } from '@angular/flex-layout';
import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductSuggestionComponent } from './product-suggestion/product-suggestion.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    RouterModule.forChild([
      {path: '', component: ProductComponent}
      ])
  ],
  declarations: [ProductComponent, ProductDetailComponent, ProductSuggestionComponent]
})
export class ProductModule { }
