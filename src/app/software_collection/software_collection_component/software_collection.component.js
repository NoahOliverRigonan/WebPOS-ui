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
var software_collection_service_1 = require("../software_collection_service/software_collection.service");
var router_1 = require("@angular/router");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
var Software_Collection_Component = (function () {
    function Software_Collection_Component(router, softwareCollectionService, toastr, vcRef, slimLoadingBarService) {
        this.router = router;
        this.softwareCollectionService = softwareCollectionService;
        this.toastr = toastr;
        this.vcRef = vcRef;
        this.slimLoadingBarService = slimLoadingBarService;
        this.toastr.setRootViewContainerRef(vcRef);
    }
    // start loading
    Software_Collection_Component.prototype.startLoading = function () {
        this.slimLoadingBarService.progress = 30;
        this.slimLoadingBarService.start();
    };
    // complete loading
    Software_Collection_Component.prototype.completeLoading = function () {
        this.slimLoadingBarService.complete();
    };
    Software_Collection_Component.prototype.btnAddItem = function () {
        if (this.lock != true) {
            this.softwareCollectionService.postCollectionData(null, this.toastr);
        }
    };
    Software_Collection_Component.prototype.getCollection = function () {
        this.itemCollectionView = new wijmo.collections.CollectionView(this.softwareCollectionService.getCollectionList());
        this.itemCollectionView.pageSize = 15;
        this.itemCollectionView.trackChanges = true;
    };
    Software_Collection_Component.prototype.moveItemToFirstPage = function () {
        this.itemCollectionView.moveToFirstPage();
        this.indexItem = (this.itemCollectionView.pageIndex + 1) + " / " + this.itemCollectionView.pageCount;
    };
    Software_Collection_Component.prototype.moveItemToPreviousPage = function () {
        this.itemCollectionView.moveToPreviousPage();
        this.indexItem = (this.itemCollectionView.pageIndex + 1) + " / " + this.itemCollectionView.pageCount;
    };
    Software_Collection_Component.prototype.moveItemToNextPage = function () {
        this.itemCollectionView.moveToNextPage();
        this.indexItem = (this.itemCollectionView.pageIndex + 1) + " / " + this.itemCollectionView.pageCount;
    };
    Software_Collection_Component.prototype.moveItemToLastPage = function () {
        this.itemCollectionView.moveToLastPage();
        this.indexItem = (this.itemCollectionView.pageIndex + 1) + " / " + this.itemCollectionView.pageCount;
    };
    Software_Collection_Component.prototype.btnEditItem = function () {
        var currentSelectedItem = this.itemCollectionView.currentItem;
        this.router.navigate(['/collectiondetail', currentSelectedItem.Id]);
    };
    //DELETE STOCKIN AND DELETE STOCKIN MODAL
    Software_Collection_Component.prototype.btnDeleteCollectionModal = function () {
        document.getElementById("deleteStockInModal").click();
    };
    Software_Collection_Component.prototype.btnDeleteCollection = function () {
        var toastr;
        var currentSelectedItem = this.itemCollectionView.currentItem;
        if (currentSelectedItem.IsLocked == true) {
            this.toastr.error('', 'You cant delete Lock Item');
        }
        else {
            document.getElementById("btn-hidden-start-loading").click();
            this.softwareCollectionService.deleteCollection(currentSelectedItem.Id, toastr);
        }
    };
    // activity delete confirmation click
    // public btnActivityDeleteConfirmationClick() {
    //     this.startLoading();
    //     let toastr: ToastsManager;
    //     (<HTMLButtonElement>document.getElementById("btnActivityDeleteConfirmation")).innerHTML = "<i class='fa fa-spinner fa-spin fa-fw'></i> Deleting";
    //     (<HTMLButtonElement>document.getElementById("btnActivityDeleteConfirmation")).disabled = true;
    //     (<HTMLButtonElement>document.getElementById("btnActivityCloseDeleteConfirmation")).disabled = true;
    //     this.activityService.deleteActivityData(this.activityId, toastr);
    // }
    Software_Collection_Component.prototype.ngOnInit = function () {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.getCollection();
    };
    return Software_Collection_Component;
}());
Software_Collection_Component = __decorate([
    core_1.Component({
        selector: 'software_collection',
        templateUrl: 'app/software_collection/software_collection_template/software_collection.html',
    }),
    __metadata("design:paramtypes", [router_1.Router,
        software_collection_service_1.Software_Collection_Service,
        ng2_toastr_1.ToastsManager,
        core_1.ViewContainerRef,
        ng2_slim_loading_bar_1.SlimLoadingBarService])
], Software_Collection_Component);
exports.Software_Collection_Component = Software_Collection_Component;
//# sourceMappingURL=software_collection.component.js.map