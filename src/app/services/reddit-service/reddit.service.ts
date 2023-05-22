import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  static BASE_URL = 'https://www.reddit.com/r/'

  static getPage(data: string) {
    return fetch(this.BASE_URL + data+'hot.json')
      .then(resp => console.log(resp));
  }

}

console.log(RedditService.getPage('Overwatch/'))
