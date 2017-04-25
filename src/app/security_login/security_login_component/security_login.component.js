"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var security_login_service_1 = require("../security_login_service/security_login.service");
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';
var Security_Login_Component = (function () {
    function Security_Login_Component(router, http, 
        // private toastr: ToastsManager,
        // private login_model: Security_Login_Model,
        login_service) {
        this.router = router;
        this.http = http;
        this.login_service = login_service;
        this.login_model = {
            username: "",
            password: ""
        };
    }
    Security_Login_Component.prototype.security_login = function () {
        // let toastr: ToastsManager;
        var username = this.login_model.username;
        var password = this.login_model.password;
        this.login_service.login(username, password);
    };
    Security_Login_Component.prototype.ngOnInit = function () {
        if (localStorage.getItem('access_token')) {
            this.router.navigate(['dashboard']);
        }
    };
    return Security_Login_Component;
}());
Security_Login_Component = __decorate([
    core_1.Component({
        selector: 'security-login',
        templateUrl: 'app/security_login/security_login_template/security_login.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http,
        security_login_service_1.Security_Login_Service])
], Security_Login_Component);
exports.Security_Login_Component = Security_Login_Component;
//# sourceMappingURL=security_login.component.js.map