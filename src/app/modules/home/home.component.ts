import {Component, OnInit} from '@angular/core';
import {TweetServiceService} from './services/tweet-service.service';
import {AuthenticationService} from '../../core/auth/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  idToken: string;

  constructor(public tweetService: TweetServiceService,
              private authService: AuthenticationService) {
    this.idToken = this.authService.currentUserValue.idToken;
  }

  ngOnInit() {
    this.tweetService.getAllTweet(this.idToken).subscribe(res => {
      console.log(res, 'This all Tweets');
    });
  }

}
