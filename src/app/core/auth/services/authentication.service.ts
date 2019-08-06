import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserModel} from '../../../shared/models/user.model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<UserModel>;
  public currentUser: Observable<UserModel>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserModel {
    return this.currentUserSubject.value;
  }

  /**
   * Method call when user is loggin into the system
   */

  login(email: string, password: string) {

    return this.http.post<any>(
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyD8W0pWlju6wOPr3ih_aio2gNiVKHd9F8g',
      {
        email,
        password
      }).pipe(
      map(user => {
        console.log(user, 'This is user data');
        if (!!user && user.idToken) {

          // Storing the token in local storage with key currentUser

          localStorage.setItem('currentUser', JSON.stringify(user));

          console.log('This is Jwt Token', user.token);
          // cetting the users data in currentUser's Context

          this.currentUserSubject.next(user);

        }
        return user;
      })
    );
  }

  // When user is logging out if the application

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
