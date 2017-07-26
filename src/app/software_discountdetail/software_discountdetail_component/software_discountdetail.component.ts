import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Software_Discountdetail_Service } from '../software_discountdetail_service/software_discountdetail.service';
import { Software_DiscountItem_Service } from '../software_discountdetail_service/software_discountdetail.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'software_discountdetail',
    templateUrl: 'app/software_discountdetail/software_discountdetail_template/software_discountdetail.html'
})

export class Software_Discountdetail_Component implements OnInit {
    //ITEM DISCOUNT COLLECTION VIEW
    private itemDiscountCollectionView: wijmo.collections.CollectionView;
    private DiscountCollectionView: wijmo.collections.CollectionView;
    //LIST OF ITEM CODE OBSERVABLE ARRAY
    private listOfItemCodeObservableArray: wijmo.collections.ObservableArray;
    private itemCodeSelectedIndex: number;
    //LIST OF ITEM DESCRIPTION
    private listOfItemDescriptionObservableArray: wijmo.collections.ObservableArray;
    private itemDescriptionSelectedIndex: number;
    //LIST OF ITEM CODE COLLECTION VIEW
    private listOfItemCodeCollectionView: wijmo.collections.CollectionView;
    private listOfItemDescriptionCollectionView: wijmo.collections.CollectionView;
    //Other Methods
    private discountId: number;
    //DISCOUNT ITEM FIELDS
    private Discount: String;
    private DiscountRate: number;
    private IsVatExempt: Boolean;
    private IsDateScheduled: Boolean;
    private DateStart: Date;
    private DateEnd: Date;
    private IsDayScheduled: Boolean;
    private DayMon: Boolean;
    private DayTue: Boolean;
    private DayWed: Boolean;
    private DayThu: Boolean;
    private DayFri: Boolean;
    private DaySat: Boolean;
    private DaySun: Boolean;
    private EntryUserId: number;
    private EntryDateTime: Date;
    private UpdateUserId: number;
    private UpdateDateTime: Date;
    private IsLocked: Boolean;

    constructor(
        private router: Router,
        private softwareDiscountDetailService: Software_Discountdetail_Service,
        private softwareDiscountItemService: Software_DiscountItem_Service,
        private activatedRoute: ActivatedRoute,
        private toastr: ToastsManager,
        private vcRef: ViewContainerRef,
    ) {
        this.toastr.setRootViewContainerRef(vcRef);
    }

    public getIdUrlParameter() {
        this.activatedRoute.params.subscribe(params => {
            this.discountId = params['id'];
        });
        return this.discountId;
    }

    public getDiscountItem() {
        this.itemDiscountCollectionView = new wijmo.collections.CollectionView(this.softwareDiscountItemService.getItemDiscountDetail(this.getIdUrlParameter()));
        this.itemDiscountCollectionView.pageSize = 15;
    }

    public setFieldValuesItemDiscount() {
        if (this.DiscountCollectionView.items.length > 0) {
            (<HTMLInputElement>document.getElementById("Discount")).value = this.DiscountCollectionView.items[0].Discount;
            (<HTMLInputElement>document.getElementById("DiscountRate")).value = this.DiscountCollectionView.items[0].DiscountRate;
            (<HTMLInputElement>document.getElementById("IsVatExempt")).checked = this.DiscountCollectionView.items[0].IsVatExempt;
            (<HTMLInputElement>document.getElementById("IsDateScheduled")).checked = this.DiscountCollectionView.items[0].IsDateScheduled;
            this.DateStart = this.DiscountCollectionView.items[0].DateStart;
            this.DateEnd = this.DiscountCollectionView.items[0].DateEnd;
            (<HTMLInputElement>document.getElementById("IsDayScheduled")).checked = this.DiscountCollectionView.items[0].IsDayScheduled;
            (<HTMLInputElement>document.getElementById("DayMon")).checked = this.DiscountCollectionView.items[0].DayMon;
            (<HTMLInputElement>document.getElementById("DayTue")).checked = this.DiscountCollectionView.items[0].DayTue;
            (<HTMLInputElement>document.getElementById("DayWed")).checked = this.DiscountCollectionView.items[0].DayWed;
            (<HTMLInputElement>document.getElementById("DayThu")).checked = this.DiscountCollectionView.items[0].DayThu;
            (<HTMLInputElement>document.getElementById("DayFri")).checked = this.DiscountCollectionView.items[0].DayFri;
            (<HTMLInputElement>document.getElementById("DaySat")).checked = this.DiscountCollectionView.items[0].DaySat;
            (<HTMLInputElement>document.getElementById("DaySun")).checked = this.DiscountCollectionView.items[0].DaySun;
            (<HTMLInputElement>document.getElementById("IsTimeScheduled")).checked = this.DiscountCollectionView.items[0].IsTimeScheduled;
            (<HTMLInputElement>document.getElementById("TimeStart")).valueAsDate = this.DiscountCollectionView.items[0].TimeStart;
            (<HTMLInputElement>document.getElementById("TimeEnd")).valueAsDate = this.DiscountCollectionView.items[0].TimeEnd;

            this.listOfItemCodeObservableArray = this.DiscountCollectionView.items[0].listOfItemCode;
            this.listOfItemCodeCollectionView = new wijmo.collections.CollectionView(this.listOfItemCodeObservableArray);
            this.listOfItemCodeCollectionView.items[0].listOfItemCode = this.DiscountCollectionView.items[0].listOfItemCode;

            this.listOfItemDescriptionObservableArray = this.DiscountCollectionView.items[0].listOfItemDescription;
            this.listOfItemDescriptionCollectionView = new wijmo.collections.CollectionView(this.listOfItemDescriptionObservableArray);
            this.listOfItemDescriptionCollectionView.items[0].listOfItemDescription = this.DiscountCollectionView.items[0].listOfItemDescription;

        }


    }

    public cboItemCodeSelectedIndex() {
        this.DiscountCollectionView.items[0].listOfItemCode[this.itemCodeSelectedIndex].Id;
        console.log(this.listOfItemCodeCollectionView.items[0].listOfItemCode[this.itemCodeSelectedIndex].Id);
    }

    public cboItemDescriptionSelectedIndex() {
        this.DiscountCollectionView.items[0].listOfItemDescription[this.itemDescriptionSelectedIndex].Id;
        console.log(this.listOfItemDescriptionCollectionView.items[0].listOfItemDescription[this.itemDescriptionSelectedIndex].Id);
    }

    public deleteDiscountItems() {
        let toastr: ToastsManager;
        let currentDiscountSelectedItem = this.DiscountCollectionView.currentItem;
        this.softwareDiscountItemService.deleteDiscountItem(currentDiscountSelectedItem.Id, toastr);
    }


    public addItemModal() {
        (<HTMLButtonElement>document.getElementById("btn-hidden-add-detail-modal")).click();
    }

    //value 
    public startDateChangeValue() {

    }

    public endDateChangeValue() {

    }

    //SET 
    public setDateRanged() {
        this.DateStart = new Date();
        this.DateEnd = new Date();
    }

    //DROPDOWN
    public setDropDownFields() {
        this.DateStart = new Date((<HTMLInputElement>document.getElementById("dateStart")).value.toString());
        this.DateEnd = new Date((<HTMLInputElement>document.getElementById("dateEnd")).value.toString());
    }

    public getDiscountObject() {
        let dataObject =
            {
                Discount: (<HTMLInputElement>document.getElementById("Discount")).value,
                DiscountRate: (<HTMLInputElement>document.getElementById("DiscountRate")).value,
                IsVatExempt: (<HTMLInputElement>document.getElementById("IsVatExempt")).checked,
                IsDateScheduled: (<HTMLInputElement>document.getElementById("IsDateScheduled")).checked,
                DateStart: this.DateStart,
                DateEnd: this.DateEnd,
                IsTimeScheduled: (<HTMLInputElement>document.getElementById("IsTimeScheduled")).checked,
                TimeStart: (<HTMLInputElement>document.getElementById("TimeStart")).value,
                TimeEnd: (<HTMLInputElement>document.getElementById("TimeEnd")).value,
                IsDayScheduled: (<HTMLInputElement>document.getElementById("IsDateScheduled")).checked,
                DayMon: (<HTMLInputElement>document.getElementById("DayMon")).checked,
                DayTue: (<HTMLInputElement>document.getElementById("DayTue")).checked,
                DayWed: (<HTMLInputElement>document.getElementById("DayWed")).checked,
                DayThu: (<HTMLInputElement>document.getElementById("DayThu")).checked,
                DayFri: (<HTMLInputElement>document.getElementById("DayFri")).checked,
                DaySat: (<HTMLInputElement>document.getElementById("DaySat")).checked,
                DaySun: (<HTMLInputElement>document.getElementById("DaySun")).checked,
                EntryUserId: this.DiscountCollectionView.items[0].EntryUserId,
                EntryDateTime: this.DiscountCollectionView.items[0].EntryDateTime,
                UpdateUserId: this.DiscountCollectionView.items[0].UpdateUserId,
                UpdateDateTime: this.DiscountCollectionView.items[0].UpdateDateTime,
                IsLocked: this.DiscountCollectionView.items[0].IsLocked,
            }
        return dataObject;
    }

    public btnSaveEdit() {
        let toastr: ToastsManager;
        this.softwareDiscountDetailService.putDiscountData(this.getIdUrlParameter(), this.getDiscountObject(), toastr);
    }

    //
    //FOR DISCOUNT ITEM 
    //

    public getDiscountItemObject() {
        let dataObject = {
            DiscountId: this.getIdUrlParameter(),
            ItemId: this.DiscountCollectionView.items[0].listOfItemCode[this.itemCodeSelectedIndex].Id,
        }
        return dataObject;
    }

    public addItemDiscount() {
        let toastr: ToastsManager;
        this.softwareDiscountItemService.postDiscountItem(this.getDiscountItemObject(), toastr);
        console.log(this.getDiscountItemObject());
    }

    public deleteDiscountModal() {
        (<HTMLButtonElement>document.getElementById("deleteModal")).click();
    }

    public deleteDiscount() {
        let toastr: ToastsManager;
        let currentDiscountItem = this.itemDiscountCollectionView.currentItem;
        this.softwareDiscountItemService.deleteDiscountItem(currentDiscountItem.Id, toastr)
    }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.DiscountCollectionView = new wijmo.collections.CollectionView(this.softwareDiscountDetailService.getDiscountDetail(this.getIdUrlParameter()));
        this.getDiscountItem();
    }
}