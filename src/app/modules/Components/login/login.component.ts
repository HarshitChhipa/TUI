import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../core/auth/services/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginDetails: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthenticationService) {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginDetails = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  get f() {
    return this.loginDetails.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginDetails.invalid) {
      return;
    }

    this.loading = true;
    this.authService.login(this.f.email.value, this.f.password.value).pipe(first()).subscribe(
      data => {
        console.log(this.returnUrl, 'This is return URL');
        this.router.navigateByUrl(this.returnUrl);
        console.log(this.router.navigate([this.returnUrl]));
      },
      error1 => {
        this.loading = false;
      }
    );
  }
}
