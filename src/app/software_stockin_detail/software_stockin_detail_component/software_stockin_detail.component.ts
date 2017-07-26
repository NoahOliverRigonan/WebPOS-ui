import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Software_StockInDetail_Service } from '../software_stockin_detail_service/software_stockin_detail.service';
import { Software_StockInLine_Service } from '../software_stockin_detail_service/software_stockin_detail.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'software_stockin_detail',
    templateUrl: 'app/software_stockin_detail/software_stockin_detail_template/software_stockin_detail.html'
})

export class Software_StockInDetail_Component implements OnInit {
    //OTHER COLLECTION VIEW
    private itemCollectionView: wijmo.collections.CollectionView;
    private stockInCollectionView: wijmo.collections.CollectionView;
    //PreparedBy,Check By, Approved By , MstItem[Category] , Supplier , Purchase ORder , Period , Item , Unit , Account  Observable Array
    private listOfPreparedByObservableArray: wijmo.collections.ObservableArray;
    private listOfCheckedByObservableArray: wijmo.collections.ObservableArray;
    private listOfApprovedByObservableArray: wijmo.collections.ObservableArray;
    private listOfCategoryObservableArray: wijmo.collections.ObservableArray;
    private listOfSupplierObservableArray: wijmo.collections.ObservableArray;
    private listOfPurchaseOrderObservableArray: wijmo.collections.ObservableArray;
    private listOfPeriodObservableArray: wijmo.collections.ObservableArray;
    private listOfItemObservableArray: wijmo.collections.ObservableArray;
    private listOfUnitObservableArray: wijmo.collections.ObservableArray;
    private listOfAccountObservableArray: wijmo.collections.ObservableArray;
    //PreparedBy,Check By, Approved By , MstItem[Category] , Supplier , Purchase ORder , Period , Item , Unit , Account Selected Index
    private preparedBySelectedIndex: number;
    private checkedBySelectedIndex: number;
    private approvedBySelectedIndex: number;
    private categorySelectedIndex: number;
    private supplierSelectedIndex: number;
    private purchaseOrderSelectedIndex: number;
    private periodOrderSelectedIndex: number;
    private itemSelectedIndex: number;
    private unitSelectedIndex: number;
    private accountSelectedIndex: number;
    //PreparedBy,Check By, Approved By , MstItem[Category] , Supplier , Purchase ORder, Period , Item , Unit , Account Collection View
    private preparedByCollectionView: wijmo.collections.CollectionView;
    private checkedByCollectionView: wijmo.collections.CollectionView;
    private approvedByCollectionView: wijmo.collections.CollectionView;
    private categoryCollectionView: wijmo.collections.CollectionView;
    private supplierCollectionView: wijmo.collections.CollectionView;
    private purchaseOrderCollectionView: wijmo.collections.CollectionView;
    private periodCollectionView: wijmo.collections.CollectionView;
    private itemListCollectionView: wijmo.collections.CollectionView;
    private unitCollectionView: wijmo.collections.CollectionView;
    private accountCollectionView: wijmo.collections.CollectionView;
    //PreparedBy,Check By, Approved By , MstItem[Category] , Supplier , Purchase ORder , Item , Unit , Account Period Selected Value
    private preparedBySelectedValue: String;
    private checkedBySelectedValue: String;
    private approvedBySelectedValue: String;
    private categorySelectedValue: String;
    private supplierSelectedValue: String;
    private purchaseOrderSelectedValue: String;
    private periodSelectedValue: String;
    private itemSelectedValue: String;
    private unitSelectedValue: String;
    private accountSelectedValue: String;
    //FOR CATEGORY LIST
    private listOfFormsReportsObservableArray: wijmo.collections.ObservableArray;
    private formsReportSelectedIndex: number;
    //Other Method
    private supplierBoolean: Boolean = true;
    private refreshPage: Boolean = true;
    private stockInId: number;
    private indexItem: String;
    private StockInDate: Date;
    private ExpiryDate: Date

    constructor(
        private router: Router,
        private softwareStockInDetailService: Software_StockInDetail_Service,
        private softwareStockInLineService: Software_StockInLine_Service,
        private activatedRoute: ActivatedRoute,
        private toastr: ToastsManager,
        private vcRef: ViewContainerRef
    ) {
        this.toastr.setRootViewContainerRef(vcRef);
    }

    // get url Id parameter
    public getIdUrlParameter() {
        this.activatedRoute.params.subscribe(params => {
            this.stockInId = params['id'];
        });
        return this.stockInId;
    }

    public setFieldValues() {
        if (this.itemCollectionView.items.length > 0) {
            this.StockInDate = this.itemCollectionView.items[0].StockInDate;
            (<HTMLInputElement>document.getElementById("StockInNumber")).value = this.itemCollectionView.items[0].StockInNumber;
            (<HTMLInputElement>document.getElementById("Remarks")).value = this.itemCollectionView.items[0].Remarks;
            (<HTMLInputElement>document.getElementById("IsReturn")).checked = this.itemCollectionView.items[0].IsReturn;

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
    }

    public cboPreparedBySelectedIndex(): void {
        this.itemCollectionView.items[0].listPreparedBy[this.preparedBySelectedIndex].Id;
        console.log(this.preparedBySelectedIndex);
    }

    public cboCategoryItemSelectedIndex(): void {
        this.itemCollectionView.items[0].listCategoryItem[this.categorySelectedIndex].Id;
        console.log(this.categorySelectedIndex);
    }

    public cboCheckBySelectedIndex(): void {
        this.itemCollectionView.items[0].listCheckedBy[this.checkedBySelectedIndex].Id;
        console.log(this.checkedBySelectedIndex);
    }

    public cboApprovedBySelectedIndex(): void {
        this.itemCollectionView.items[0].listApprovedBy[this.approvedBySelectedIndex].Id;
        console.log(this.approvedBySelectedIndex);
    }

    public cboSupplierSelectedIndex(): void {
        this.itemCollectionView.items[0].listSupplier[this.supplierSelectedIndex].Id;
        console.log(this.supplierSelectedIndex);
    }

    public cboPurchaseOrderSelectedIndex(): void {
        this.itemCollectionView.items[0].listPurchaseOrder[this.purchaseOrderSelectedIndex].Id;
        console.log(this.purchaseOrderSelectedIndex);
    }

    public cboPeriodSelectedIndex(): void {
        this.itemCollectionView.items[0].listPeriod[this.periodOrderSelectedIndex].Id;
        console.log(this.periodOrderSelectedIndex);
    }

    //
    //FOR STOCK IN LINE LIST
    //

    public cboItemSelectedIndex(): void {
        this.itemCollectionView.items[0].listItem[this.itemSelectedIndex].Id;
        console.log(this.itemSelectedIndex);
    }

    public cboUnitSelectedIndex(): void {
        this.itemCollectionView.items[0].listUnit[this.unitSelectedIndex].Id;
        console.log(this.unitSelectedIndex);
    }

    public cboAccountSelectedIndex(): void {
        this.itemCollectionView.items[0].listAccount[this.accountSelectedIndex].Id;
        console.log(this.accountSelectedIndex);
    }

    //GET ITEM OBJECT
    public getDataStockInObject() {

        let dataObject = {
            PeriodId: this.itemCollectionView.items[0].listPeriod[this.periodOrderSelectedIndex].Id,
            StockInDate: this.StockInDate,
            StockInNumber: (<HTMLInputElement>document.getElementById("StockInNumber")).value,
            SupplierId: this.itemCollectionView.items[0].listSupplier[this.supplierSelectedIndex].Id,
            Remarks: (<HTMLInputElement>document.getElementById("Remarks")).value,
            IsReturn: (<HTMLInputElement>document.getElementById("IsReturn")).checked,
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
        }
        return dataObject;
    }


    //SAVE ITEM
    public btnSaveEditItem() {
        let toastr: ToastsManager;
        this.softwareStockInDetailService.putStockInData(this.getIdUrlParameter(), this.getDataStockInObject(), toastr);
        console.log(this.getDataStockInObject());
    }

    //value 
    public expiryDateChangeValue() {

    }

    //SET 
    public setDateRanged() {
        this.StockInDate = new Date();
        this.ExpiryDate = new Date();
    }

    //DROPDOWN
    public setDropDownFields() {
        this.StockInDate = new Date((<HTMLInputElement>document.getElementById("StockInDate")).value.toString());
        this.ExpiryDate = new Date((<HTMLInputElement>document.getElementById("ExpiryDate")).value.toString());
    }

    //
    // SAVE MST USER FORM AND UPDATE MST USER FORM
    //
    public getStockInLineObject() {
        let dataObject = {
            StockInId: this.getIdUrlParameter(),
            ItemId: this.itemCollectionView.items[0].listItem[this.itemSelectedIndex].Id,
            UnitId: this.itemCollectionView.items[0].listUnit[this.unitSelectedIndex].Id,
            Quantity: (<HTMLInputElement>document.getElementById("Quantity")).value,
            Cost: (<HTMLInputElement>document.getElementById("Cost")).value,
            Amount: (<HTMLInputElement>document.getElementById("Amount")).value,
            ExpiryDate: this.ExpiryDate,
            LotNumber: (<HTMLInputElement>document.getElementById("LotNumber")).value,
            AssetAccountId: this.itemCollectionView.items[0].listAccount[this.accountSelectedIndex].Id,
        }
        return dataObject;
    }

    public ClearAfterSave() {
        (<HTMLInputElement>document.getElementById("Quantity")).value = "";
        (<HTMLInputElement>document.getElementById("Cost")).value = " ";
        (<HTMLInputElement>document.getElementById("Amount")).value = " ";
        (<HTMLInputElement>document.getElementById("LotNumber")).value = " ";
    }

    public saveStockInLine() {
        let toast: ToastsManager;
        this.stockInCollectionView = new wijmo.collections.CollectionView(this.softwareStockInLineService.postStockInLineData(this.getStockInLineObject(), toast));
    }

    public btnModalSTLine() {
        (<HTMLButtonElement>document.getElementById("modalStockInLine")).click()
    }
    //
    //DELETE STOCK IN LINE DATA
    //
    public btnDeleteStockInLineModal() {
        (<HTMLButtonElement>document.getElementById("deleteStockInLine")).click();
    }

    public btnDeleteStockInLine() {
        let toastr: ToastsManager;
        let currentSelectedItem = this.stockInCollectionView.currentItem;
        this.softwareStockInLineService.deleteStockInData(currentSelectedItem.Id, toastr);
        // (<HTMLButtonElement>document.getElementById("btn-hidden-start-loading")).click();
    }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.itemCollectionView = new wijmo.collections.CollectionView(this.softwareStockInDetailService.getStockListById(this.getIdUrlParameter()));
    }
}