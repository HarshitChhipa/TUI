import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})

export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthenticationService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //  Adding the Auth header with JWT Token if available
    const currentUser = this.authService.currentUserValue;

    // Checking that Token is there or not
    if (currentUser && currentUser.token) {

      // Assigining or cloning the token
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    }

    // Passing Request forward with token

    return next.handle(req);
  }
}
