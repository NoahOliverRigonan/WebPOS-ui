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
var software_postouchdetail_service_1 = require("../software_postouchdetail_service/software_postouchdetail.service");
var router_1 = require("@angular/router");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var Software_PostouchDetail_Component = (function () {
    // Array of Number
    function Software_PostouchDetail_Component(router, softwarePostouchDetailService, toastr, vcRef, activatedRoute) {
        this.router = router;
        this.softwarePostouchDetailService = softwarePostouchDetailService;
        this.toastr = toastr;
        this.vcRef = vcRef;
        this.activatedRoute = activatedRoute;
        this.filterItemGroupSelectedValue = "1";
        this.itemGroupIndex = " ";
        this.isLoading = true;
        this.isFinishLoading = false;
        this.num1 = "1";
        this.num2 = "2";
        this.num3 = "3";
        this.num4 = "4";
        this.num5 = "5";
        this.num6 = "6";
        this.num7 = "7";
        this.num8 = "8";
        this.num9 = "9";
        this.num0 = "0";
        this.log = '';
        this.toastr.setRootViewContainerRef(vcRef);
    }
    Software_PostouchDetail_Component.prototype.logText = function (value) {
        this.log += "" + value;
    };
    // removeNumbers(removeNumberByOne: any) {
    //     let index = this.keypadNumber.indexOf(removeNumberByOne);
    //     this.keypadNumber.splice(index, 1);
    // }
    // removeAllNumbers(removeNumber: any) {
    //     let index = this.keypadNumber.indexOf(removeNumber);
    //     this.keypadNumber.splice(index);
    // }
    Software_PostouchDetail_Component.prototype.getIdUrlParameter = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.postouchDetailId = params['id'];
        });
        return this.postouchDetailId;
    };
    Software_PostouchDetail_Component.prototype.ngOnInit = function () {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.postouchDetailCollectionView = new wijmo.collections.CollectionView(this.softwarePostouchDetailService.getListItem(this.getIdUrlParameter()));
        this.getItemGroup();
    };
    Software_PostouchDetail_Component.prototype.loadItemGroupData = function () {
        this.isLoading = false;
        this.isFinishLoading = true;
    };
    //
    //MST ITEM GROUp
    //
    Software_PostouchDetail_Component.prototype.getItemGroup = function () {
        this.postouchDetailList = new wijmo.collections.CollectionView(this.softwarePostouchDetailService.getListItemGroup());
        this.postouchDetailList.pageSize = 1;
        this.postouchDetailList.trackChanges = true;
    };
    Software_PostouchDetail_Component.prototype.setItemGroupSelectedValue = function () {
        this.filterItemGroupSelectedValue = "1";
    };
    Software_PostouchDetail_Component.prototype.itemGroupMoveToNextPage = function () {
        this.postouchDetailList.moveToNextPage();
        this.itemGroupIndex = (this.postouchDetailList.pageIndex + 1) + " / " + this.postouchDetailList.pageCount;
    };
    Software_PostouchDetail_Component.prototype.itemGroupMoveToPreviousPage = function () {
        this.postouchDetailList.moveToPreviousPage();
        this.itemGroupIndex = (this.postouchDetailList.pageIndex + 1) + " / " + this.postouchDetailList.pageCount;
    };
    Software_PostouchDetail_Component.prototype.btnItemGroup1Click = function () {
        var currentId = this.postouchDetailList.currentItem;
        this.loadItemGroupData();
        this.getItemGroupItem(currentId.itemGroup1Id);
    };
    Software_PostouchDetail_Component.prototype.btnItemGroup2Click = function () {
        var currentId = this.postouchDetailList.currentItem;
        this.loadItemGroupData();
        this.getItemGroupItem(currentId.itemGroup2Id);
    };
    Software_PostouchDetail_Component.prototype.btnItemGroup3Click = function () {
        var currentId = this.postouchDetailList.currentItem;
        this.loadItemGroupData();
        this.getItemGroupItem(currentId.itemGroup3Id);
    };
    Software_PostouchDetail_Component.prototype.btnItemGroup4Click = function () {
        var currentId = this.postouchDetailList.currentItem;
        this.loadItemGroupData();
        this.getItemGroupItem(currentId.itemGroup4Id);
    };
    Software_PostouchDetail_Component.prototype.btnItemGroup5Click = function () {
        var currentId = this.postouchDetailList.currentItem;
        this.loadItemGroupData();
        this.getItemGroupItem(currentId.itemGroup5Id);
    };
    Software_PostouchDetail_Component.prototype.btnItemGroup6Click = function () {
        var currentId = this.postouchDetailList.currentItem;
        this.loadItemGroupData();
        this.getItemGroupItem(currentId.itemGroup6Id);
    };
    //
    //MST ITEM GROUP ITEM
    // 
    Software_PostouchDetail_Component.prototype.getItemGroupItem = function (itemGroupId) {
        this.postouchDetailListGroup = new wijmo.collections.CollectionView(this.softwarePostouchDetailService.getListItemGroupItem(itemGroupId));
        this.postouchDetailListGroup.pageSize = 5;
        this.postouchDetailListGroup.trackChanges = true;
    };
    Software_PostouchDetail_Component.prototype.keypadModal = function () {
        document.getElementById("keypadModal").click();
    };
    return Software_PostouchDetail_Component;
}());
Software_PostouchDetail_Component = __decorate([
    core_1.Component({
        selector: 'software_postouchdetail',
        templateUrl: 'app/software_postouchdetail/software_postouchdetail_template/software_postouchdetail.html',
    }),
    __metadata("design:paramtypes", [router_1.Router,
        software_postouchdetail_service_1.Software_PostouchDetail_Service,
        ng2_toastr_1.ToastsManager,
        core_1.ViewContainerRef,
        router_1.ActivatedRoute])
], Software_PostouchDetail_Component);
exports.Software_PostouchDetail_Component = Software_PostouchDetail_Component;
//# sourceMappingURL=software_postouchdetail.component.js.map