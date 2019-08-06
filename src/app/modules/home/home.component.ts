import {Component, OnInit} from '@angular/core';
import {TweetServiceService} from './services/tweet-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public tweetService: TweetServiceService) {
  }

  ngOnInit() {
    debugger
    this.tweetService.getAllTweet().subscribe(res => {
      console.log(res, 'This all Tweets');
    });
  }

}
