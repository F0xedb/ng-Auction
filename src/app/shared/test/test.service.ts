import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface testObj {
  id: number,
  Content: string;
}

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private BaseUrl: string;
  constructor(private http: HttpClient) {
    this.BaseUrl = 'http://localhost:3000';
  }
  contact(loc: string) {
    return this.http.get<testObj>(this.BaseUrl + loc);
  }
  remove(loc: string) {
    return this.http.delete<testObj>(this.BaseUrl + loc);
  }
  post(loc: string, item: object) {
    return this.http.post(this.BaseUrl + loc , item);
  }
}
