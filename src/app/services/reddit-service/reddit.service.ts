import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RedditService {
  isLight!: boolean;
  // static data?: string;
  // static BASE_URL = 'https://www.reddit.com/r/'

  constructor(private http: HttpClient) { }

  getRedditPosts(argument: string): Observable<any> {

    return this.http
      .get<any>('https://www.reddit.com/r/' + argument + '/hot.json?limit=100').pipe(
        tap(obj => console.log('Sono dentro il TAP:', obj)),
        map((obj => obj.data)),
        tap((data) => console.log('Sono dentro il secondo tap', data))
      )
  }
}


//   static getPage(data?:string) {
//     if(data !== undefined){
//     return fetch(this.BASE_URL + data + 'hot.json?limit=100')
//       .then(resp => console.log('--- Con DATA ---',resp.json()));
//     }else{
//       return fetch(this.BASE_URL + 'all/hot.json?limit=100')
//       .then(resp => console.log('--- NULL ---', resp.json()))
//     }
//   }
// }

// RedditService.getPage('r/Overwatch')
