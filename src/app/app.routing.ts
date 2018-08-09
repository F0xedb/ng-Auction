import {Route} from '@angular/router';

export const routes: Route[] = [
  { path: '', loadChildren: './home/home.module#HomeModule'},
  { path: 'products/:productid' , loadChildren: './product/product.module#ProductModule' }
];
