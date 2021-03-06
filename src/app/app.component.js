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
var router_1 = require("@angular/router");
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
var AppComponent = (function () {
    function AppComponent(router, slimLoadingBarService) {
        this.router = router;
        this.slimLoadingBarService = slimLoadingBarService;
    }
    //start loading
    AppComponent.prototype.startLoading = function () {
        this.slimLoadingBarService.progress = 30;
        this.slimLoadingBarService.start();
    };
    // complete loading
    AppComponent.prototype.completeLoading = function () {
        this.slimLoadingBarService.complete();
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        localStorage.removeItem('access_token');
        localStorage.removeItem('expires_in');
        localStorage.removeItem('token_type');
        localStorage.removeItem('userName');
        setTimeout(function () {
            _this.router.navigate(['home']);
        }, 500);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/shared_header/shared_header_template/shared_header.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        ng2_slim_loading_bar_1.SlimLoadingBarService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map