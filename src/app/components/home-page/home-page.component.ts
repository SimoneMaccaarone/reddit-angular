import { Component } from '@angular/core';
import { RedditService } from 'src/app/services/reddit-service/reddit.service';
import { Post } from 'src/app/models/post';
import { coerceStringArray } from '@angular/cdk/coercion';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  isLight = true;

  selectedArgument = 'all'

  data: any;
  gesu: any;
  posts: any;
  count: number = 0;


  constructor(private redditService: RedditService) {
    this.loadPosts();
    // this.dataLog();
  }


  loadPosts() {
    this.redditService.getRedditPosts(this.selectedArgument)
      .subscribe({
        next: data => console.log('Sono dentro al componente',data),
        error: err => console.log('ERRORE ', err)
      })

  }

  changeThemes(){
    document.body.classList.toggle('dark-mode');
    this.isLight = !this.isLight;
  }


// dataLog() {
  //   this.redditService.getRedditPosts(this.selectedArgument).subscribe({
  //     next: data => console.log(data),
  //     error: err => console.log(err)
  //   })
  // }

}






// dataLog() {
//   this.redditService.getRedditPosts(this.selectedArgument).subscribe({
//     next: gesu => {
//       for (let i = 0; i < gesu.data.children.lenght; i++)
//         console.log('All: 100migliori post', gesu.data.children[i].data.title)
//     },
//     error: err => console.log('tua madre troia', err)
//   })
// }
