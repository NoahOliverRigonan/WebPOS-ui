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
var software_item_service_1 = require("../software_item_service/software_item.service");
var router_1 = require("@angular/router");
var Software_Item_Component = (function () {
    function Software_Item_Component(router, softwareItemService) {
        this.router = router;
        this.softwareItemService = softwareItemService;
    }
    Software_Item_Component.prototype.getListItem = function () {
        this.itemCollectionView = new wijmo.collections.CollectionView(this.softwareItemService.getListOfItem());
        this.itemCollectionView.pageSize = 15;
        this.itemCollectionView.trackChanges = true;
        // setTimeout(() => {
        //     this.tableIndex = (this.tableGroupCollectionView.pageIndex + 1) + " / " + this.tableGroupCollectionView.pageCount;
        // }, 200);
    };
    Software_Item_Component.prototype.moveItemToFirstPage = function () {
        this.itemCollectionView.moveToFirstPage();
        this.indexItem = (this.itemCollectionView.pageIndex + 1) + " / " + this.itemCollectionView.pageCount;
    };
    Software_Item_Component.prototype.moveItemToPreviousPage = function () {
        this.itemCollectionView.moveToPreviousPage();
        this.indexItem = (this.itemCollectionView.pageIndex + 1) + " / " + this.itemCollectionView.pageCount;
    };
    Software_Item_Component.prototype.moveItemToNextPage = function () {
        this.itemCollectionView.moveToNextPage();
        this.indexItem = (this.itemCollectionView.pageIndex + 1) + " / " + this.itemCollectionView.pageCount;
    };
    Software_Item_Component.prototype.moveItemToLastPage = function () {
        this.itemCollectionView.moveToLastPage();
        this.indexItem = (this.itemCollectionView.pageIndex + 1) + " / " + this.itemCollectionView.pageCount;
    };
    Software_Item_Component.prototype.ngOnInit = function () {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.getListItem();
    };
    return Software_Item_Component;
}());
Software_Item_Component = __decorate([
    core_1.Component({
        selector: 'software_item',
        templateUrl: 'app/software_item/software_item_template/software_item.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        software_item_service_1.Software_Item_Service])
], Software_Item_Component);
exports.Software_Item_Component = Software_Item_Component;
//# sourceMappingURL=software_item.component.js.map