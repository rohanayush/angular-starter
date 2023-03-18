import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  dogImages$: Observable<string[]>;

  constructor(private http: HttpClient) {
    this.dogImages$ = this.http
      .get<any>('https://dog.ceo/api/breeds/image/random/10')
      .pipe(
        map((response) => response.message)
      );
  }
}
