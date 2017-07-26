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
var software_stockin_detail_service_1 = require("../software_stockin_detail_service/software_stockin_detail.service");
var software_stockin_detail_service_2 = require("../software_stockin_detail_service/software_stockin_detail.service");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var Software_StockInDetail_Component = (function () {
    function Software_StockInDetail_Component(router, softwareStockInDetailService, softwareStockInLineService, activatedRoute, toastr, vcRef) {
        this.router = router;
        this.softwareStockInDetailService = softwareStockInDetailService;
        this.softwareStockInLineService = softwareStockInLineService;
        this.activatedRoute = activatedRoute;
        this.toastr = toastr;
        this.vcRef = vcRef;
        //Other Method
        this.supplierBoolean = true;
        this.refreshPage = true;
        this.toastr.setRootViewContainerRef(vcRef);
    }
    // get url Id parameter
    Software_StockInDetail_Component.prototype.getIdUrlParameter = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.stockInId = params['id'];
        });
        return this.stockInId;
    };
    Software_StockInDetail_Component.prototype.setFieldValues = function () {
        if (this.itemCollectionView.items.length > 0) {
            this.StockInDate = this.itemCollectionView.items[0].StockInDate;
            document.getElementById("StockInNumber").value = this.itemCollectionView.items[0].StockInNumber;
            document.getElementById("Remarks").value = this.itemCollectionView.items[0].Remarks;
            document.getElementById("IsReturn").checked = this.itemCollectionView.items[0].IsReturn;
            this.listOfPreparedByObservableArray = this.itemCollectionView.items[0].listPreparedBy;
            this.preparedByCollectionView = new wijmo.collections.CollectionView(this.listOfPreparedByObservableArray);
            this.preparedByCollectionView.items[0].listPreparedBy = this.itemCollectionView.items[0].listPreparedBy;
            this.listOfApprovedByObservableArray = this.itemCollectionView.items[0].listApprovedBy;
            this.approvedByCollectionView = new wijmo.collections.CollectionView(this.listOfApprovedByObservableArray);
            this.approvedByCollectionView.items[0].listApprovedBy = this.itemCollectionView.items[0].listApprovedBy;
            this.listOfCheckedByObservableArray = this.itemCollectionView.items[0].listCheckedBy;
            this.checkedByCollectionView = new wijmo.collections.CollectionView(this.listOfCheckedByObservableArray);
            this.checkedByCollectionView.items[0].listCheckedBy = this.itemCollectionView.items[0].listCheckedBy;
            this.listOfCategoryObservableArray = this.itemCollectionView.items[0].listCategoryItem;
            this.categoryCollectionView = new wijmo.collections.CollectionView(this.listOfCategoryObservableArray);
            this.categoryCollectionView.items[0].listCategoryItem = this.itemCollectionView.items[0].listCategoryItem;
            this.listOfSupplierObservableArray = this.itemCollectionView.items[0].listSupplier;
            this.supplierCollectionView = new wijmo.collections.CollectionView(this.listOfSupplierObservableArray);
            this.supplierCollectionView.items[0].listSupplier = this.itemCollectionView.items[0].listSupplier;
            this.listOfPurchaseOrderObservableArray = this.itemCollectionView.items[0].listPurchaseOrder;
            this.purchaseOrderCollectionView = new wijmo.collections.CollectionView(this.listOfPurchaseOrderObservableArray);
            this.purchaseOrderCollectionView.items[0].listPurchaseOrder = this.itemCollectionView.items[0].listPurchaseOrder;
            this.listOfPeriodObservableArray = this.itemCollectionView.items[0].listPeriod;
            this.periodCollectionView = new wijmo.collections.CollectionView(this.listOfPeriodObservableArray);
            this.periodCollectionView.items[0].listPeriod = this.itemCollectionView.items[0].listPeriod;
            //
            //FOR STOCK IN LINE LIST
            //
            this.listOfItemObservableArray = this.itemCollectionView.items[0].listItem;
            this.itemListCollectionView = new wijmo.collections.CollectionView(this.listOfItemObservableArray);
            this.itemListCollectionView.items[0].listItem = this.itemCollectionView.items[0].listItem;
            this.listOfUnitObservableArray = this.itemCollectionView.items[0].listUnit;
            this.unitCollectionView = new wijmo.collections.CollectionView(this.listOfUnitObservableArray);
            this.unitCollectionView.items[0].listUnit = this.itemCollectionView.items[0].listUnit;
            this.listOfAccountObservableArray = this.itemCollectionView.items[0].listAccount;
            this.accountCollectionView = new wijmo.collections.CollectionView(this.listOfAccountObservableArray);
            this.accountCollectionView.items[0].listAccount = this.itemCollectionView.items[0].listAccount;
        }
    };
    Software_StockInDetail_Component.prototype.cboPreparedBySelectedIndex = function () {
        this.itemCollectionView.items[0].listPreparedBy[this.preparedBySelectedIndex].Id;
        console.log(this.preparedBySelectedIndex);
    };
    Software_StockInDetail_Component.prototype.cboCategoryItemSelectedIndex = function () {
        this.itemCollectionView.items[0].listCategoryItem[this.categorySelectedIndex].Id;
        console.log(this.categorySelectedIndex);
    };
    Software_StockInDetail_Component.prototype.cboCheckBySelectedIndex = function () {
        this.itemCollectionView.items[0].listCheckedBy[this.checkedBySelectedIndex].Id;
        console.log(this.checkedBySelectedIndex);
    };
    Software_StockInDetail_Component.prototype.cboApprovedBySelectedIndex = function () {
        this.itemCollectionView.items[0].listApprovedBy[this.approvedBySelectedIndex].Id;
        console.log(this.approvedBySelectedIndex);
    };
    Software_StockInDetail_Component.prototype.cboSupplierSelectedIndex = function () {
        this.itemCollectionView.items[0].listSupplier[this.supplierSelectedIndex].Id;
        console.log(this.supplierSelectedIndex);
    };
    Software_StockInDetail_Component.prototype.cboPurchaseOrderSelectedIndex = function () {
        this.itemCollectionView.items[0].listPurchaseOrder[this.purchaseOrderSelectedIndex].Id;
        console.log(this.purchaseOrderSelectedIndex);
    };
    Software_StockInDetail_Component.prototype.cboPeriodSelectedIndex = function () {
        this.itemCollectionView.items[0].listPeriod[this.periodOrderSelectedIndex].Id;
        console.log(this.periodOrderSelectedIndex);
    };
    //
    //FOR STOCK IN LINE LIST
    //
    Software_StockInDetail_Component.prototype.cboItemSelectedIndex = function () {
        this.itemCollectionView.items[0].listItem[this.itemSelectedIndex].Id;
        console.log(this.itemSelectedIndex);
    };
    Software_StockInDetail_Component.prototype.cboUnitSelectedIndex = function () {
        this.itemCollectionView.items[0].listUnit[this.unitSelectedIndex].Id;
        console.log(this.unitSelectedIndex);
    };
    Software_StockInDetail_Component.prototype.cboAccountSelectedIndex = function () {
        this.itemCollectionView.items[0].listAccount[this.accountSelectedIndex].Id;
        console.log(this.accountSelectedIndex);
    };
    //GET ITEM OBJECT
    Software_StockInDetail_Component.prototype.getDataStockInObject = function () {
        var dataObject = {
            PeriodId: this.itemCollectionView.items[0].listPeriod[this.periodOrderSelectedIndex].Id,
            StockInDate: this.StockInDate,
            StockInNumber: document.getElementById("StockInNumber").value,
            SupplierId: this.itemCollectionView.items[0].listSupplier[this.supplierSelectedIndex].Id,
            Remarks: document.getElementById("Remarks").value,
            IsReturn: document.getElementById("IsReturn").checked,
            CollectionId: this.itemCollectionView.items[0].CollectionId,
            PurchaseOrderId: this.itemCollectionView.items[0].listPurchaseOrder[this.purchaseOrderSelectedIndex].Id,
            PreparedBy: this.itemCollectionView.items[0].listPreparedBy[this.preparedBySelectedIndex].Id,
            CheckedBy: this.itemCollectionView.items[0].listCheckedBy[this.checkedBySelectedIndex].Id,
            ApprovedBy: this.itemCollectionView.items[0].listApprovedBy[this.approvedBySelectedIndex].Id,
            IsLocked: this.itemCollectionView.items[0].IsLocked = -1,
            EntryUserId: this.itemCollectionView.items[0].EntryUserId,
            EntryDateTime: this.itemCollectionView.items[0].EntryDateTime,
            UpdateUserId: this.itemCollectionView.items[0].UpdateUserId,
            UpdateDateTime: this.itemCollectionView.items[0].UpdateDateTime,
            listCategoryItem: this.itemCollectionView.items[0].listCategoryItem[this.categorySelectedIndex].Id,
        };
        return dataObject;
    };
    //SAVE ITEM
    Software_StockInDetail_Component.prototype.btnSaveEditItem = function () {
        var toastr;
        this.softwareStockInDetailService.putStockInData(this.getIdUrlParameter(), this.getDataStockInObject(), toastr);
        console.log(this.getDataStockInObject());
    };
    //value 
    Software_StockInDetail_Component.prototype.expiryDateChangeValue = function () {
    };
    //SET 
    Software_StockInDetail_Component.prototype.setDateRanged = function () {
        this.StockInDate = new Date();
        this.ExpiryDate = new Date();
    };
    //DROPDOWN
    Software_StockInDetail_Component.prototype.setDropDownFields = function () {
        this.StockInDate = new Date(document.getElementById("StockInDate").value.toString());
        this.ExpiryDate = new Date(document.getElementById("ExpiryDate").value.toString());
    };
    //
    // SAVE MST USER FORM AND UPDATE MST USER FORM
    //
    Software_StockInDetail_Component.prototype.getStockInLineObject = function () {
        var dataObject = {
            StockInId: this.getIdUrlParameter(),
            ItemId: this.itemCollectionView.items[0].listItem[this.itemSelectedIndex].Id,
            UnitId: this.itemCollectionView.items[0].listUnit[this.unitSelectedIndex].Id,
            Quantity: document.getElementById("Quantity").value,
            Cost: document.getElementById("Cost").value,
            Amount: document.getElementById("Amount").value,
            ExpiryDate: this.ExpiryDate,
            LotNumber: document.getElementById("LotNumber").value,
            AssetAccountId: this.itemCollectionView.items[0].listAccount[this.accountSelectedIndex].Id,
        };
        return dataObject;
    };
    Software_StockInDetail_Component.prototype.ClearAfterSave = function () {
        document.getElementById("Quantity").value = "";
        document.getElementById("Cost").value = " ";
        document.getElementById("Amount").value = " ";
        document.getElementById("LotNumber").value = " ";
    };
    Software_StockInDetail_Component.prototype.saveStockInLine = function () {
        var toast;
        this.stockInCollectionView = new wijmo.collections.CollectionView(this.softwareStockInLineService.postStockInLineData(this.getStockInLineObject(), toast));
    };
    Software_StockInDetail_Component.prototype.btnModalSTLine = function () {
        document.getElementById("modalStockInLine").click();
    };
    //
    //DELETE STOCK IN LINE DATA
    //
    Software_StockInDetail_Component.prototype.btnDeleteStockInLineModal = function () {
        document.getElementById("deleteStockInLine").click();
    };
    Software_StockInDetail_Component.prototype.btnDeleteStockInLine = function () {
        var toastr;
        var currentSelectedItem = this.stockInCollectionView.currentItem;
        this.softwareStockInLineService.deleteStockInData(currentSelectedItem.Id, toastr);
        // (<HTMLButtonElement>document.getElementById("btn-hidden-start-loading")).click();
    };
    Software_StockInDetail_Component.prototype.ngOnInit = function () {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.itemCollectionView = new wijmo.collections.CollectionView(this.softwareStockInDetailService.getStockListById(this.getIdUrlParameter()));
    };
    return Software_StockInDetail_Component;
}());
Software_StockInDetail_Component = __decorate([
    core_1.Component({
        selector: 'software_stockin_detail',
        templateUrl: 'app/software_stockin_detail/software_stockin_detail_template/software_stockin_detail.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        software_stockin_detail_service_1.Software_StockInDetail_Service,
        software_stockin_detail_service_2.Software_StockInLine_Service,
        router_1.ActivatedRoute,
        ng2_toastr_1.ToastsManager,
        core_1.ViewContainerRef])
], Software_StockInDetail_Component);
exports.Software_StockInDetail_Component = Software_StockInDetail_Component;
//# sourceMappingURL=software_stockin_detail.component.js.map