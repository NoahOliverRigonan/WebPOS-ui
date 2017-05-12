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
var software_postouch_service_1 = require("../software_postouch_service/software_postouch.service");
var router_1 = require("@angular/router");
var Software_Postouch_Component = (function () {
    function Software_Postouch_Component(router, softwarePostouchService) {
        this.router = router;
        this.softwarePostouchService = softwarePostouchService;
        this.filterTableGroupSelectedValue = "1";
        this.isLoading = true;
        this.isFinishLoading = false;
        this.isTableGroupSelected = false;
        this.tableIndex = " ";
    }
    Software_Postouch_Component.prototype.filterTableGroupSelectedIndexChanged = function () {
        if (this.isTableGroupSelected) {
            this.getTable();
        }
        else {
            this.isTableGroupSelected = true;
        }
    };
    Software_Postouch_Component.prototype.getTableGroup = function () {
        this.tableGroupList = this.softwarePostouchService.getListTableGroup();
    };
    Software_Postouch_Component.prototype.setTableGroupSelectedValue = function () {
        this.filterTableGroupSelectedValue = "1";
    };
    Software_Postouch_Component.prototype.loadTableGroupData = function () {
        this.isLoading = false;
        this.isFinishLoading = true;
    };
    Software_Postouch_Component.prototype.getTable = function () {
        var _this = this;
        this.tableGroupCollectionView = new wijmo.collections.CollectionView(this.softwarePostouchService.getListTable(this.filterTableGroupSelectedValue));
        this.tableGroupCollectionView.pageSize = 15;
        this.tableGroupCollectionView.trackChanges = true;
        setTimeout(function () {
            _this.tableIndex = (_this.tableGroupCollectionView.pageIndex + 1) + " / " + _this.tableGroupCollectionView.pageCount;
        }, 200);
    };
    Software_Postouch_Component.prototype.tableMoveToFirstPage = function () {
        this.tableGroupCollectionView.moveToFirstPage();
        this.tableIndex = (this.tableGroupCollectionView.pageIndex + 1) + " / " + this.tableGroupCollectionView.pageCount;
    };
    Software_Postouch_Component.prototype.tableMoveToPreviousPage = function () {
        this.tableGroupCollectionView.moveToPreviousPage();
        this.tableIndex = (this.tableGroupCollectionView.pageIndex + 1) + " / " + this.tableGroupCollectionView.pageCount;
    };
    Software_Postouch_Component.prototype.tableMoveToNextPage = function () {
        this.tableGroupCollectionView.moveToNextPage();
        this.tableIndex = (this.tableGroupCollectionView.pageIndex + 1) + " / " + this.tableGroupCollectionView.pageCount;
    };
    Software_Postouch_Component.prototype.tableMoveToLastPage = function () {
        this.tableGroupCollectionView.moveToLastPage();
        this.tableIndex = (this.tableGroupCollectionView.pageIndex + 1) + " / " + this.tableGroupCollectionView.pageCount;
    };
    Software_Postouch_Component.prototype.ngOnInit = function () {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.getTableGroup();
    };
    return Software_Postouch_Component;
}());
Software_Postouch_Component = __decorate([
    core_1.Component({
        selector: 'software_postouch',
        templateUrl: 'app/software_postouch/software_postouch_template/software_postouch.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        software_postouch_service_1.Software_Postouch_Service])
], Software_Postouch_Component);
exports.Software_Postouch_Component = Software_Postouch_Component;
//# sourceMappingURL=software_postouch.component.js.map