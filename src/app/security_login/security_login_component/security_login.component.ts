import { Component } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Security_Login_Model } from '../security_login_model/security_login';
import { Security_Login_Service } from '../security_login_service/security_login.service';
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'security-login',
    templateUrl: 'app/security_login/security_login_template/security_login.html'
})

export class Security_Login_Component {
    constructor(
        private router: Router,
        private http: Http,
        // private toastr: ToastsManager,
        // private login_model: Security_Login_Model,
        private login_service: Security_Login_Service
    ) { }

    private login_model: Security_Login_Model = {
        username: "",
        password: ""
    };

    public security_login(): void {
        // let toastr: ToastsManager;
        let username = this.login_model.username;
        let password = this.login_model.password;
        this.login_service.login(username, password);
    }
    
    public ngOnInit(): any {
        if (localStorage.getItem('access_token')) {
            this.router.navigate(['dashboard']);
        }
    }
}