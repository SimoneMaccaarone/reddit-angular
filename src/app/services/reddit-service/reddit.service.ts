import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RedditService {
  isLight!: boolean;


  constructor(private http: HttpClient) { }

  getRedditPosts(argument: string): Observable<any> {

    return this.http
      .get<any>('https://www.reddit.com/r/' + argument + '/hot.json?limit=100').pipe(
        tap((obj) => console.log('1° tap:', obj)),
        map((obj => obj.data)), //data
        tap((data) => console.log('2° tap:', data)),
        map((data => data.children)), //children
        tap((data) => console.log('3° tap:', data)),
        map((children) => children.map((child: any) => child.data)), // children.data
        tap((childrenData)=> console.log('4° tap',childrenData))
      )
  }







}

