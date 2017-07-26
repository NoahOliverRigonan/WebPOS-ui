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
var software_customerdetail_service_1 = require("../software_customerdetail_service/software_customerdetail.service");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var Software_Customerdetail_Component = (function () {
    function Software_Customerdetail_Component(router, softwareCustomerDetailService, activatedRoute, toastr, vcRef) {
        this.router = router;
        this.softwareCustomerDetailService = softwareCustomerDetailService;
        this.activatedRoute = activatedRoute;
        this.toastr = toastr;
        this.vcRef = vcRef;
        this.toastr.setRootViewContainerRef(vcRef);
    }
    Software_Customerdetail_Component.prototype.getIdUrlParameter = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.customerId = params['id'];
        });
        return this.customerId;
    };
    Software_Customerdetail_Component.prototype.setFieldValues = function () {
        if (this.customerCollectionView.items.length > 0) {
            document.getElementById("Customer").value = this.customerCollectionView.items[0].Customer;
            document.getElementById("Address").value = this.customerCollectionView.items[0].Address;
            document.getElementById("ContactPerson").value = this.customerCollectionView.items[0].ContactPerson;
            document.getElementById("ContactNumber").value = this.customerCollectionView.items[0].ContactNumber;
            document.getElementById("CreditLimit").value = this.customerCollectionView.items[0].CreditLimit;
            this.listOfTermObservableArray = this.customerCollectionView.items[0].listTerm;
            this.listOfTermCollectionView = new wijmo.collections.CollectionView(this.listOfTermObservableArray);
            this.listOfTermCollectionView.items[0].listTerm = this.customerCollectionView.items[0].listTerm;
            document.getElementById("TIN").value = this.customerCollectionView.items[0].TIN;
            this.listOfAccountObservableArray = this.customerCollectionView.items[0].listAccount;
            this.listOfAccountCollectionView = new wijmo.collections.CollectionView(this.listOfAccountObservableArray);
            this.listOfAccountCollectionView.items[0].listAccount = this.customerCollectionView.items[0].listAccount;
            document.getElementById("WithReward").checked = this.customerCollectionView.items[0].WithReward;
            document.getElementById("RewardNumber").value = this.customerCollectionView.items[0].RewardNumber;
            document.getElementById("RewardConversion").value = this.customerCollectionView.items[0].RewardConversion;
            this.listOfItemPriceObservableArray = this.customerCollectionView.items[0].listItemPrice;
            this.listOfItemPriceCollectionView = new wijmo.collections.CollectionView(this.listOfItemPriceObservableArray);
            this.listOfItemPriceCollectionView.items[0].listItemPrice = this.customerCollectionView.items[0].listItemPrice;
        }
    };
    Software_Customerdetail_Component.prototype.cboItemPriceSelectedIndex = function () {
        this.customerCollectionView.items[0].listItemPrice[this.itemPriceSelectedIndex].Id;
    };
    Software_Customerdetail_Component.prototype.cboTermSelectedIndex = function () {
        this.customerCollectionView.items[0].listTerm[this.termSelectedIndex].Id;
    };
    Software_Customerdetail_Component.prototype.cboAccountSelectedIndex = function () {
        this.customerCollectionView.items[0].listAccount[this.accountSelectedIndex].Id;
    };
    Software_Customerdetail_Component.prototype.getCustomerObject = function () {
        var dataObject = {
            Customer: document.getElementById("Customer").value,
            Address: document.getElementById("Address").value,
            ContactPerson: document.getElementById("ContactPerson").value,
            ContactNumber: document.getElementById("ContactNumber").value,
            CreditLimit: document.getElementById("CreditLimit").value,
            TermId: this.listOfTermCollectionView.items[0].listTerm[this.termSelectedIndex].Id,
            TIN: document.getElementById("TIN").value,
            WithReward: document.getElementById("WithReward").checked,
            RewardNumber: document.getElementById("RewardNumber").value,
            RewardConversion: document.getElementById("RewardConversion").value,
            AccountId: this.listOfAccountCollectionView.items[0].listAccount[this.accountSelectedIndex].Id,
            EntryUserId: this.customerCollectionView.items[0].EntryUserId,
            EntryDateTime: this.customerCollectionView.items[0].EntryDateTime,
            UpdateUserId: this.customerCollectionView.items[0].UpdateUserId,
            UpdateDateTime: this.customerCollectionView.items[0].UpdateDateTime,
            IsLocked: this.customerCollectionView.items[0].IsLocked,
        };
        return dataObject;
    };
    Software_Customerdetail_Component.prototype.btnSaveEdit = function () {
        var toastr;
        this.softwareCustomerDetailService.putCustomerData(this.getIdUrlParameter(), this.getCustomerObject(), toastr);
    };
    Software_Customerdetail_Component.prototype.ngOnInit = function () {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.customerCollectionView = new wijmo.collections.CollectionView(this.softwareCustomerDetailService.getCustomerDetail(this.getIdUrlParameter()));
    };
    return Software_Customerdetail_Component;
}());
Software_Customerdetail_Component = __decorate([
    core_1.Component({
        selector: 'software_customerdetail',
        templateUrl: 'app/software_customerdetail/software_customerdetail_template/software_customerdetail.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        software_customerdetail_service_1.Software_Customerdetail_Service,
        router_1.ActivatedRoute,
        ng2_toastr_1.ToastsManager,
        core_1.ViewContainerRef])
], Software_Customerdetail_Component);
exports.Software_Customerdetail_Component = Software_Customerdetail_Component;
//# sourceMappingURL=software_customerdetail.component.js.map