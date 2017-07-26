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
var software_customer_service_1 = require("../software_customer_service/software_customer.service");
var router_1 = require("@angular/router");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var Software_Customer_Component = (function () {
    function Software_Customer_Component(router, softwareCustomerService, toastr, vcRef) {
        this.router = router;
        this.softwareCustomerService = softwareCustomerService;
        this.toastr = toastr;
        this.vcRef = vcRef;
        this.toastr.setRootViewContainerRef(vcRef);
    }
    Software_Customer_Component.prototype.getCustomer = function () {
        this.listMstCustomer = new wijmo.collections.CollectionView(this.softwareCustomerService.getCustomerList());
    };
    Software_Customer_Component.prototype.btnAddCustomer = function () {
        this.softwareCustomerService.postCustomerData(null);
    };
    Software_Customer_Component.prototype.btnDeleteCustomerModal = function () {
        document.getElementById("deleteItemModal").click();
    };
    Software_Customer_Component.prototype.btnDeleteCustomer = function () {
        var toastr;
        var currentSelectedItem = this.listMstCustomer.currentItem;
        if (currentSelectedItem.IsLocked == true) {
            this.toastr.error('', 'You cant delete Lock Item');
        }
        else {
            this.softwareCustomerService.deleteCustomer(currentSelectedItem.Id, toastr);
        }
    };
    Software_Customer_Component.prototype.ngOnInit = function () {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.getCustomer();
    };
    return Software_Customer_Component;
}());
Software_Customer_Component = __decorate([
    core_1.Component({
        selector: 'software_customer',
        templateUrl: 'app/software_customer/software_customer_template/software_customer.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        software_customer_service_1.Software_Customer_Service,
        ng2_toastr_1.ToastsManager,
        core_1.ViewContainerRef])
], Software_Customer_Component);
exports.Software_Customer_Component = Software_Customer_Component;
//# sourceMappingURL=software_customer.component.js.map