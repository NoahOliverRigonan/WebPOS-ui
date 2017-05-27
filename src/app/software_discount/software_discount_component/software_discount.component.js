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
var software_discount_service_1 = require("../software_discount_service/software_discount.service");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var Software_Discount_Component = (function () {
    function Software_Discount_Component(router, softwareDiscountService, toastr, vcRef) {
        this.router = router;
        this.softwareDiscountService = softwareDiscountService;
        this.toastr = toastr;
        this.vcRef = vcRef;
        this.toastr.setRootViewContainerRef(vcRef);
    }
    Software_Discount_Component.prototype.ngOnInit = function () {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.getDiscount();
    };
    Software_Discount_Component.prototype.getDiscount = function () {
        this.listDiscountCollectionView = new wijmo.collections.CollectionView(this.softwareDiscountService.getListOfDiscount());
    };
    Software_Discount_Component.prototype.deleteDiscount = function () {
        var toastr;
        var currentDiscountItem = this.listDiscountCollectionView.currentItem;
        this.softwareDiscountService.deleteDiscountItem(currentDiscountItem.Id, toastr);
    };
    Software_Discount_Component.prototype.deleteDiscountModal = function () {
        document.getElementById("delete-modal-warning-id").click();
    };
    return Software_Discount_Component;
}());
Software_Discount_Component = __decorate([
    core_1.Component({
        selector: 'software_discount',
        templateUrl: 'app/software_discount/software_discount_template/software_discount.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        software_discount_service_1.Software_Discount_Service,
        ng2_toastr_1.ToastsManager,
        core_1.ViewContainerRef])
], Software_Discount_Component);
exports.Software_Discount_Component = Software_Discount_Component;
//# sourceMappingURL=software_discount.component.js.map