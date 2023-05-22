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

  constructor(private redditService: RedditService) {
    this.loadPosts()
  }

  loadPosts() {
    this.redditService.getRedditPosts(this.selectedArgument).subscribe({
      next: data => console.log('ALL CICCIo', data),
      error: err => console.log('tua madre troia', err)
    })
  }





}
