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
var Software_Settings_Component = (function () {
    function Software_Settings_Component(router) {
        this.router = router;
    }
    Software_Settings_Component.prototype.ngOnInit = function () {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
    };
    return Software_Settings_Component;
}());
Software_Settings_Component = __decorate([
    core_1.Component({
        selector: 'software_settings',
        templateUrl: 'app/software_settings/software_settings_template/software_settings.html'
    }),
    __metadata("design:paramtypes", [router_1.Router])
], Software_Settings_Component);
exports.Software_Settings_Component = Software_Settings_Component;
//# sourceMappingURL=software_settings.component.js.map