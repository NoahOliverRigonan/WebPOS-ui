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
        this.filterTableSaleNoGroupSelectedValue = "1";
        this.filterTableUserGroupSelectedValue = "1";
        this.filterTableCodeSelectedValue = "1";
        this.filterTableGroupSelectedValue = "1";
        this.isLoading = true;
        this.isFinishLoading = false;
        this.isTableGroupSelected = false;
        this.tableIndex = " ";
        this.tableGroupIndex = " ";
    }
    Software_Postouch_Component.prototype.filterTableGroupSelectedIndexChanged = function () {
        if (this.isTableGroupSelected) {
        }
        else {
            this.isTableGroupSelected = true;
        }
    };
    Software_Postouch_Component.prototype.getTableGroup = function () {
        var _this = this;
        this.tableGroupList = new wijmo.collections.CollectionView(this.softwarePostouchService.getListTableGroup());
        this.tableGroupList.pageSize = 1;
        this.tableGroupList.trackChanges = true;
        setTimeout(function () {
            _this.tableGroupIndex = (_this.tableGroupList.pageIndex + 1) + " / " + _this.tableGroupList.pageCount;
        }, 200);
    };
    Software_Postouch_Component.prototype.tableGroupMoveToFirstPage = function () {
        this.tableGroupList.moveToFirstPage();
        this.tableGroupIndex = (this.tableGroupList.pageIndex + 1) + " / " + this.tableGroupList.pageCount;
    };
    Software_Postouch_Component.prototype.tableGroupMoveToPreviousPage = function () {
        this.tableGroupList.moveToPreviousPage();
        this.tableGroupIndex = (this.tableGroupList.pageIndex + 1) + " / " + this.tableGroupList.pageCount;
    };
    Software_Postouch_Component.prototype.tableGroupMoveToNextPage = function () {
        this.tableGroupList.moveToNextPage();
        this.tableGroupIndex = (this.tableGroupList.pageIndex + 1) + " / " + this.tableGroupList.pageCount;
    };
    Software_Postouch_Component.prototype.tableGroupMoveToLastPage = function () {
        this.tableGroupList.moveToLastPage();
        this.tableGroupIndex = (this.tableGroupList.pageIndex + 1) + " / " + this.tableGroupList.pageCount;
    };
    Software_Postouch_Component.prototype.setTableGroupSelectedValue = function () {
        this.filterTableGroupSelectedValue = "1";
    };
    Software_Postouch_Component.prototype.loadTableGroupData = function () {
        this.isLoading = false;
        this.isFinishLoading = true;
    };
    //Table Postouch For Sale Collection View
    Software_Postouch_Component.prototype.getTableSale = function () {
        this.tablePostouchSaleCollectionView = new wijmo.collections.CollectionView(this.softwarePostouchService.getListTableSale(this.filterTableSaleNoGroupSelectedValue, this.filterTableUserGroupSelectedValue, this.filterTableCodeSelectedValue));
        this.tablePostouchSaleCollectionView.pageSize = 5;
        this.tablePostouchSaleCollectionView.trackChanges = true;
        // setTimeout(() => {
        //     this.tableIndex = (this.tableGroupCollectionView.pageIndex + 1) + " / " + this.tableGroupCollectionView.pageCount;
        // }, 200);
    };
    //Table Group Collection View
    Software_Postouch_Component.prototype.getTable = function (tableGroupId) {
        var _this = this;
        this.tableGroupCollectionView = new wijmo.collections.CollectionView(this.softwarePostouchService.getListTable(tableGroupId));
        this.tableGroupCollectionView.pageSize = 10;
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
    Software_Postouch_Component.prototype.setCurrentDate = function () {
        return new Date();
    };
    Software_Postouch_Component.prototype.ngOnInit = function () {
        var _this = this;
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        // this.getTableSale();
        this.getTableGroup();
        setInterval(function () {
            _this.setCurrentDate() ? document.getElementById("currentDateTime").innerHTML = _this.setCurrentDate().toDateString() + " || " + _this.setCurrentDate().toLocaleTimeString() : "NA";
        }, 1000);
    };
    Software_Postouch_Component.prototype.btnTableGroup1Click = function () {
        var currentId = this.tableGroupList.currentItem;
        this.loadTableGroupData();
        this.getTable(currentId.tableGroup1Id);
    };
    Software_Postouch_Component.prototype.btnTableGroup2Click = function () {
        var currentId = this.tableGroupList.currentItem;
        this.loadTableGroupData();
        this.getTable(currentId.tableGroup2Id);
    };
    Software_Postouch_Component.prototype.btnTableGroup3Click = function () {
        var currentId = this.tableGroupList.currentItem;
        this.loadTableGroupData();
        this.getTable(currentId.tableGroup3Id);
    };
    Software_Postouch_Component.prototype.btnTableGroup4Click = function () {
        var currentId = this.tableGroupList.currentItem;
        this.loadTableGroupData();
        this.getTable(currentId.tableGroup4Id);
    };
    Software_Postouch_Component.prototype.btnTableGroup5Click = function () {
        var currentId = this.tableGroupList.currentItem;
        this.loadTableGroupData();
        this.getTable(currentId.tableGroup5Id);
    };
    Software_Postouch_Component.prototype.btnTableGroup6Click = function () {
        var currentId = this.tableGroupList.currentItem;
        this.loadTableGroupData();
        this.getTable(currentId.tableGroup6Id);
    };
    return Software_Postouch_Component;
}());
Software_Postouch_Component = __decorate([
    core_1.Component({
        selector: 'software_postouch',
        templateUrl: 'app/software_postouch/software_postouch_template/software_postouch.html',
    }),
    __metadata("design:paramtypes", [router_1.Router,
        software_postouch_service_1.Software_Postouch_Service])
], Software_Postouch_Component);
exports.Software_Postouch_Component = Software_Postouch_Component;
//# sourceMappingURL=software_postouch.component.js.map