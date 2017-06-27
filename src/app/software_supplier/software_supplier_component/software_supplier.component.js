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
var software_supplier_service_1 = require("../software_supplier_service/software_supplier.service");
var router_1 = require("@angular/router");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var Software_Supplier_Component = (function () {
    function Software_Supplier_Component(router, softwareSupplierService, toastr, errorToastr, vcRef) {
        this.router = router;
        this.softwareSupplierService = softwareSupplierService;
        this.toastr = toastr;
        this.errorToastr = errorToastr;
        this.vcRef = vcRef;
        this.toastr.setRootViewContainerRef(vcRef);
    }
    Software_Supplier_Component.prototype.getSupplier = function () {
        this.listMstSupplier = new wijmo.collections.CollectionView(this.softwareSupplierService.getSupplierList());
    };
    Software_Supplier_Component.prototype.btnAddSupplier = function () {
        if (this.lock != true) {
            this.softwareSupplierService.postSupplierData(null, this.toastr);
        }
    };
    Software_Supplier_Component.prototype.btnEditItem = function () {
        var currentSelectedItem = this.listMstSupplier.currentItem;
        this.router.navigate(['/supplierdetail', currentSelectedItem.Id]);
    };
    Software_Supplier_Component.prototype.ngOnInit = function () {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.getSupplier();
    };
    Software_Supplier_Component.prototype.btnDeleteItemModal = function () {
        var toastr;
        var currentSelectedItem = this.listMstSupplier.currentItem;
        if (currentSelectedItem.Id) {
            document.getElementById("deleteItemModal").click();
        }
        else {
            this.softwareSupplierService.deleteItem(currentSelectedItem.Id, toastr);
        }
    };
    Software_Supplier_Component.prototype.btnDeleteItem = function () {
        var errorToastr;
        var toastr;
        var currentSelectedItem = this.listMstSupplier.currentItem;
        if (currentSelectedItem.IsLocked == true) {
            this.errorToastr.error('', 'You cant delete Lock Item');
        }
        else {
            // (<HTMLButtonElement>document.getElementById("btn-hidden-start-loading")).click();
            this.softwareSupplierService.deleteItem(currentSelectedItem.Id, toastr);
        }
    };
    return Software_Supplier_Component;
}());
Software_Supplier_Component = __decorate([
    core_1.Component({
        selector: 'software_supplier',
        templateUrl: 'app/software_supplier/software_supplier_template/software_supplier.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        software_supplier_service_1.Software_Supplier_Service,
        ng2_toastr_1.ToastsManager,
        ng2_toastr_1.ToastsManager,
        core_1.ViewContainerRef])
], Software_Supplier_Component);
exports.Software_Supplier_Component = Software_Supplier_Component;
//# sourceMappingURL=software_supplier.component.js.map