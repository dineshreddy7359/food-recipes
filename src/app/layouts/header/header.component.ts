import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() headerName: any;
  currentUser: User;
  users = [];
  themeColor: any;
  @Output() theme: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
    this.themeColor = localStorage.getItem('theme-color');
    Cookie.set('theme-color', this.themeColor);
  }

  ngOnInit() {
    this.theme.emit(this.themeColor);
    this.loadAllUsers();
  }

  themeChange(color) {
    this.themeColor = color;
    localStorage.setItem('theme-color', this.themeColor);
    Cookie.set('theme-color', this.themeColor);
    this.theme.emit(this.themeColor);
  }

  loadAllUsers() {
    this.userService.getAll().subscribe(users => this.users = users);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
