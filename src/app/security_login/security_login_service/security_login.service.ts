import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class Security_Login_Service {
    constructor(
        private router: Router,
        private http: Http,
        // private toastr: ToastsManager
    ) { }

    public login(username: string, password: string): void {
        let loginTokenUrl = 'http://localhost:2558/token';
        let body = "username=" + username + "&password=" + password + "&grant_type=password";
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers })

        this.http.post(loginTokenUrl, body, options).subscribe(
            response => {
                localStorage.setItem('access_token', response.json().access_token);
                localStorage.setItem('expires_in', response.json().expires_in);
                localStorage.setItem('token_type', response.json().token_type);
                localStorage.setItem('userName', response.json().userName);
                this.router.navigate(['/postouch']);
                console.log("success");
            },
            error => {
                // this.toastr.error('Please try again.', 'Login Failed');
                console.log("error");
            }
        )
    }
}