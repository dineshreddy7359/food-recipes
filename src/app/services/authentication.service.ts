import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { APP_CONFIG, AppConfig } from 'src/app/app-config/app-config.module';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(
        private http: HttpClient,
        @Inject(APP_CONFIG) private config: AppConfig
    ) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(userName, password) {
        return this.http.post<any>(`${this.config.apiUrl}/login/users/authenticate/`, { userName, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                if(user !== undefined && user !== null && user.length !== 0) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    localStorage.setItem('theme-color', 'blue');
                    this.currentUserSubject.next(user);
                    return user;
                }
                else {
                    this.currentUserSubject.next(null);
                }
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        localStorage.removeItem('theme-color');
        this.currentUserSubject.next(null);
    }
    
}
