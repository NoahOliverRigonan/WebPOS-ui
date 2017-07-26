import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Software_CollectionDetail_Service } from '../software_collectiondetail_service/software_collectiondetail.service';
import { Software_CollectionLine_Service } from '../software_collectiondetail_service/software_collectiondetail.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'software_collectiondetail',
    templateUrl: 'app/software_collectiondetail/software_collectiondetail_template/software_collectiondetail.html'
})

export class Software_CollectionDetail_Component implements OnInit {
    //OTHER COLLECTION VIEW
    private itemCollectionView: wijmo.collections.CollectionView;
    private collectionListView: wijmo.collections.CollectionView;
    //PreparedBy,Check By, Approved By ,Supplier , Period , Item , Unit Observable Array
    private listOfPreparedByObservableArray: wijmo.collections.ObservableArray;
    private listOfCheckedByObservableArray: wijmo.collections.ObservableArray;
    private listOfApprovedByObservableArray: wijmo.collections.ObservableArray;
    private listOfPeriodObservableArray: wijmo.collections.ObservableArray;
    private listOfSalesNumberObservableArray: wijmo.collections.ObservableArray;
    private listOfCustomerListObservableArray: wijmo.collections.ObservableArray;
    private listOfTerminalListObservableArray: wijmo.collections.ObservableArray;
    private listOfPayTypeObservableArray: wijmo.collections.ObservableArray;
    private listOfStockInObservableArray: wijmo.collections.ObservableArray;
    private listOfAssetAccountObservableArray: wijmo.collections.ObservableArray;
    private listofCreditObservableArray: wijmo.collections.ObservableArray;
    //PreparedBy,Check By, Approved By ,Customer , Supplier , Period, Item , Unit Selected Index
    private preparedBySelectedIndex: number;
    private checkedBySelectedIndex: number;
    private approvedBySelectedIndex: number;
    private periodSelectedIndex: number;
    private salesSelectedIndex: number;
    private customerListSelectedIndex: number;
    private terminalSelectedIndex: number;
    private payTypeSelectedIndex: number;
    private stockInSelectedIndex: number;
    private assetAccountSelectedIndex: number;
    private creditSelectedIndex: number;
    //PreparedBy,Check By, Approved By ,Supplier , Period , Item , Unit Collection View
    private preparedByCollectionView: wijmo.collections.CollectionView;
    private checkedByCollectionView: wijmo.collections.CollectionView;
    private approvedByCollectionView: wijmo.collections.CollectionView;
    private periodCollectionView: wijmo.collections.CollectionView;
    private salesCollectionView: wijmo.collections.CollectionView;
    private customerListCollectionView: wijmo.collections.CollectionView;
    private terminalListCollectionView: wijmo.collections.CollectionView;
    private payTypeListCollectionView: wijmo.collections.CollectionView;
    private stockInListCollectionView: wijmo.collections.CollectionView;
    private assetAccountCollectionView: wijmo.collections.CollectionView;
    //PreparedBy,Check By, Approved By ,Supplier , Period, Item , Unit Selected Value
    private preparedBySelectedValue: String;
    private checkedBySelectedValue: String;
    private approvedBySelectedValue: String;
    private periodSelectedValue: String;
    private salesSelectedValue: String;
    private customerListSelectedValue: String;
    private terminalSelectedValue: String;
    private payTypeSelectedValue: String;
    private stockInSelectedValue: String;
    private assetAccountSelectedValue: String;
    private creditSelectedValue: String;
    //FOR CATEGORY LIST
    private listOfFormsReportsObservableArray: wijmo.collections.ObservableArray;
    private formsReportSelectedIndex: number;
    //Other Method
    private supplierBoolean: Boolean = true;
    private refreshPage: Boolean = true;
    private collectionId: number;
    private indexItem: String;
    private CollectionDate: Date;
    private CheckDate: Date;

    constructor(
        private router: Router,
        private softwareCollectionDetailService: Software_CollectionDetail_Service,
        private softwareCollectionLineDetailService: Software_CollectionLine_Service,
        private activatedRoute: ActivatedRoute,
        private toastr: ToastsManager,
        private vcRef: ViewContainerRef
    ) {
        this.toastr.setRootViewContainerRef(vcRef);
    }

    // get url Id parameter
    public getIdUrlParameter() {
        this.activatedRoute.params.subscribe(params => {
            this.collectionId = params['id'];
        });
        return this.collectionId;
    }

    public getCollectionListById() {
        this.collectionListView = new wijmo.collections.CollectionView(this.softwareCollectionLineDetailService.getCollectionLineList(this.getIdUrlParameter()));
        this.collectionListView.pageSize = 15;
    }
    //
    // WJMO-COMBO-BOX - TERM & ACCOUNT
    //

    public setFieldValues(): void {
        if (this.itemCollectionView.items.length > 0) {
            (<HTMLInputElement>document.getElementById("CollectionNumber")).value = this.itemCollectionView.items[0].CollectionNumber;
            (<HTMLInputElement>document.getElementById("ManualORNumber")).value = this.itemCollectionView.items[0].ManualORNumber;
            (<HTMLInputElement>document.getElementById("SalesBalanceAmount")).value = this.itemCollectionView.items[0].SalesBalanceAmount;
            (<HTMLInputElement>document.getElementById("Amount")).value = this.itemCollectionView.items[0].Amount;
            (<HTMLInputElement>document.getElementById("Remarks")).value = this.itemCollectionView.items[0].Remarks;

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
    }

    public cboPreparedBySelectedIndex(): void {
        this.itemCollectionView.items[0].listPreparedBy[this.preparedBySelectedIndex].Id;
        console.log(this.preparedBySelectedIndex);
    }
    public cboCheckBySelectedIndex(): void {
        this.itemCollectionView.items[0].listCheckedBy[this.checkedBySelectedIndex].Id;
        console.log(this.checkedBySelectedIndex);
    }

    public cboApprovedBySelectedIndex(): void {
        this.itemCollectionView.items[0].listApprovedBy[this.approvedBySelectedIndex].Id;
        console.log(this.approvedBySelectedIndex);
    }

    public cboPeriodSelectedIndex(): void {
        this.itemCollectionView.items[0].listPeriod[this.periodSelectedIndex].Id;
        console.log(this.periodSelectedIndex);
    }

    public cboSalesSelectedIndex(): void {
        this.itemCollectionView.items[0].listSales[this.salesSelectedIndex].Id;
        console.log(this.salesSelectedIndex);
    }

    public cboCustomerSelectedIndex(): void {
        this.itemCollectionView.items[0].listCustomer[this.customerListSelectedIndex].Id;
        console.log(this.customerListSelectedIndex);
    }

    public cboTerminalSelectedIndex(): void {
        this.itemCollectionView.items[0].listTerminal[this.terminalSelectedIndex].Id;
        console.log(this.terminalSelectedIndex);
    }

    // SUB FORM COLLECTION DETAIL
    // public cboCreditSelectedIndex(): void {
    //     this.creditListCollectionView[this.creditSelectedIndex].indexOf;
    // }

    public cboPayTypeSelectedIndex() {
        this.itemCollectionView.items[0].listPayType[this.payTypeSelectedIndex].Id;
        console.log(this.payTypeSelectedIndex);

    }

    public cboStockInSelectedIndex(): void {
        this.itemCollectionView.items[0].listStockIn[this.stockInSelectedIndex].Id;
        console.log(this.stockInSelectedIndex);
    }

    public cboAssetAccountSelectedIndex(): void {
        this.itemCollectionView.items[0].listAccount[this.assetAccountSelectedIndex].Id;
        console.log(this.assetAccountSelectedIndex);

    }

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
    public getDataCollection() {

        let dataObject = {
            PeriodId: this.itemCollectionView.items[0].listPeriod[this.periodSelectedIndex].Id,
            CollectionDate: this.CollectionDate,
            CollectionNumber: (<HTMLInputElement>document.getElementById("CollectionNumber")).value,
            TerminalId: this.itemCollectionView.items[0].listTerminal[this.terminalSelectedIndex].Id,
            ManualORNumber: (<HTMLInputElement>document.getElementById("ManualORNumber")).value,
            CustomerId: this.itemCollectionView.items[0].listCustomer[this.customerListSelectedIndex].Id,
            Remarks: (<HTMLInputElement>document.getElementById("Remarks")).value,
            SalesId: this.itemCollectionView.items[0].SalesId,
            SalesNumber: this.itemCollectionView.items[0].listSales[this.salesSelectedIndex].Id,
            SalesBalanceAmount: (<HTMLInputElement>document.getElementById("SalesBalanceAmount")).value,
            Amount: (<HTMLInputElement>document.getElementById("Amount")).value,
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
        }
        return dataObject;

    }


    //SAVE COLLECTION
    public btnSaveCollection() {
        let toastr: ToastsManager;
        this.softwareCollectionDetailService.putCollectionData(this.getIdUrlParameter(), this.getDataCollection(), toastr);
        console.log(this.getDataCollection());
    }

    //value 
    public expiryDateChangeValue() {

    }
    //SET 
    public setDateRanged() {
        this.CollectionDate = new Date();
        this.CheckDate = new Date();
    }
    //DROPDOWN
    public setDropDownFields() {
        this.CollectionDate = new Date((<HTMLInputElement>document.getElementById("CollectionDate")).value.toString());
        this.CheckDate = new Date((<HTMLInputElement>document.getElementById("CheckDate")).value.toString());
    }
    //
    // SAVE COLLECTION LINE
    //
    public getCollectionLineObject() {
        let collectionObjectData = {
            CollectionId: this.getIdUrlParameter(),
            Amount: (<HTMLInputElement>document.getElementById("Amount")).value,
            PayTypeId: this.itemCollectionView.items[0].listPayType[this.payTypeSelectedIndex].Id,
            CheckNumber:  (<HTMLInputElement>document.getElementById("CheckNumber")).value,
            CheckDate:  this.CheckDate,
            CheckBank:  (<HTMLInputElement>document.getElementById("CheckBank")).value,
            CreditCardVerificationCode: (<HTMLInputElement>document.getElementById("CreditCardVerificationCode")).value,
            CreditCardNumber:  (<HTMLInputElement>document.getElementById("CreditCardNumber")).value,
            CreditCardType: this.itemCollectionView.items[0].CreditCardType,
            CreditCardBank:  (<HTMLInputElement>document.getElementById("CreditCardBank")).value,
            GiftCertificateNumber: (<HTMLInputElement>document.getElementById("GiftCertificateNumber")).value,
            OtherInformation: (<HTMLInputElement>document.getElementById("OtherInformation")).value,
            StockInId: this.itemCollectionView.items[0].listStockIn[this.stockInSelectedIndex].Id,
            AccountId: this.itemCollectionView.items[0].listAccount[this.assetAccountSelectedIndex].Id,
        }
        return collectionObjectData;
    }

    public saveCollectionLine() {
        let toast: ToastsManager;
        this.collectionListView = new wijmo.collections.CollectionView(this.softwareCollectionLineDetailService.postPurchaseOrderLineData(this.getCollectionLineObject(), toast));
    }

    public moveItemToFirstPage(): void {
        this.collectionListView.moveToFirstPage();
        this.indexItem = (this.collectionListView.pageIndex + 1) + " / " + this.collectionListView.pageCount;
    }

    public moveItemToPreviousPage(): void {
        this.collectionListView.moveToPreviousPage();
        this.indexItem = (this.collectionListView.pageIndex + 1) + " / " + this.collectionListView.pageCount;
    }

    public moveItemToNextPage(): void {
        this.collectionListView.moveToNextPage();
        this.indexItem = (this.collectionListView.pageIndex + 1) + " / " + this.collectionListView.pageCount;
    }

    public moveItemToLastPage(): void {
        this.collectionListView.moveToLastPage();
        this.indexItem = (this.collectionListView.pageIndex + 1) + " / " + this.collectionListView.pageCount;
    }

    public ClearAfterSave() {
        (<HTMLInputElement>document.getElementById("COLineAmount")).value = "";
        (<HTMLInputElement>document.getElementById("CheckNumber")).value = " ";
        (<HTMLInputElement>document.getElementById("CheckBank")).value = " ";
        (<HTMLInputElement>document.getElementById("CreditCardVerificationCode")).value = " ";
        (<HTMLInputElement>document.getElementById("CreditCardNumber")).value = "";
        (<HTMLInputElement>document.getElementById("CreditCardBank")).value = " ";
        (<HTMLInputElement>document.getElementById("GiftCertificateNumber")).value = " ";
        (<HTMLInputElement>document.getElementById("OtherInformation")).value = " ";
    }

    public btnModalAddPOLine() {
        (<HTMLButtonElement>document.getElementById("modal-for-add-purchaseorderline")).click()
    }
    //
    //DELETE PURCHASE ORDER LINE DATA
    //
    public btnDeleteCollectionLineModal() {
        (<HTMLButtonElement>document.getElementById("deleteCollectionLine")).click();
    }

    public btnDeleteCollectionLine() {
        let toastr: ToastsManager;
        let currentSelectedItem = this.collectionListView.currentItem;
        this.softwareCollectionLineDetailService.deleteCollectionLine(currentSelectedItem.Id, toastr);
        // (<HTMLButtonElement>document.getElementById("btn-hidden-start-loading")).click();
    }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.itemCollectionView = new wijmo.collections.CollectionView(this.softwareCollectionDetailService.getCollectionById(this.getIdUrlParameter()));
        this.getCollectionListById();
    }
}