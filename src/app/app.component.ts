import {Component} from '@angular/core';
import {UserModel} from './shared/models/user.model';
import {Router} from '@angular/router';
import {AuthenticationService} from './core/auth/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// TODO: Folders Under Modules will be refactored.Structuring of the application should be done proper.

export class AppComponent {
  currentUser: UserModel;

  constructor(private router: Router,
              private authService: AuthenticationService) {

    this.authService.currentUser.subscribe(x => this.currentUser = x);

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
