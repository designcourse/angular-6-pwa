import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  gimmeJokes() {
    return this.http.get('https://api.chucknorris.io/jokes/random')
  }
}
