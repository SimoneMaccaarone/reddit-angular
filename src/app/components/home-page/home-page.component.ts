import { Component } from '@angular/core';
import { BaseModel } from 'src/app/models/base-model';
import { RedditService } from 'src/app/services/reddit-service/reddit.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  [x: string]: any;

  redditArray?: BaseModel[]

  constructor(public redditService: RedditService) {
    RedditService.getPage().then(gesu => console.log('DATA', gesu.data))
  }



}
