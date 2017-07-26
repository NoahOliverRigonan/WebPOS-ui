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
var software_purchasedetail_service_1 = require("../software_purchasedetail_service/software_purchasedetail.service");
var software_purchasedetail_service_2 = require("../software_purchasedetail_service/software_purchasedetail.service");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var Software_PurchaseDetail_Component = (function () {
    function Software_PurchaseDetail_Component(router, softwarePurchaseDetailService, softwarePurchaseDetailLineService, activatedRoute, toastr, vcRef) {
        this.router = router;
        this.softwarePurchaseDetailService = softwarePurchaseDetailService;
        this.softwarePurchaseDetailLineService = softwarePurchaseDetailLineService;
        this.activatedRoute = activatedRoute;
        this.toastr = toastr;
        this.vcRef = vcRef;
        //Other Method
        this.supplierBoolean = true;
        this.refreshPage = true;
        this.toastr.setRootViewContainerRef(vcRef);
    }
    // get url Id parameter
    Software_PurchaseDetail_Component.prototype.getIdUrlParameter = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.purchaseOrderId = params['id'];
        });
        return this.purchaseOrderId;
    };
    Software_PurchaseDetail_Component.prototype.getPurchaseOrderLineList = function () {
        this.purchaseOrderLineCollectionView = new wijmo.collections.CollectionView(this.softwarePurchaseDetailLineService.getPurchaseOrderLineList(this.getIdUrlParameter()));
        this.purchaseOrderLineCollectionView.pageSize = 15;
    };
    //
    // WJMO-COMBO-BOX - TERM & ACCOUNT
    //
    Software_PurchaseDetail_Component.prototype.setFieldValues = function () {
        if (this.itemCollectionView.items.length > 0) {
            document.getElementById("PurchaseOrderNumber").value = this.itemCollectionView.items[0].PurchaseOrderNumber;
            document.getElementById("Remarks").value = this.itemCollectionView.items[0].Remarks;
            document.getElementById("Amount").value = this.itemCollectionView.items[0].Amount;
            this.PurchaseOrderDate = this.itemCollectionView.items[0].PurchaseOrderDate;
            //
            this.listOfPreparedByObservableArray = this.itemCollectionView.items[0].listPreparedBy;
            this.preparedByCollectionView = new wijmo.collections.CollectionView(this.listOfPreparedByObservableArray);
            this.preparedByCollectionView.items[0].listPreparedBy = this.itemCollectionView.items[0].listPreparedBy;
            //
            this.listOfApprovedByObservableArray = this.itemCollectionView.items[0].listApprovedBy;
            this.approvedByCollectionView = new wijmo.collections.CollectionView(this.listOfApprovedByObservableArray);
            this.approvedByCollectionView.items[0].listApprovedBy = this.itemCollectionView.items[0].listApprovedBy;
            //
            this.listOfCheckedByObservableArray = this.itemCollectionView.items[0].listCheckedBy;
            this.checkedByCollectionView = new wijmo.collections.CollectionView(this.listOfCheckedByObservableArray);
            this.checkedByCollectionView.items[0].listCheckedBy = this.itemCollectionView.items[0].listCheckedBy;
            //
            this.listOfSupplierObservableArray = this.itemCollectionView.items[0].listSupplier;
            this.supplierCollectionView = new wijmo.collections.CollectionView(this.listOfSupplierObservableArray);
            this.supplierCollectionView.items[0].listSupplier = this.itemCollectionView.items[0].listSupplier;
            //
            this.listOfPeriodObservableArray = this.itemCollectionView.items[0].listPeriod;
            this.periodCollectionView = new wijmo.collections.CollectionView(this.listOfPeriodObservableArray);
            this.periodCollectionView.items[0].listPeriod = this.itemCollectionView.items[0].listPeriod;
            //
            this.listOfItemListObservableArray = this.itemCollectionView.items[0].listItem;
            this.itemListCollectionView = new wijmo.collections.CollectionView(this.listOfItemListObservableArray);
            this.itemListCollectionView.items[0].listItem = this.itemCollectionView.items[0].listItem;
            //
            this.listOfUnitListObservableArray = this.itemCollectionView.items[0].listUnit;
            this.unitListCollectionView = new wijmo.collections.CollectionView(this.listOfUnitListObservableArray);
            this.unitListCollectionView.items[0].listUnit = this.itemCollectionView.items[0].listUnit;
        }
    };
    Software_PurchaseDetail_Component.prototype.cboPreparedBySelectedIndex = function () {
        this.itemCollectionView.items[0].listPreparedBy[this.preparedBySelectedIndex].Id;
        console.log(this.preparedBySelectedIndex);
    };
    Software_PurchaseDetail_Component.prototype.cboSupplierSelectedIndex = function () {
        this.itemCollectionView.items[0].listSupplier[this.supplierSelectedIndex].Id;
        console.log(this.supplierSelectedIndex);
    };
    Software_PurchaseDetail_Component.prototype.cboCheckBySelectedIndex = function () {
        this.itemCollectionView.items[0].listCheckedBy[this.checkedBySelectedIndex].Id;
        console.log(this.checkedBySelectedIndex);
    };
    Software_PurchaseDetail_Component.prototype.cboApprovedBySelectedIndex = function () {
        this.itemCollectionView.items[0].listApprovedBy[this.approvedBySelectedIndex].Id;
        console.log(this.approvedBySelectedIndex);
    };
    Software_PurchaseDetail_Component.prototype.cboPeriodSelectedIndex = function () {
        this.itemCollectionView.items[0].listPeriod[this.periodSelectedIndex].Id;
        console.log(this.periodSelectedIndex);
    };
    Software_PurchaseDetail_Component.prototype.cboItemListSelectedIndex = function () {
        this.itemCollectionView.items[0].listItem[this.itemListSelectedIndex].Id;
        console.log(this.itemListSelectedIndex);
    };
    Software_PurchaseDetail_Component.prototype.cboUnitSelectedIndex = function () {
        this.itemCollectionView.items[0].listUnit[this.unitSelectedIndex].Id;
        console.log(this.unitSelectedIndex);
    };
    //GET POLine OBJECT
    Software_PurchaseDetail_Component.prototype.getDataPurchaseOrder = function () {
        var dataObject = {
            PeriodId: this.itemCollectionView.items[0].PeriodId,
            PurchaseOrderDate: this.PurchaseOrderDate,
            PurchaseOrderNumber: document.getElementById("PurchaseOrderNumber").value,
            SupplierId: this.itemCollectionView.items[0].listSupplier[this.supplierSelectedIndex].Id,
            Amount: document.getElementById("Amount").value,
            Remarks: document.getElementById("Remarks").value,
            PreparedBy: this.itemCollectionView.items[0].listPreparedBy[this.preparedBySelectedIndex].Id,
            CheckedBy: this.itemCollectionView.items[0].listCheckedBy[this.checkedBySelectedIndex].Id,
            ApprovedBy: this.itemCollectionView.items[0].listApprovedBy[this.approvedBySelectedIndex].Id,
            IsLocked: this.itemCollectionView.items[0].IsLocked = -1,
            EntryUserId: this.itemCollectionView.items[0].EntryUserId,
            EntryDateTime: this.itemCollectionView.items[0].EntryDateTime,
            UpdateUserId: this.itemCollectionView.items[0].UpdateUserId,
            UpdateDateTime: this.itemCollectionView.items[0].UpdateDateTime,
        };
        return dataObject;
    };
    //SAVE ITEM
    Software_PurchaseDetail_Component.prototype.btnSaveEditItem = function () {
        var toastr;
        this.softwarePurchaseDetailService.putPurchaseOrderData(this.getIdUrlParameter(), this.getDataPurchaseOrder(), toastr);
        console.log(this.getDataPurchaseOrder());
    };
    //value 
    Software_PurchaseDetail_Component.prototype.expiryDateChangeValue = function () {
    };
    //SET 
    Software_PurchaseDetail_Component.prototype.setDateRanged = function () {
        this.PurchaseOrderDate = new Date();
    };
    //DROPDOWN
    Software_PurchaseDetail_Component.prototype.setDropDownFields = function () {
        this.PurchaseOrderDate = new Date(document.getElementById("PurchaseOrderDate").value.toString());
    };
    //
    // SAVE PURCHASE ORDER LINE
    //
    Software_PurchaseDetail_Component.prototype.getPurchaseOrderLineObject = function () {
        var dataUserFormObject = {
            PurchaseOrderId: this.getIdUrlParameter(),
            ItemId: this.itemCollectionView.items[0].listItem[this.itemListSelectedIndex].Id,
            UnitId: this.itemCollectionView.items[0].listUnit[this.unitSelectedIndex].Id,
            Quantity: document.getElementById("Quantity").value,
            Cost: document.getElementById("Cost").value,
            Amount: document.getElementById("POLAmount").value,
        };
        return dataUserFormObject;
    };
    Software_PurchaseDetail_Component.prototype.savePOLine = function () {
        var toast;
        this.purchaseOrderLineCollectionView = new wijmo.collections.CollectionView(this.softwarePurchaseDetailLineService.postPurchaseOrderLineData(this.getPurchaseOrderLineObject(), toast));
    };
    Software_PurchaseDetail_Component.prototype.moveItemToFirstPage = function () {
        this.purchaseOrderLineCollectionView.moveToFirstPage();
        this.indexItem = (this.purchaseOrderLineCollectionView.pageIndex + 1) + " / " + this.purchaseOrderLineCollectionView.pageCount;
    };
    Software_PurchaseDetail_Component.prototype.moveItemToPreviousPage = function () {
        this.purchaseOrderLineCollectionView.moveToPreviousPage();
        this.indexItem = (this.purchaseOrderLineCollectionView.pageIndex + 1) + " / " + this.purchaseOrderLineCollectionView.pageCount;
    };
    Software_PurchaseDetail_Component.prototype.moveItemToNextPage = function () {
        this.purchaseOrderLineCollectionView.moveToNextPage();
        this.indexItem = (this.purchaseOrderLineCollectionView.pageIndex + 1) + " / " + this.purchaseOrderLineCollectionView.pageCount;
    };
    Software_PurchaseDetail_Component.prototype.moveItemToLastPage = function () {
        this.purchaseOrderLineCollectionView.moveToLastPage();
        this.indexItem = (this.purchaseOrderLineCollectionView.pageIndex + 1) + " / " + this.purchaseOrderLineCollectionView.pageCount;
    };
    Software_PurchaseDetail_Component.prototype.ClearAfterSave = function () {
        document.getElementById("Quantity").value = "";
        document.getElementById("Cost").value = " ";
        document.getElementById("POLAmount").value = " ";
    };
    Software_PurchaseDetail_Component.prototype.btnModalAddPOLine = function () {
        document.getElementById("modal-for-add-purchaseorderline").click();
    };
    //
    //DELETE PURCHASE ORDER LINE DATA
    //
    Software_PurchaseDetail_Component.prototype.btnDeletePurchaseDetailLineModal = function () {
        document.getElementById("deletePurchaseOrderLine").click();
    };
    Software_PurchaseDetail_Component.prototype.btnDeletePurchaseOrderLine = function () {
        var toastr;
        var currentSelectedItem = this.purchaseOrderLineCollectionView.currentItem;
        this.softwarePurchaseDetailLineService.deletePurchaseOrderLine(currentSelectedItem.Id, toastr);
        // (<HTMLButtonElement>document.getElementById("btn-hidden-start-loading")).click();
    };
    Software_PurchaseDetail_Component.prototype.ngOnInit = function () {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.itemCollectionView = new wijmo.collections.CollectionView(this.softwarePurchaseDetailService.getPurchaseOrderById(this.getIdUrlParameter()));
        this.getPurchaseOrderLineList();
    };
    return Software_PurchaseDetail_Component;
}());
Software_PurchaseDetail_Component = __decorate([
    core_1.Component({
        selector: 'software_purchasedetail',
        templateUrl: 'app/software_purchasedetail/software_purchasedetail_template/software_purchasedetail.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        software_purchasedetail_service_1.Software_PurchaseDetail_Service,
        software_purchasedetail_service_2.Software_PurchaseDetailLine_Service,
        router_1.ActivatedRoute,
        ng2_toastr_1.ToastsManager,
        core_1.ViewContainerRef])
], Software_PurchaseDetail_Component);
exports.Software_PurchaseDetail_Component = Software_PurchaseDetail_Component;
//# sourceMappingURL=software_purchasedetail.component.js.map