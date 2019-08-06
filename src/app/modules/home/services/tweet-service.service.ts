import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TweetServiceService {


  constructor(private http: HttpClient) {
  }

  getAllTweet(authToken) {
    // return this.http.get<any>(`https://angular-sample-twitter.firebaseio.com/tweets.json?auth=${this.storageToken.idToken}`);
    return this.http.get<any>(`https://angular-sample-twitter.firebaseio.com/tweets.json?auth=${authToken}`);
  }
}
