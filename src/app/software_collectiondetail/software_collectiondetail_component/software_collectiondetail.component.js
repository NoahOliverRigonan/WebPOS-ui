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
var software_collectiondetail_service_1 = require("../software_collectiondetail_service/software_collectiondetail.service");
var software_collectiondetail_service_2 = require("../software_collectiondetail_service/software_collectiondetail.service");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var Software_CollectionDetail_Component = (function () {
    function Software_CollectionDetail_Component(router, softwareCollectionDetailService, softwareCollectionLineDetailService, activatedRoute, toastr, vcRef) {
        this.router = router;
        this.softwareCollectionDetailService = softwareCollectionDetailService;
        this.softwareCollectionLineDetailService = softwareCollectionLineDetailService;
        this.activatedRoute = activatedRoute;
        this.toastr = toastr;
        this.vcRef = vcRef;
        //Other Method
        this.supplierBoolean = true;
        this.refreshPage = true;
        this.toastr.setRootViewContainerRef(vcRef);
    }
    // get url Id parameter
    Software_CollectionDetail_Component.prototype.getIdUrlParameter = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.collectionId = params['id'];
        });
        return this.collectionId;
    };
    Software_CollectionDetail_Component.prototype.getCollectionListById = function () {
        this.collectionListView = new wijmo.collections.CollectionView(this.softwareCollectionLineDetailService.getCollectionLineList(this.getIdUrlParameter()));
        this.collectionListView.pageSize = 15;
    };
    //
    // WJMO-COMBO-BOX - TERM & ACCOUNT
    //
    Software_CollectionDetail_Component.prototype.setFieldValues = function () {
        if (this.itemCollectionView.items.length > 0) {
            document.getElementById("CollectionNumber").value = this.itemCollectionView.items[0].CollectionNumber;
            document.getElementById("ManualORNumber").value = this.itemCollectionView.items[0].ManualORNumber;
            document.getElementById("SalesBalanceAmount").value = this.itemCollectionView.items[0].SalesBalanceAmount;
            document.getElementById("Amount").value = this.itemCollectionView.items[0].Amount;
            document.getElementById("Remarks").value = this.itemCollectionView.items[0].Remarks;
            this.CollectionDate = this.itemCollectionView.items[0].CollectionDate;
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
            this.listOfPeriodObservableArray = this.itemCollectionView.items[0].listPeriod;
            this.periodCollectionView = new wijmo.collections.CollectionView(this.listOfPeriodObservableArray);
            this.periodCollectionView.items[0].listPeriod = this.itemCollectionView.items[0].listPeriod;
            //
            this.listOfSalesNumberObservableArray = this.itemCollectionView.items[0].listSales;
            this.salesCollectionView = new wijmo.collections.CollectionView(this.listOfSalesNumberObservableArray);
            this.salesCollectionView.items[0].listSales = this.itemCollectionView.items[0].listSales;
            //
            this.listOfCustomerListObservableArray = this.itemCollectionView.items[0].listCustomer;
            this.customerListCollectionView = new wijmo.collections.CollectionView(this.listOfCustomerListObservableArray);
            this.customerListCollectionView.items[0].listCustomer = this.itemCollectionView.items[0].listCustomer;
            //
            this.listOfTerminalListObservableArray = this.itemCollectionView.items[0].listTerminal;
            this.terminalListCollectionView = new wijmo.collections.CollectionView(this.listOfTerminalListObservableArray);
            this.terminalListCollectionView.items[0].listTerminal = this.itemCollectionView.items[0].listTerminal;
            //
            this.listOfPayTypeObservableArray = this.itemCollectionView.items[0].listPayType;
            this.payTypeListCollectionView = new wijmo.collections.CollectionView(this.listOfPayTypeObservableArray);
            this.payTypeListCollectionView.items[0].listPayType = this.itemCollectionView.items[0].listPayType;
            //
            this.listOfStockInObservableArray = this.itemCollectionView.items[0].listStockIn;
            this.stockInListCollectionView = new wijmo.collections.CollectionView(this.listOfStockInObservableArray);
            this.stockInListCollectionView.items[0].listStockIn = this.itemCollectionView.items[0].listStockIn;
            //
            this.listOfAssetAccountObservableArray = this.itemCollectionView.items[0].listAccount;
            this.assetAccountCollectionView = new wijmo.collections.CollectionView(this.listOfAssetAccountObservableArray);
            this.assetAccountCollectionView.items[0].listAccount = this.itemCollectionView.items[0].listAccount;
        }
    };
    Software_CollectionDetail_Component.prototype.cboPreparedBySelectedIndex = function () {
        this.itemCollectionView.items[0].listPreparedBy[this.preparedBySelectedIndex].Id;
        console.log(this.preparedBySelectedIndex);
    };
    Software_CollectionDetail_Component.prototype.cboCheckBySelectedIndex = function () {
        this.itemCollectionView.items[0].listCheckedBy[this.checkedBySelectedIndex].Id;
        console.log(this.checkedBySelectedIndex);
    };
    Software_CollectionDetail_Component.prototype.cboApprovedBySelectedIndex = function () {
        this.itemCollectionView.items[0].listApprovedBy[this.approvedBySelectedIndex].Id;
        console.log(this.approvedBySelectedIndex);
    };
    Software_CollectionDetail_Component.prototype.cboPeriodSelectedIndex = function () {
        this.itemCollectionView.items[0].listPeriod[this.periodSelectedIndex].Id;
        console.log(this.periodSelectedIndex);
    };
    Software_CollectionDetail_Component.prototype.cboSalesSelectedIndex = function () {
        this.itemCollectionView.items[0].listSales[this.salesSelectedIndex].Id;
        console.log(this.salesSelectedIndex);
    };
    Software_CollectionDetail_Component.prototype.cboCustomerSelectedIndex = function () {
        this.itemCollectionView.items[0].listCustomer[this.customerListSelectedIndex].Id;
        console.log(this.customerListSelectedIndex);
    };
    Software_CollectionDetail_Component.prototype.cboTerminalSelectedIndex = function () {
        this.itemCollectionView.items[0].listTerminal[this.terminalSelectedIndex].Id;
        console.log(this.terminalSelectedIndex);
    };
    // SUB FORM COLLECTION DETAIL
    // public cboCreditSelectedIndex(): void {
    //     this.creditListCollectionView[this.creditSelectedIndex].indexOf;
    // }
    Software_CollectionDetail_Component.prototype.cboPayTypeSelectedIndex = function () {
        this.itemCollectionView.items[0].listPayType[this.payTypeSelectedIndex].Id;
        console.log(this.payTypeSelectedIndex);
    };
    Software_CollectionDetail_Component.prototype.cboStockInSelectedIndex = function () {
        this.itemCollectionView.items[0].listStockIn[this.stockInSelectedIndex].Id;
        console.log(this.stockInSelectedIndex);
    };
    Software_CollectionDetail_Component.prototype.cboAssetAccountSelectedIndex = function () {
        this.itemCollectionView.items[0].listAccount[this.assetAccountSelectedIndex].Id;
        console.log(this.assetAccountSelectedIndex);
    };
    // public updateCBO() {
    //     this.listOfAssetAccountObservableArray = this.itemCollectionView.items[0].listAccount;
    //     this.assetAccountCollectionView = new wijmo.collections.CollectionView(this.listOfAssetAccountObservableArray);
    //     this.assetAccountCollectionView.items[0].listAccount = this.itemCollectionView.items[0].listAccount;
    //     this.listOfPayTypeObservableArray = this.itemCollectionView.items[0].listPayType;
    //     this.payTypeListCollectionView = new wijmo.collections.CollectionView(this.listOfPayTypeObservableArray);
    //     this.payTypeListCollectionView.items[0].listPayType = this.itemCollectionView.items[0].listPayType;
    //     let newPayType = this.payTypeListCollectionView.items[0].listPayType.AccountId;
    //     switch (newPayType) {
    //         case 48: if (newPayType == 48) {
    //             this.listOfAssetAccountObservableArray = this.itemCollectionView.items[0].listAccount;
    //             this.assetAccountCollectionView = new wijmo.collections.CollectionView(this.listOfAssetAccountObservableArray);
    //             this.assetAccountCollectionView.items[0].listAccount = this.itemCollectionView.items[0].listAccount;
    //             console.log(this.itemCollectionView.items[this.assetAccountCollectionView.items[0].listAccount.Id]);
    //         }
    //         case 48: if (newPayType == 48) {
    //             this.listOfAssetAccountObservableArray = this.itemCollectionView.items[0].listAccount;
    //             this.assetAccountCollectionView = new wijmo.collections.CollectionView(this.listOfAssetAccountObservableArray);
    //             this.assetAccountCollectionView.items[0].listAccount = this.itemCollectionView.items[0].listAccount;
    //             console.log(this.itemCollectionView.items[this.assetAccountCollectionView.items[0].listAccount.Id]);
    //         }
    //         case 255: if (newPayType == 255) {
    //             this.listOfAssetAccountObservableArray = this.itemCollectionView.items[0].listAccount;
    //             this.assetAccountCollectionView = new wijmo.collections.CollectionView(this.listOfAssetAccountObservableArray);
    //             this.assetAccountCollectionView.items[0].listAccount = this.itemCollectionView.items[0].listAccount;
    //             console.log(this.itemCollectionView.items[this.assetAccountCollectionView.items[0].listAccount.Id]);
    //         }
    //         case 255: if (newPayType == 255) {
    //             this.listOfAssetAccountObservableArray = this.itemCollectionView.items[0].listAccount;
    //             this.assetAccountCollectionView = new wijmo.collections.CollectionView(this.listOfAssetAccountObservableArray);
    //             this.assetAccountCollectionView.items[0].listAccount = this.itemCollectionView.items[0].listAccount;
    //             console.log(this.itemCollectionView.items[this.assetAccountCollectionView.items[0].listAccount.Id]);
    //         }
    //         case 255: if (newPayType == 255) {
    //             this.listOfAssetAccountObservableArray = this.itemCollectionView.items[0].listAccount;
    //             this.assetAccountCollectionView = new wijmo.collections.CollectionView(this.listOfAssetAccountObservableArray);
    //             this.assetAccountCollectionView.items[0].listAccount = this.itemCollectionView.items[0].listAccount;
    //             console.log(this.itemCollectionView.items[this.assetAccountCollectionView.items[0].listAccount.Id]);
    //         }
    //         case 255: if (newPayType == 255) {
    //             this.listOfAssetAccountObservableArray = this.itemCollectionView.items[0].listAccount;
    //             this.assetAccountCollectionView = new wijmo.collections.CollectionView(this.listOfAssetAccountObservableArray);
    //             this.assetAccountCollectionView.items[0].listAccount = this.itemCollectionView.items[0].listAccount;
    //             console.log(this.itemCollectionView.items[this.assetAccountCollectionView.items[0].listAccount.Id]);
    //         }
    //         case 255: if (newPayType == 255) {
    //             this.listOfAssetAccountObservableArray = this.itemCollectionView.items[0].listAccount;
    //             this.assetAccountCollectionView = new wijmo.collections.CollectionView(this.listOfAssetAccountObservableArray);
    //             this.assetAccountCollectionView.items[0].listAccount = this.itemCollectionView.items[0].listAccount;
    //             console.log(this.itemCollectionView.items[this.assetAccountCollectionView.items[0].listAccount.Id]);
    //         }
    //         case 255: if (newPayType == 255) {
    //             this.listOfAssetAccountObservableArray = this.itemCollectionView.items[0].listAccount;
    //             this.assetAccountCollectionView = new wijmo.collections.CollectionView(this.listOfAssetAccountObservableArray);
    //             this.assetAccountCollectionView.items[0].listAccount = this.itemCollectionView.items[0].listAccount;
    //             console.log(this.itemCollectionView.items[this.assetAccountCollectionView.items[0].listAccount.Id]);
    //         }
    //     };
    // }
    //GET Collection Line OBJECT
    Software_CollectionDetail_Component.prototype.getDataCollection = function () {
        var dataObject = {
            PeriodId: this.itemCollectionView.items[0].listPeriod[this.periodSelectedIndex].Id,
            CollectionDate: this.CollectionDate,
            CollectionNumber: document.getElementById("CollectionNumber").value,
            TerminalId: this.itemCollectionView.items[0].listTerminal[this.terminalSelectedIndex].Id,
            ManualORNumber: document.getElementById("ManualORNumber").value,
            CustomerId: this.itemCollectionView.items[0].listCustomer[this.customerListSelectedIndex].Id,
            Remarks: document.getElementById("Remarks").value,
            SalesId: this.itemCollectionView.items[0].SalesId,
            SalesNumber: this.itemCollectionView.items[0].listSales[this.salesSelectedIndex].Id,
            SalesBalanceAmount: document.getElementById("SalesBalanceAmount").value,
            Amount: document.getElementById("Amount").value,
            TenderAmount: this.itemCollectionView.items[0].TenderAmount,
            ChangeAmount: this.itemCollectionView.items[0].ChangeAmount,
            PreparedBy: this.itemCollectionView.items[0].listPreparedBy[this.preparedBySelectedIndex].Id,
            CheckedBy: this.itemCollectionView.items[0].listCheckedBy[this.checkedBySelectedIndex].Id,
            ApprovedBy: this.itemCollectionView.items[0].listApprovedBy[this.approvedBySelectedIndex].Id,
            IsCancelled: this.itemCollectionView.items[0].IsCancelled = false,
            IsLocked: this.itemCollectionView.items[0].IsLocked = -1,
            EntryUserId: this.itemCollectionView.items[0].EntryUserId,
            EntryDateTime: this.itemCollectionView.items[0].EntryDateTime,
            UpdateUserId: this.itemCollectionView.items[0].UpdateUserId,
            UpdateDateTime: this.itemCollectionView.items[0].UpdateDateTime,
        };
        return dataObject;
    };
    //SAVE COLLECTION
    Software_CollectionDetail_Component.prototype.btnSaveCollection = function () {
        var toastr;
        this.softwareCollectionDetailService.putCollectionData(this.getIdUrlParameter(), this.getDataCollection(), toastr);
        console.log(this.getDataCollection());
    };
    //value 
    Software_CollectionDetail_Component.prototype.expiryDateChangeValue = function () {
    };
    //SET 
    Software_CollectionDetail_Component.prototype.setDateRanged = function () {
        this.CollectionDate = new Date();
        this.CheckDate = new Date();
    };
    //DROPDOWN
    Software_CollectionDetail_Component.prototype.setDropDownFields = function () {
        this.CollectionDate = new Date(document.getElementById("CollectionDate").value.toString());
        this.CheckDate = new Date(document.getElementById("CheckDate").value.toString());
    };
    //
    // SAVE COLLECTION LINE
    //
    Software_CollectionDetail_Component.prototype.getCollectionLineObject = function () {
        var collectionObjectData = {
            CollectionId: this.getIdUrlParameter(),
            Amount: document.getElementById("Amount").value,
            PayTypeId: this.itemCollectionView.items[0].listPayType[this.payTypeSelectedIndex].Id,
            CheckNumber: document.getElementById("CheckNumber").value,
            CheckDate: this.CheckDate,
            CheckBank: document.getElementById("CheckBank").value,
            CreditCardVerificationCode: document.getElementById("CreditCardVerificationCode").value,
            CreditCardNumber: document.getElementById("CreditCardNumber").value,
            CreditCardType: this.itemCollectionView.items[0].CreditCardType,
            CreditCardBank: document.getElementById("CreditCardBank").value,
            GiftCertificateNumber: document.getElementById("GiftCertificateNumber").value,
            OtherInformation: document.getElementById("OtherInformation").value,
            StockInId: this.itemCollectionView.items[0].listStockIn[this.stockInSelectedIndex].Id,
            AccountId: this.itemCollectionView.items[0].listAccount[this.assetAccountSelectedIndex].Id,
        };
        return collectionObjectData;
    };
    Software_CollectionDetail_Component.prototype.saveCollectionLine = function () {
        var toast;
        this.collectionListView = new wijmo.collections.CollectionView(this.softwareCollectionLineDetailService.postPurchaseOrderLineData(this.getCollectionLineObject(), toast));
    };
    Software_CollectionDetail_Component.prototype.moveItemToFirstPage = function () {
        this.collectionListView.moveToFirstPage();
        this.indexItem = (this.collectionListView.pageIndex + 1) + " / " + this.collectionListView.pageCount;
    };
    Software_CollectionDetail_Component.prototype.moveItemToPreviousPage = function () {
        this.collectionListView.moveToPreviousPage();
        this.indexItem = (this.collectionListView.pageIndex + 1) + " / " + this.collectionListView.pageCount;
    };
    Software_CollectionDetail_Component.prototype.moveItemToNextPage = function () {
        this.collectionListView.moveToNextPage();
        this.indexItem = (this.collectionListView.pageIndex + 1) + " / " + this.collectionListView.pageCount;
    };
    Software_CollectionDetail_Component.prototype.moveItemToLastPage = function () {
        this.collectionListView.moveToLastPage();
        this.indexItem = (this.collectionListView.pageIndex + 1) + " / " + this.collectionListView.pageCount;
    };
    Software_CollectionDetail_Component.prototype.ClearAfterSave = function () {
        document.getElementById("COLineAmount").value = "";
        document.getElementById("CheckNumber").value = " ";
        document.getElementById("CheckBank").value = " ";
        document.getElementById("CreditCardVerificationCode").value = " ";
        document.getElementById("CreditCardNumber").value = "";
        document.getElementById("CreditCardBank").value = " ";
        document.getElementById("GiftCertificateNumber").value = " ";
        document.getElementById("OtherInformation").value = " ";
    };
    Software_CollectionDetail_Component.prototype.btnModalAddPOLine = function () {
        document.getElementById("modal-for-add-purchaseorderline").click();
    };
    //
    //DELETE PURCHASE ORDER LINE DATA
    //
    Software_CollectionDetail_Component.prototype.btnDeleteCollectionLineModal = function () {
        document.getElementById("deleteCollectionLine").click();
    };
    Software_CollectionDetail_Component.prototype.btnDeleteCollectionLine = function () {
        var toastr;
        var currentSelectedItem = this.collectionListView.currentItem;
        this.softwareCollectionLineDetailService.deleteCollectionLine(currentSelectedItem.Id, toastr);
        // (<HTMLButtonElement>document.getElementById("btn-hidden-start-loading")).click();
    };
    Software_CollectionDetail_Component.prototype.ngOnInit = function () {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.itemCollectionView = new wijmo.collections.CollectionView(this.softwareCollectionDetailService.getCollectionById(this.getIdUrlParameter()));
        this.getCollectionListById();
    };
    return Software_CollectionDetail_Component;
}());
Software_CollectionDetail_Component = __decorate([
    core_1.Component({
        selector: 'software_collectiondetail',
        templateUrl: 'app/software_collectiondetail/software_collectiondetail_template/software_collectiondetail.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        software_collectiondetail_service_1.Software_CollectionDetail_Service,
        software_collectiondetail_service_2.Software_CollectionLine_Service,
        router_1.ActivatedRoute,
        ng2_toastr_1.ToastsManager,
        core_1.ViewContainerRef])
], Software_CollectionDetail_Component);
exports.Software_CollectionDetail_Component = Software_CollectionDetail_Component;
//# sourceMappingURL=software_collectiondetail.component.js.map