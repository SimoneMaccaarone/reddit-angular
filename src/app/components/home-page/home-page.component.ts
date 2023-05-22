import { Component } from '@angular/core';
import { RedditService } from 'src/app/services/reddit-service/reddit.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  // redditArray?: BaseModel[]


  selectedArgument = 'all'

  gesu:any;
  figa:any;


  constructor(private redditService: RedditService) {
    this.loadPosts();
    this.dataLog();
  }


  loadPosts() {
    this.redditService.getRedditPosts(this.selectedArgument).subscribe({
      next: figa => figa.data.after,
      error: err => console.log('tua madre troia', err)
    })
  }

  dataLog() {
    this.redditService.getRedditPosts(this.selectedArgument).subscribe({
      next: gesu => console.log('Data gesu', gesu.data.children),
      error: err => console.log('tua madre troia', err)
    })
  }




}
