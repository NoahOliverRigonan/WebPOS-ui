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
var software_user_service_1 = require("../software_user_service/software_user.service");
var router_1 = require("@angular/router");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var Software_User_Component = (function () {
    function Software_User_Component(router, softwareUserService, toastr, vcRef, errorToastr) {
        this.router = router;
        this.softwareUserService = softwareUserService;
        this.toastr = toastr;
        this.vcRef = vcRef;
        this.errorToastr = errorToastr;
        this.toastr.setRootViewContainerRef(vcRef);
    }
    Software_User_Component.prototype.ngOnInit = function () {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.getUserList();
    };
    Software_User_Component.prototype.getUserList = function () {
        this.listMstUser = new wijmo.collections.CollectionView(this.softwareUserService.getUser());
        this.listMstUser.pageSize = 15;
    };
    Software_User_Component.prototype.refreshGrid = function () {
        this.listMstUser.refresh();
    };
    Software_User_Component.prototype.btnEditItem = function () {
        var currentSelectedItem = this.listMstUser.currentItem;
        this.router.navigate(['/userdetail', currentSelectedItem.Id]);
    };
    Software_User_Component.prototype.btnAddUser = function () {
        this.softwareUserService.postUserData(null, this.toastr);
    };
    Software_User_Component.prototype.btnDeleteItemModal = function () {
        document.getElementById("deleteUserModal").click();
    };
    Software_User_Component.prototype.btnDeleteItem = function () {
        var errorToastr;
        var toastr;
        var currentSelectedItem = this.listMstUser.currentItem;
        if (currentSelectedItem.IsLocked == true) {
            this.errorToastr.error('', 'You cant delete Lock Item');
        }
        else {
            // (<HTMLButtonElement>document.getElementById("btn-hidden-start-loading")).click();
            this.softwareUserService.deleteUserData(currentSelectedItem.Id, toastr);
        }
    };
    return Software_User_Component;
}());
Software_User_Component = __decorate([
    core_1.Component({
        selector: 'software_user',
        templateUrl: 'app/software_user/software_user_template/software_user.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        software_user_service_1.Software_User_Service,
        ng2_toastr_1.ToastsManager,
        core_1.ViewContainerRef,
        ng2_toastr_1.ToastsManager])
], Software_User_Component);
exports.Software_User_Component = Software_User_Component;
//# sourceMappingURL=software_user.component.js.map