import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Software_PurchaseDetail_Service } from '../software_purchasedetail_service/software_purchasedetail.service';
import { Software_PurchaseDetailLine_Service } from '../software_purchasedetail_service/software_purchasedetail.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'software_purchasedetail',
    templateUrl: 'app/software_purchasedetail/software_purchasedetail_template/software_purchasedetail.html'
})

export class Software_PurchaseDetail_Component implements OnInit {
    //OTHER COLLECTION VIEW
    private itemCollectionView: wijmo.collections.CollectionView;
    private purchaseOrderLineCollectionView: wijmo.collections.CollectionView;
    //PreparedBy,Check By, Approved By ,Supplier , Period , Item , Unit Observable Array
    private listOfPreparedByObservableArray: wijmo.collections.ObservableArray;
    private listOfCheckedByObservableArray: wijmo.collections.ObservableArray;
    private listOfApprovedByObservableArray: wijmo.collections.ObservableArray;
    private listOfSupplierObservableArray: wijmo.collections.ObservableArray;
    private listOfPeriodObservableArray: wijmo.collections.ObservableArray;
    private listOfItemListObservableArray: wijmo.collections.ObservableArray;
    private listOfUnitListObservableArray: wijmo.collections.ObservableArray;
    //PreparedBy,Check By, Approved By ,Customer , Supplier , Period, Item , Unit Selected Index
    private preparedBySelectedIndex: number;
    private checkedBySelectedIndex: number;
    private approvedBySelectedIndex: number;
    private supplierSelectedIndex: number;
    private periodSelectedIndex: number;
    private itemListSelectedIndex: number;
    private unitSelectedIndex: number;
    //PreparedBy,Check By, Approved By ,Supplier , Period , Item , Unit Collection View
    private preparedByCollectionView: wijmo.collections.CollectionView;
    private checkedByCollectionView: wijmo.collections.CollectionView;
    private approvedByCollectionView: wijmo.collections.CollectionView;
    private supplierCollectionView: wijmo.collections.CollectionView;
    private periodCollectionView: wijmo.collections.CollectionView;
    private itemListCollectionView: wijmo.collections.CollectionView;
    private unitListCollectionView: wijmo.collections.CollectionView;
    //PreparedBy,Check By, Approved By ,Supplier , Period, Item , Unit Selected Value
    private preparedBySelectedValue: String;
    private checkedBySelectedValue: String;
    private approvedBySelectedValue: String;
    private supplierSelectedValue: String;
    private periodSelectedValue: String;
    private itemListSelectedValue: String;
    private unitSelectedValue: String;
    //FOR CATEGORY LIST
    private listOfFormsReportsObservableArray: wijmo.collections.ObservableArray;
    private formsReportSelectedIndex: number;
    //Other Method
    private supplierBoolean: Boolean = true;
    private refreshPage: Boolean = true;
    private purchaseOrderId: number;
    private indexItem: String;
    private PurchaseOrderDate: Date;
    constructor(
        private router: Router,
        private softwarePurchaseDetailService: Software_PurchaseDetail_Service,
        private softwarePurchaseDetailLineService: Software_PurchaseDetailLine_Service,
        private activatedRoute: ActivatedRoute,
        private toastr: ToastsManager,
        private vcRef: ViewContainerRef
    ) {
        this.toastr.setRootViewContainerRef(vcRef);
    }

    // get url Id parameter
    public getIdUrlParameter() {
        this.activatedRoute.params.subscribe(params => {
            this.purchaseOrderId = params['id'];
        });
        return this.purchaseOrderId;
    }


    public getPurchaseOrderLineList() {
        this.purchaseOrderLineCollectionView = new wijmo.collections.CollectionView(this.softwarePurchaseDetailLineService.getPurchaseOrderLineList(this.getIdUrlParameter()));
        this.purchaseOrderLineCollectionView.pageSize = 15;
    }

    //
    // WJMO-COMBO-BOX - TERM & ACCOUNT
    //

    public setFieldValues(): void {
        if (this.itemCollectionView.items.length > 0) {
            (<HTMLInputElement>document.getElementById("PurchaseOrderNumber")).value = this.itemCollectionView.items[0].PurchaseOrderNumber;
            (<HTMLInputElement>document.getElementById("Remarks")).value = this.itemCollectionView.items[0].Remarks;
            (<HTMLInputElement>document.getElementById("Amount")).value = this.itemCollectionView.items[0].Amount;

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
    }

    public cboPreparedBySelectedIndex(): void {
        this.itemCollectionView.items[0].listPreparedBy[this.preparedBySelectedIndex].Id;
        console.log(this.preparedBySelectedIndex);
    }

    public cboSupplierSelectedIndex(): void {
        this.itemCollectionView.items[0].listSupplier[this.supplierSelectedIndex].Id;
        console.log(this.supplierSelectedIndex);
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

    public cboItemListSelectedIndex(): void {
        this.itemCollectionView.items[0].listItem[this.itemListSelectedIndex].Id;
        console.log(this.itemListSelectedIndex);
    }

    public cboUnitSelectedIndex(): void {
        this.itemCollectionView.items[0].listUnit[this.unitSelectedIndex].Id;
        console.log(this.unitSelectedIndex);
    }

    //GET POLine OBJECT
    public getDataPurchaseOrder() {
        let dataObject = {
            PeriodId: this.itemCollectionView.items[0].PeriodId,
            PurchaseOrderDate: this.PurchaseOrderDate,
            PurchaseOrderNumber: (<HTMLInputElement>document.getElementById("PurchaseOrderNumber")).value,
            SupplierId: this.itemCollectionView.items[0].listSupplier[this.supplierSelectedIndex].Id,
            Amount: (<HTMLInputElement>document.getElementById("Amount")).value,
            Remarks: (<HTMLInputElement>document.getElementById("Remarks")).value,
            PreparedBy: this.itemCollectionView.items[0].listPreparedBy[this.preparedBySelectedIndex].Id,
            CheckedBy: this.itemCollectionView.items[0].listCheckedBy[this.checkedBySelectedIndex].Id,
            ApprovedBy: this.itemCollectionView.items[0].listApprovedBy[this.approvedBySelectedIndex].Id,
            IsLocked: this.itemCollectionView.items[0].IsLocked = -1,
            EntryUserId: this.itemCollectionView.items[0].EntryUserId,
            EntryDateTime: this.itemCollectionView.items[0].EntryDateTime,
            UpdateUserId: this.itemCollectionView.items[0].UpdateUserId,
            UpdateDateTime: this.itemCollectionView.items[0].UpdateDateTime,
        }
        return dataObject;

    }



    //SAVE ITEM
    public btnSaveEditItem() {
        let toastr: ToastsManager;
        this.softwarePurchaseDetailService.putPurchaseOrderData(this.getIdUrlParameter(), this.getDataPurchaseOrder(), toastr);
        console.log(this.getDataPurchaseOrder());
    }

    //value 
    public expiryDateChangeValue() {

    }

    //SET 
    public setDateRanged() {
        this.PurchaseOrderDate = new Date();
    }

    //DROPDOWN
    public setDropDownFields() {
        this.PurchaseOrderDate = new Date((<HTMLInputElement>document.getElementById("PurchaseOrderDate")).value.toString());
    }

    //
    // SAVE PURCHASE ORDER LINE
    //
    public getPurchaseOrderLineObject() {
        let dataUserFormObject = {
            PurchaseOrderId: this.getIdUrlParameter(),
            ItemId: this.itemCollectionView.items[0].listItem[this.itemListSelectedIndex].Id,
            UnitId: this.itemCollectionView.items[0].listUnit[this.unitSelectedIndex].Id,
            Quantity: (<HTMLInputElement>document.getElementById("Quantity")).value,
            Cost: (<HTMLInputElement>document.getElementById("Cost")).value,
            Amount: (<HTMLInputElement>document.getElementById("POLAmount")).value,
        }
        return dataUserFormObject;
    }

    public savePOLine() {
        let toast: ToastsManager;
        this.purchaseOrderLineCollectionView = new wijmo.collections.CollectionView(this.softwarePurchaseDetailLineService.postPurchaseOrderLineData(this.getPurchaseOrderLineObject(), toast));
    }


    public moveItemToFirstPage(): void {
        this.purchaseOrderLineCollectionView.moveToFirstPage();
        this.indexItem = (this.purchaseOrderLineCollectionView.pageIndex + 1) + " / " + this.purchaseOrderLineCollectionView.pageCount;
    }

    public moveItemToPreviousPage(): void {
        this.purchaseOrderLineCollectionView.moveToPreviousPage();
        this.indexItem = (this.purchaseOrderLineCollectionView.pageIndex + 1) + " / " + this.purchaseOrderLineCollectionView.pageCount;
    }

    public moveItemToNextPage(): void {
        this.purchaseOrderLineCollectionView.moveToNextPage();
        this.indexItem = (this.purchaseOrderLineCollectionView.pageIndex + 1) + " / " + this.purchaseOrderLineCollectionView.pageCount;
    }

    public moveItemToLastPage(): void {
        this.purchaseOrderLineCollectionView.moveToLastPage();
        this.indexItem = (this.purchaseOrderLineCollectionView.pageIndex + 1) + " / " + this.purchaseOrderLineCollectionView.pageCount;
    }

    public ClearAfterSave() {
        (<HTMLInputElement>document.getElementById("Quantity")).value = "";
        (<HTMLInputElement>document.getElementById("Cost")).value = " ";
        (<HTMLInputElement>document.getElementById("POLAmount")).value = " ";
    }

    public btnModalAddPOLine() {
        (<HTMLButtonElement>document.getElementById("modal-for-add-purchaseorderline")).click()
    }

    //
    //DELETE PURCHASE ORDER LINE DATA
    //
    public btnDeletePurchaseDetailLineModal() {
        (<HTMLButtonElement>document.getElementById("deletePurchaseOrderLine")).click();
    }

    public btnDeletePurchaseOrderLine() {
        let toastr: ToastsManager;
        let currentSelectedItem = this.purchaseOrderLineCollectionView.currentItem;
        this.softwarePurchaseDetailLineService.deletePurchaseOrderLine(currentSelectedItem.Id, toastr);
        // (<HTMLButtonElement>document.getElementById("btn-hidden-start-loading")).click();
    }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.itemCollectionView = new wijmo.collections.CollectionView(this.softwarePurchaseDetailService.getPurchaseOrderById(this.getIdUrlParameter()));
        this.getPurchaseOrderLineList();
    }
}