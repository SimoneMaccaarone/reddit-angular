import { Component } from '@angular/core';
import { RedditService } from 'src/app/services/reddit-service/reddit.service';
import { BaseModel } from 'src/app/models/base-model';
import { coerceStringArray } from '@angular/cdk/coercion';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  redditArray?: BaseModel[]

  selectedArgument = 'all'

  gesu: any;
  figa: any;
  count: number = 0;


  constructor(private redditService: RedditService) {
    this.loadPosts();
    this.dataLog();
  }


  loadPosts() {
    this.redditService.getRedditPosts(this.selectedArgument).subscribe({
      next: figa => { this.figa = figa.data.children.data },
      error: err => console.log('ERRORE ', err)
    })
  }

  dataLog() {
    this.redditService.getRedditPosts(this.selectedArgument).subscribe({
      next: gesu => {
        for (let i = 0; i < gesu.data.children.lenght; i++)
          console.log('All: 100migliori post', gesu.data.children[i].data.title)
      },
      error: err => console.log('tua madre troia', err)
    })
  }

  // loadPosts() {
  //   this.redditService.getRedditPosts(this.selectedArgument).subscribe({
  //     next: figa => { this.figa =  JSON.stringify(figa.data.children.data) },
  //     error: err => console.log('ERRORE ', err)
  //   })
  // }

}

