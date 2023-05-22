import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reddit-angular';
  private url: string = 'https://www.reddit.com/r/Overwatch/hot.json';
data: any;

  ngOnInit(): void {
    fetch(this.url)
    .then((response) => response.json())
    .then(console.log);
  }

}
