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
var software_supplierdetail_service_1 = require("../software_supplierdetail_service/software_supplierdetail.service");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var Software_SupplierDetail_Component = (function () {
    function Software_SupplierDetail_Component(router, softwareSupplierDetailService, activatedRoute, toastr, vcRef) {
        this.router = router;
        this.softwareSupplierDetailService = softwareSupplierDetailService;
        this.activatedRoute = activatedRoute;
        this.toastr = toastr;
        this.vcRef = vcRef;
        //Other Method
        this.supplierBoolean = true;
        this.refreshPage = true;
        this.toastr.setRootViewContainerRef(vcRef);
    }
    // get url Id parameter
    Software_SupplierDetail_Component.prototype.getIdUrlParameter = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.supplierId = params['id'];
        });
        return this.supplierId;
    };
    //
    // WJMO-COMBO-BOX - TERM & ACCOUNT
    //
    Software_SupplierDetail_Component.prototype.setFieldValuesUnit = function () {
        if (this.itemCollectionView.items.length > 0) {
            document.getElementById("Supplier").value = this.itemCollectionView.items[0].Supplier;
            document.getElementById("Address").value = this.itemCollectionView.items[0].Address;
            document.getElementById("TelephoneNumber").value = this.itemCollectionView.items[0].TelephoneNumber;
            document.getElementById("CellphoneNumber").value = this.itemCollectionView.items[0].CellphoneNumber;
            document.getElementById("FaxNumber").value = this.itemCollectionView.items[0].FaxNumber;
            document.getElementById("TIN").checked = this.itemCollectionView.items[0].TIN;
            this.listSupplierAccountObservableArray = this.itemCollectionView.items[0].listAccount;
            this.supplierAccountCollectionView = new wijmo.collections.CollectionView(this.listSupplierAccountObservableArray);
            if (this.itemCollectionView.items.length > 0) {
                this.supplierAccountCollectionView.items[0].listAccount = this.itemCollectionView.items[0].listAccount;
            }
            this.listSupplierTermObservableArray = this.itemCollectionView.items[0].listTerm;
            this.supplierTermCollectionView = new wijmo.collections.CollectionView(this.listSupplierTermObservableArray);
            if (this.itemCollectionView.items.length > 0) {
                this.supplierTermCollectionView.items[0].listTerm = this.itemCollectionView.items[0].listTerm;
            }
        }
    };
    Software_SupplierDetail_Component.prototype.cboTermSelectedIndexChanged = function () {
        this.itemCollectionView.items[0].listTerm[this.supplierTermSelectedIndex].Id;
        console.log(this.supplierTermSelectedIndex);
    };
    Software_SupplierDetail_Component.prototype.cboAccountSelectedIndexChanged = function () {
        this.itemCollectionView.items[0].listAccount[this.supplierAccountSelectedIndex].Id;
        console.log(this.supplierAccountSelectedIndex);
    };
    //GET ITEM OBJECT
    Software_SupplierDetail_Component.prototype.getDataSupplierObject = function () {
        var dataObject = {
            Supplier: document.getElementById("Supplier").value,
            Address: document.getElementById("Address").value,
            TelephoneNumber: document.getElementById("TelephoneNumber").value,
            CellphoneNumber: document.getElementById("CellphoneNumber").value,
            FaxNumber: document.getElementById("FaxNumber").value,
            TermId: this.itemCollectionView.items[0].TermId,
            TIN: document.getElementById("TIN").checked,
            AccountId: this.itemCollectionView.items[0].AccountId,
            EntryUserId: this.itemCollectionView.items[0].EntryUserId,
            EntryDateTime: this.itemCollectionView.items[0].EntryDateTime,
            UpdateUserId: this.itemCollectionView.items[0].UpdateUserId,
            UpdateDateTime: this.itemCollectionView.items[0].UpdateDateTime,
            IsLocked: this.itemCollectionView.items[0].IsLocked = true,
            listAccount: this.itemCollectionView.items[0].listAccount[this.supplierAccountSelectedIndex].Id,
            listTerm: this.itemCollectionView.items[0].listTerm[this.supplierTermSelectedIndex].Id,
        };
        return dataObject;
    };
    //SAVE ITEM 
    Software_SupplierDetail_Component.prototype.btnSaveEditItem = function () {
        var toastr;
        this.softwareSupplierDetailService.putSupplierData(this.getIdUrlParameter(), this.getDataSupplierObject(), toastr);
    };
    //value 
    Software_SupplierDetail_Component.prototype.expiryDateChangeValue = function () {
    };
    //LOCK FIELDS
    Software_SupplierDetail_Component.prototype.LockDataItem = function () {
        document.getElementById("Supplier").disabled = true;
        document.getElementById("Address").disabled = true;
        document.getElementById("TelephoneNumber").disabled = true;
        document.getElementById("CellphoneNumber").disabled = true;
        document.getElementById("FaxNumber").disabled = true;
        document.getElementById("TIN").disabled = true;
    };
    Software_SupplierDetail_Component.prototype.ngOnInit = function () {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.itemCollectionView = new wijmo.collections.CollectionView(this.softwareSupplierDetailService.getSupplierList(this.getIdUrlParameter()));
        console.log(this.LockDataItem());
    };
    return Software_SupplierDetail_Component;
}());
Software_SupplierDetail_Component = __decorate([
    core_1.Component({
        selector: 'software_supplierdetail',
        templateUrl: 'app/software_supplier_detail/software_supplierdetail_template/software_supplierdetail.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        software_supplierdetail_service_1.Software_SupplierDetail_Service,
        router_1.ActivatedRoute,
        ng2_toastr_1.ToastsManager,
        core_1.ViewContainerRef])
], Software_SupplierDetail_Component);
exports.Software_SupplierDetail_Component = Software_SupplierDetail_Component;
//# sourceMappingURL=software_supplierdetail.component.js.map