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
var Software_Dashboard_Component = (function () {
    function Software_Dashboard_Component(router) {
        this.router = router;
    }
    Software_Dashboard_Component.prototype.ngOnInit = function () {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
    };
    return Software_Dashboard_Component;
}());
Software_Dashboard_Component = __decorate([
    core_1.Component({
        selector: 'software_dashboard',
        templateUrl: 'app/software_dashboard/software_dashboard_template/software_dashboard.html'
    }),
    __metadata("design:paramtypes", [router_1.Router])
], Software_Dashboard_Component);
exports.Software_Dashboard_Component = Software_Dashboard_Component;
//# sourceMappingURL=software_dashboard.component.js.map