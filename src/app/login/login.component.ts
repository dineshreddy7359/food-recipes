import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrMessageModel } from 'src/app/toastr.model';
import { MESSAGE_TYPE_SUCCESS, MESSAGE_TYPE_ERROR } from 'src/app/app-config/app.constants';
import { AlertService } from 'src/app/services/alert.service';
import { LoaderService } from 'src/app/shared/loader/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  hide = true;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private loaderService: LoaderService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {
    this.formControls();
  }

  formControls() {
    this.loginForm.addControl('userName', new FormControl('', [Validators.required]));
    this.loginForm.addControl('password', new FormControl('', [Validators.required]));
  }

  login() {
    this.loaderService.startLoader();
    const loginFormValues = this.loginForm.value;
    this.authenticationService.login(loginFormValues.userName, loginFormValues.password).subscribe((data) => {
      this.loaderService.stop();
      this.successMessage('Successfully Logged In!.....');
      this.router.navigate(['/dashboard']);
    }, (error) => {
      this.loaderService.stop();
      this.errorMessage('Failed to login! UnAuthorised!.....');
    });
  }

  successMessage(data: string) {
    const message = new ToastrMessageModel();
    message.message = data;
    message.type = MESSAGE_TYPE_SUCCESS;
    this.alertService.toastrMessage(message);
  }

  errorMessage(data: string) {
    const message = new ToastrMessageModel();
    message.message = data;
    message.type = MESSAGE_TYPE_ERROR;
    this.alertService.toastrMessage(message);
  }

}
