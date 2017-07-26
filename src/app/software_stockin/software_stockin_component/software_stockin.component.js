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
var software_stockin_service_1 = require("../software_stockin_service/software_stockin.service");
var router_1 = require("@angular/router");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
var Software_StockIn_Component = (function () {
    function Software_StockIn_Component(router, softwareStockInService, toastr, vcRef, slimLoadingBarService) {
        this.router = router;
        this.softwareStockInService = softwareStockInService;
        this.toastr = toastr;
        this.vcRef = vcRef;
        this.slimLoadingBarService = slimLoadingBarService;
        this.toastr.setRootViewContainerRef(vcRef);
    }
    // start loading
    Software_StockIn_Component.prototype.startLoading = function () {
        this.slimLoadingBarService.progress = 30;
        this.slimLoadingBarService.start();
    };
    // complete loading
    Software_StockIn_Component.prototype.completeLoading = function () {
        this.slimLoadingBarService.complete();
    };
    Software_StockIn_Component.prototype.btnAddItem = function () {
        if (this.lock != true) {
            this.softwareStockInService.postStockInData(null, this.toastr);
        }
    };
    Software_StockIn_Component.prototype.getStockIn = function () {
        this.itemCollectionView = new wijmo.collections.CollectionView(this.softwareStockInService.getStockInList());
        this.itemCollectionView.pageSize = 15;
        this.itemCollectionView.trackChanges = true;
        // setTimeout(() => {
        //     this.tableIndex = (this.tableGroupCollectionView.pageIndex + 1) + " / " + this.tableGroupCollectionView.pageCount;
        // }, 200);
    };
    Software_StockIn_Component.prototype.moveItemToFirstPage = function () {
        this.itemCollectionView.moveToFirstPage();
        this.indexItem = (this.itemCollectionView.pageIndex + 1) + " / " + this.itemCollectionView.pageCount;
    };
    Software_StockIn_Component.prototype.moveItemToPreviousPage = function () {
        this.itemCollectionView.moveToPreviousPage();
        this.indexItem = (this.itemCollectionView.pageIndex + 1) + " / " + this.itemCollectionView.pageCount;
    };
    Software_StockIn_Component.prototype.moveItemToNextPage = function () {
        this.itemCollectionView.moveToNextPage();
        this.indexItem = (this.itemCollectionView.pageIndex + 1) + " / " + this.itemCollectionView.pageCount;
    };
    Software_StockIn_Component.prototype.moveItemToLastPage = function () {
        this.itemCollectionView.moveToLastPage();
        this.indexItem = (this.itemCollectionView.pageIndex + 1) + " / " + this.itemCollectionView.pageCount;
    };
    Software_StockIn_Component.prototype.btnEditItem = function () {
        var currentSelectedItem = this.itemCollectionView.currentItem;
        this.router.navigate(['/stockindetail', currentSelectedItem.Id]);
    };
    //DELETE STOCKIN AND DELETE STOCKIN MODAL
    Software_StockIn_Component.prototype.btnDeleteStockInModal = function () {
        document.getElementById("deleteStockInModal").click();
    };
    Software_StockIn_Component.prototype.btnDeleteStockIn = function () {
        var toastr;
        var currentSelectedItem = this.itemCollectionView.currentItem;
        if (currentSelectedItem.IsLocked == true) {
            this.toastr.error('', 'You cant delete Lock Item');
        }
        else {
            document.getElementById("btn-hidden-start-loading").click();
            this.softwareStockInService.deleteStockInList(currentSelectedItem.Id, toastr);
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
    Software_StockIn_Component.prototype.ngOnInit = function () {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.getStockIn();
    };
    return Software_StockIn_Component;
}());
Software_StockIn_Component = __decorate([
    core_1.Component({
        selector: 'software_stockin',
        templateUrl: 'app/software_stockin/software_stockin_template/software_stockin.html',
    }),
    __metadata("design:paramtypes", [router_1.Router,
        software_stockin_service_1.Software_StockIn_Service,
        ng2_toastr_1.ToastsManager,
        core_1.ViewContainerRef,
        ng2_slim_loading_bar_1.SlimLoadingBarService])
], Software_StockIn_Component);
exports.Software_StockIn_Component = Software_StockIn_Component;
//# sourceMappingURL=software_stockin.component.js.map