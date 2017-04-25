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
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';
var Security_Login_Service = (function () {
    function Security_Login_Service(router, http) {
        this.router = router;
        this.http = http;
    }
    Security_Login_Service.prototype.login = function (username, password) {
        var _this = this;
        var loginTokenUrl = 'http://localhost:2558/token';
        var body = "username=" + username + "&password=" + password + "&grant_type=password";
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        this.http.post(loginTokenUrl, body, options).subscribe(function (response) {
            localStorage.setItem('access_token', response.json().access_token);
            localStorage.setItem('expires_in', response.json().expires_in);
            localStorage.setItem('token_type', response.json().token_type);
            localStorage.setItem('userName', response.json().userName);
            _this.router.navigate(['/dashboard']);
            console.log("success");
        }, function (error) {
            // this.toastr.error('Please try again.', 'Login Failed');
            console.log("error");
        });
    };
    return Security_Login_Service;
}());
Security_Login_Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http])
], Security_Login_Service);
exports.Security_Login_Service = Security_Login_Service;
//# sourceMappingURL=security_login.service.js.map