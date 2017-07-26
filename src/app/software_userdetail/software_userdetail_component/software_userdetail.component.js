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
var software_userdetail_service_2 = require("../software_userdetail_service/software_userdetail.service");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var Software_UserDetail_Component = (function () {
    function Software_UserDetail_Component(router, softwareUserDetailService, softwareUserFormService, activatedRoute, toastr, vcRef) {
        this.router = router;
        this.softwareUserDetailService = softwareUserDetailService;
        this.softwareUserFormService = softwareUserFormService;
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
            _this.userId = params['id'];
        });
        return this.userId;
    };
    Software_UserDetail_Component.prototype.getUserFormListById = function () {
        var currentItem = new wijmo.collections.CollectionView(this.softwareUserFormService.getUserFormList(this.userId));
        console.log(currentItem.items);
        document.getElementById("modalAddRights").click();
        document.getElementById("CanDelete").checked = this.userFormCollectionView.items[0].CanDelete;
        document.getElementById("CanAdd").checked = this.userFormCollectionView.items[0].CanAdd;
        document.getElementById("CanLock").checked = this.userFormCollectionView.items[0].CanLock;
        document.getElementById("CanUnlock").checked = this.userFormCollectionView.items[0].CanUnlock;
        document.getElementById("CanPrint").checked = this.userFormCollectionView.items[0].CanPrint;
        document.getElementById("CanPreview").checked = this.userFormCollectionView.items[0].CanPreview;
        document.getElementById("CanEdit").checked = this.userFormCollectionView.items[0].CanEdit;
        document.getElementById("CanTender").checked = this.userFormCollectionView.items[0].CanTender;
        document.getElementById("CanDiscount").checked = this.userFormCollectionView.items[0].CanDiscount;
        document.getElementById("CanView").checked = this.userFormCollectionView.items[0].CanView;
        document.getElementById("CanSplit").checked = this.userFormCollectionView.items[0].CanSplit;
        document.getElementById("CanCancel").checked = this.userFormCollectionView.items[0].CanCancel;
        document.getElementById("CanReturn").checked = this.userFormCollectionView.items[0].CanReturn;
        // if (this.itemCollectionView.items.length > 0) {
        //     this.listOfFormsReportsObservableArray = this.itemCollectionView.items[0].listSysForm;
        //     this.formsReportCollectionView = new wijmo.collections.CollectionView(this.listOfFormsReportsObservableArray);
        //     if (this.itemCollectionView.items.length > 0) {
        //         this.formsReportCollectionView.items[0].listSysForm = this.userFormCollectionView.currentItem.FormId;
        //     }
        // } else {
        //     this.toastr.error('', 'Error');
        // }
    };
    Software_UserDetail_Component.prototype.Clear = function () {
        document.getElementById("CanDelete").checked = false;
        document.getElementById("CanAdd").checked = false;
        document.getElementById("CanLock").checked = false;
        document.getElementById("CanUnlock").checked = false;
        document.getElementById("CanPrint").checked = false;
        document.getElementById("CanPreview").checked = false;
        document.getElementById("CanEdit").checked = false;
        document.getElementById("CanTender").checked = false;
        document.getElementById("CanDiscount").checked = false;
        document.getElementById("CanView").checked = false;
        document.getElementById("CanSplit").checked = false;
        document.getElementById("CanCancel").checked = false;
        document.getElementById("CanReturn").checked = false;
    };
    Software_UserDetail_Component.prototype.getUserFormList = function () {
        this.userFormCollectionView = new wijmo.collections.CollectionView(this.softwareUserFormService.getUserFormList(this.getIdUrlParameter()));
        this.userFormCollectionView.pageSize = 15;
    };
    Software_UserDetail_Component.prototype.moveItemToFirstPage = function () {
        this.userFormCollectionView.moveToFirstPage();
        this.indexItem = (this.userFormCollectionView.pageIndex + 1) + " / " + this.userFormCollectionView.pageCount;
    };
    Software_UserDetail_Component.prototype.moveItemToPreviousPage = function () {
        this.userFormCollectionView.moveToPreviousPage();
        this.indexItem = (this.userFormCollectionView.pageIndex + 1) + " / " + this.userFormCollectionView.pageCount;
    };
    Software_UserDetail_Component.prototype.moveItemToNextPage = function () {
        this.userFormCollectionView.moveToNextPage();
        this.indexItem = (this.userFormCollectionView.pageIndex + 1) + " / " + this.userFormCollectionView.pageCount;
    };
    Software_UserDetail_Component.prototype.moveItemToLastPage = function () {
        this.userFormCollectionView.moveToLastPage();
        this.indexItem = (this.userFormCollectionView.pageIndex + 1) + " / " + this.userFormCollectionView.pageCount;
    };
    Software_UserDetail_Component.prototype.btnEditItem = function () {
        var currentSelectedItem = this.itemCollectionView.currentItem;
        this.router.navigate(['/itemdetail', currentSelectedItem.Id]);
    };
    //
    // WJMO-COMBO-BOX - TERM & ACCOUNT
    //
    Software_UserDetail_Component.prototype.setFieldValues = function () {
        var currentItem = new wijmo.collections.CollectionView(this.softwareUserFormService.getUserFormListById(this.getIdUrlParameter()));
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
            this.listOfFormsReportsObservableArray = this.itemCollectionView.items[0].listSysForm;
            this.formsReportCollectionView = new wijmo.collections.CollectionView(this.listOfFormsReportsObservableArray);
            if (this.itemCollectionView.items.length > 0) {
                this.formsReportCollectionView.items[0].listSysForm = this.itemCollectionView.items[0].listSysForm;
            }
        }
    };
    Software_UserDetail_Component.prototype.cboMstUserSelectedIndexChanged = function () {
        this.itemCollectionView.items[0].listMstUser[this.copyRightUserSelectedIndex].Id;
        // console.log(this.copyRightUserSelectedIndex);
    };
    Software_UserDetail_Component.prototype.cboSysFormSelectedIndexChanged = function () {
        this.itemCollectionView.items[0].listSysForm[this.formsReportSelectedIndex].Id;
        // console.log(this.formsReportSelectedIndex);
    };
    //GET ITEM OBJECT
    Software_UserDetail_Component.prototype.getDataUserObject = function () {
        var dataObject = {
            UserName: document.getElementById("UserName").value,
            Password: document.getElementById("Password").value,
            FullName: document.getElementById("FullName").value,
            UserCardNumber: document.getElementById("UserCardNumber").value,
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
        // console.log(this.getDataUserObject());
    };
    //
    // SAVE MST USER FORM AND UPDATE MST USER FORM
    //
    Software_UserDetail_Component.prototype.getUserFormObject = function () {
        var dataUserFormObject = {
            FormId: this.itemCollectionView.items[0].listSysForm[this.formsReportSelectedIndex].Id,
            UserId: this.getIdUrlParameter(),
            CanDelete: document.getElementById("CanDelete").checked,
            CanAdd: document.getElementById("CanAdd").checked,
            CanLock: document.getElementById("CanLock").checked,
            CanUnlock: document.getElementById("CanUnlock").checked,
            CanPrint: document.getElementById("CanPrint").checked,
            CanPreview: document.getElementById("CanPreview").checked,
            CanEdit: document.getElementById("CanEdit").checked,
            CanTender: document.getElementById("CanTender").checked,
            CanDiscount: document.getElementById("CanDiscount").checked,
            CanView: document.getElementById("CanView").checked,
            CanSplit: document.getElementById("CanSplit").checked,
            CanCancel: document.getElementById("CanCancel").checked,
            CanReturn: document.getElementById("CanReturn").checked,
        };
        return dataUserFormObject;
    };
    Software_UserDetail_Component.prototype.saveUserFormRight = function () {
        var toast;
        this.userFormCollectionView = new wijmo.collections.CollectionView(this.softwareUserFormService.postUserFormData(this.getUserFormObject(), toast));
    };
    //value 
    Software_UserDetail_Component.prototype.expiryDateChangeValue = function () {
    };
    Software_UserDetail_Component.prototype.btnModalCopyRight = function () {
        document.getElementById("modalRights").click();
    };
    Software_UserDetail_Component.prototype.btnModalAddRight = function () {
        document.getElementById("modalAddRights").click();
    };
    //
    //DELETE MSTUSERFORM DATA
    //
    Software_UserDetail_Component.prototype.btnDeleteUserFormModal = function () {
        document.getElementById("deleteUserFormModal").click();
    };
    Software_UserDetail_Component.prototype.btnDeleteUserForm = function () {
        var toastr;
        var currentSelectedItem = this.userFormCollectionView.currentItem;
        this.softwareUserFormService.deleteUserFormData(currentSelectedItem.Id, toastr);
        // (<HTMLButtonElement>document.getElementById("btn-hidden-start-loading")).click();
    };
    Software_UserDetail_Component.prototype.ngOnInit = function () {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.itemCollectionView = new wijmo.collections.CollectionView(this.softwareUserDetailService.getUserList(this.getIdUrlParameter()));
        this.getUserFormList();
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
        software_userdetail_service_2.Software_UserForm_Service,
        router_1.ActivatedRoute,
        ng2_toastr_1.ToastsManager,
        core_1.ViewContainerRef])
], Software_UserDetail_Component);
exports.Software_UserDetail_Component = Software_UserDetail_Component;
//# sourceMappingURL=software_userdetail.component.js.map