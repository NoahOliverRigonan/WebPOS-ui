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
var software_itemcomponent_service_1 = require("../software_itemcomponent_service/software_itemcomponent.service");
var Software_Itemcomponent_Component = (function () {
    function Software_Itemcomponent_Component(router, softwareItemComponentService) {
        this.router = router;
        this.softwareItemComponentService = softwareItemComponentService;
    }
    Software_Itemcomponent_Component.prototype.getItemComponentList = function () {
        this.listItemComponent = new wijmo.collections.CollectionView(this.softwareItemComponentService.getListOfItem());
    };
    Software_Itemcomponent_Component.prototype.ngOnInit = function () {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.getItemComponentList();
    };
    return Software_Itemcomponent_Component;
}());
Software_Itemcomponent_Component = __decorate([
    core_1.Component({
        selector: 'software_itemcomponent',
        templateUrl: 'app/software_itemcomponent/software_itemcomponent_template/software_itemcomponent.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        software_itemcomponent_service_1.Software_ItemComponent_Service])
], Software_Itemcomponent_Component);
exports.Software_Itemcomponent_Component = Software_Itemcomponent_Component;
//# sourceMappingURL=software_itemcomponent.component.js.map