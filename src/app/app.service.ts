import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  result: Response | any;

  constructor(private http: HttpClient) {}

  getYoast() {
    return new Promise((resolve, reject) => {
      this.http
        .get('https://yoast.com/wp-json/wp/v2/posts?slug=wordpress-seo')
        .subscribe(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }
}
