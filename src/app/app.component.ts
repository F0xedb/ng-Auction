import { Component } from '@angular/core';
import {TestService} from './shared/test/test.service';


@Component({
  selector: 'nga-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-auction';
  fulltitle = 'ng-auction';

  constructor(private test: TestService) {}
  server() {
    console.log('sending request to the server');
    this.test.contact('/product').subscribe(
      next => {console.log(next); this.handle(next.id); }
    );
  }
  remove() {
    console.log('removing number');
    this.test.remove('/product').subscribe(
      next => {console.log(next); this.handle(next.id); }
    );
  }
  post() {
    console.log('posting');
    this.test.post('/product', {id: 10, Contact: 'hello'});
  }

  handle(id) {
    const arr = this.fulltitle.split('');
    let holder = '';
    for (let i = 0; i < arr.length; i++) {
      if (i < id) {
        holder += arr[i];
      }
    }
    this.title = holder;
  }
}
