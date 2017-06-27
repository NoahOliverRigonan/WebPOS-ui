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
var software_userdetail_service_1 = require("../software_userdetail_service/software_userdetail.service");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var Software_UserDetail_Component = (function () {
    function Software_UserDetail_Component(router, softwareUserDetailService, activatedRoute, toastr, vcRef) {
        this.router = router;
        this.softwareUserDetailService = softwareUserDetailService;
        this.activatedRoute = activatedRoute;
        this.toastr = toastr;
        this.vcRef = vcRef;
        //Other Method
        this.supplierBoolean = true;
        this.refreshPage = true;
        this.toastr.setRootViewContainerRef(vcRef);
    }
    // get url Id parameter
    Software_UserDetail_Component.prototype.getIdUrlParameter = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.supplierId = params['id'];
        });
        return this.supplierId;
    };
    //
    // WJMO-COMBO-BOX - TERM & ACCOUNT
    //
    Software_UserDetail_Component.prototype.setFieldValuesUnit = function () {
        if (this.itemCollectionView.items.length > 0) {
            document.getElementById("UserName").value = this.itemCollectionView.items[0].UserName;
            document.getElementById("Password").value = this.itemCollectionView.items[0].Password;
            document.getElementById("FullName").value = this.itemCollectionView.items[0].FullName;
            document.getElementById("UserCardNumber").value = this.itemCollectionView.items[0].UserCardNumber;
            this.listOfCopyRightUserObservableArray = this.itemCollectionView.items[0].listMstUser;
            this.copyRightUserCollecetionView = new wijmo.collections.CollectionView(this.listOfCopyRightUserObservableArray);
            if (this.itemCollectionView.items.length > 0) {
                this.copyRightUserCollecetionView.items[0].listMstUser = this.itemCollectionView.items[0].listMstUser;
            }
        }
    };
    Software_UserDetail_Component.prototype.cboMstUserSelectedIndexChanged = function () {
        this.itemCollectionView.items[0].listMstUser[this.copyRightUserSelectedIndex].Id;
        console.log(this.copyRightUserSelectedIndex);
    };
    Software_UserDetail_Component.prototype.cboSysFormSelectedIndexChanged = function () {
        this.itemCollectionView.items[0].listSysForm[this.formsReportSelectedIndex].Id;
        console.log(this.formsReportSelectedIndex);
    };
    //GET ITEM OBJECT
    Software_UserDetail_Component.prototype.getDataUserObject = function () {
        var dataObject = {
            Supplier: document.getElementById("UserName").value,
            Address: document.getElementById("Password").value,
            TelephoneNumber: document.getElementById("FullName").value,
            CellphoneNumber: document.getElementById("UserCardNumber").value,
            EntryUserId: this.itemCollectionView.items[0].EntryUserId,
            EntryDateTime: this.itemCollectionView.items[0].EntryDateTime,
            UpdateUserId: this.itemCollectionView.items[0].UpdateUserId,
            UpdateDateTime: this.itemCollectionView.items[0].UpdateDateTime,
            IsLocked: this.itemCollectionView.items[0].IsLocked = true,
            AspNetUserId: this.itemCollectionView.items[0].AspNetUserId,
            listMstUser: this.itemCollectionView.items[0].listMstUser[this.copyRightUserSelectedIndex].Id,
        };
        return dataObject;
    };
    //SAVE ITEM 
    Software_UserDetail_Component.prototype.btnSaveEditItem = function () {
        var toastr;
        this.softwareUserDetailService.putUserData(this.getIdUrlParameter(), this.getDataUserObject(), toastr);
        console.log(this.getDataUserObject());
    };
    //value 
    Software_UserDetail_Component.prototype.expiryDateChangeValue = function () {
    };
    //LOCK FIELDS
    Software_UserDetail_Component.prototype.LockDataItem = function () {
        document.getElementById("Supplier").disabled = true;
        document.getElementById("Address").disabled = true;
        document.getElementById("TelephoneNumber").disabled = true;
        document.getElementById("CellphoneNumber").disabled = true;
        document.getElementById("FaxNumber").disabled = true;
        document.getElementById("TIN").disabled = true;
    };
    Software_UserDetail_Component.prototype.ngOnInit = function () {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.itemCollectionView = new wijmo.collections.CollectionView(this.softwareUserDetailService.getUserList(this.getIdUrlParameter()));
    };
    return Software_UserDetail_Component;
}());
Software_UserDetail_Component = __decorate([
    core_1.Component({
        selector: 'software_userdetail',
        templateUrl: 'app/software_userdetail/software_userdetail_template/software_userdetail.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        software_userdetail_service_1.Software_UserDetail_Service,
        router_1.ActivatedRoute,
        ng2_toastr_1.ToastsManager,
        core_1.ViewContainerRef])
], Software_UserDetail_Component);
exports.Software_UserDetail_Component = Software_UserDetail_Component;
//# sourceMappingURL=software_userdetail.component.js.map