import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Software_Discountdetail_Service } from '../software_discountdetail_service/software_discountdetail.service';
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
        private softwareDiscountItemService: Software_Discountdetail_Service,
        private activatedRoute: ActivatedRoute,
        private toastr: ToastsManager
    ) { }

    public getIdUrlParameter() {
        this.activatedRoute.params.subscribe(params => {
            this.discountId = params['id'];
        });
        return this.discountId;
    }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        
        this.itemDiscountCollectionView = new wijmo.collections.CollectionView(this.softwareDiscountItemService.getItemDiscountDetail());
        this.DiscountCollectionView = new wijmo.collections.CollectionView(this.softwareDiscountItemService.getDiscountDetail(this.getIdUrlParameter()));
    }

    public setFieldValuesItemDiscount() {

        if (this.itemDiscountCollectionView.items.length > 0) {
            this.listOfItemCodeObservableArray = this.itemDiscountCollectionView.items[0].listOfItemCode;
            this.listOfItemCodeCollectionView = new wijmo.collections.CollectionView(this.listOfItemCodeObservableArray);
            if (this.itemDiscountCollectionView.items.length > 0) {
                this.listOfItemCodeCollectionView.items[0].listOfItemCode = this.itemDiscountCollectionView.items[0].listOfItemCode;
            }

            this.listOfItemDescriptionObservableArray = this.itemDiscountCollectionView.items[0].listOfItemDescription;
            this.listOfItemDescriptionCollectionView = new wijmo.collections.CollectionView(this.listOfItemDescriptionObservableArray);
            if (this.itemDiscountCollectionView.items.length > 0) {
                this.listOfItemDescriptionCollectionView.items[0].listOfItemDescription = this.itemDiscountCollectionView.items[0].listOfItemDescription;
            }


        }


    }

    public setFieldValuesDiscount() {

        if (this.DiscountCollectionView.items.length > 0) {
            (<HTMLInputElement>document.getElementById("Discount")).value = this.DiscountCollectionView.items[0].Discount;
            (<HTMLInputElement>document.getElementById("DiscountRate")).value = this.DiscountCollectionView.items[0].DiscountRate;
            (<HTMLInputElement>document.getElementById("VatExempt")).checked = this.DiscountCollectionView.items[0].IsVatExempt;
            (<HTMLInputElement>document.getElementById("DateSchedule")).checked = this.DiscountCollectionView.items[0].IsDateScheduled;
            this.DateStart = this.DiscountCollectionView.items[0].DateStart;
            this.DateEnd = this.DiscountCollectionView.items[0].DateEnd;
            (<HTMLInputElement>document.getElementById("DayScheduled")).checked = this.DiscountCollectionView.items[0].IsDayScheduled;
            (<HTMLInputElement>document.getElementById("Mon")).checked = this.DiscountCollectionView.items[0].DayMon;
            (<HTMLInputElement>document.getElementById("Tue")).checked = this.DiscountCollectionView.items[0].DayTue;
            (<HTMLInputElement>document.getElementById("Wed")).checked = this.DiscountCollectionView.items[0].DayWed;
            (<HTMLInputElement>document.getElementById("Thu")).checked = this.DiscountCollectionView.items[0].DayThu;
            (<HTMLInputElement>document.getElementById("Fri")).checked = this.DiscountCollectionView.items[0].DayFri;
            (<HTMLInputElement>document.getElementById("Sat")).checked = this.DiscountCollectionView.items[0].DaySat;
            (<HTMLInputElement>document.getElementById("Sun")).checked = this.DiscountCollectionView.items[0].DaySun;
            (<HTMLInputElement>document.getElementById("TimeScheduled")).checked = this.DiscountCollectionView.items[0].IsTimeScheduled;
            (<HTMLInputElement>document.getElementById("TimeStart")).value = this.DiscountCollectionView.items[0].TimeStart;
            (<HTMLInputElement>document.getElementById("TimeEnd")).value = this.DiscountCollectionView.items[0].TimeEnd;
        } else {
            // (<HTMLInputElement>document.getElementById("Discount")).value;
            // (<HTMLInputElement>document.getElementById("DiscountRate")).value;
            // (<HTMLInputElement>document.getElementById("VatExempt")).checked;
            // (<HTMLInputElement>document.getElementById("DateSchedule")).checked;
            // this.DateStart = this.DiscountCollectionView.items[0].DateStart;
            // this.DateEnd = this.DiscountCollectionView.items[0].DateEnd;
            // (<HTMLInputElement>document.getElementById("DayScheduled")).checked;
            // (<HTMLInputElement>document.getElementById("Mon")).checked;
            // (<HTMLInputElement>document.getElementById("Tue")).checked;
            // (<HTMLInputElement>document.getElementById("Wed")).checked;
            // (<HTMLInputElement>document.getElementById("Thu")).checked;
            // (<HTMLInputElement>document.getElementById("Fri")).checked;
            // (<HTMLInputElement>document.getElementById("Sat")).checked;
            // (<HTMLInputElement>document.getElementById("Sun")).checked;
            // (<HTMLInputElement>document.getElementById("TimeScheduled")).checked;
            // (<HTMLInputElement>document.getElementById("TimeStart")).value;
            // (<HTMLInputElement>document.getElementById("TimeEnd")).value;
        }
    }

    public cboItemCodeSelectedIndex() {
        this.itemDiscountCollectionView.items[0].listOfItemCode[this.itemCodeSelectedIndex].Id;
        console.log(this.listOfItemCodeCollectionView.items[0].listOfItemCode[this.itemCodeSelectedIndex].Id);
    }

    public cboItemDescriptionSelectedIndex() {
        this.itemDiscountCollectionView.items[0].listOfItemDescription[this.itemDescriptionSelectedIndex].Id;
        console.log(this.listOfItemDescriptionCollectionView.items[0].listOfItemDescription[this.itemDescriptionSelectedIndex].Id);
    }

    public deleteDiscountItems() {
        let toastr: ToastsManager;
        let currentDiscountSelectedItem = this.itemDiscountCollectionView.currentItem;
        if (currentDiscountSelectedItem.Discount == "n/a" || currentDiscountSelectedItem.DiscountRate == 0 || currentDiscountSelectedItem.IsVatExempt == false) {
            this.softwareDiscountItemService.deleteDiscountItem(currentDiscountSelectedItem.Id , toastr);
        }
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
    // public getDiscountItemObjecet(){

    //     let dataObject = 
    //     {
    //         Discount:
    //         DiscountRate:
    //         IsVatExempt:
    //         IsDateScheduled:
    //         DateStart:
    //         DateEnd:
    //         IsTimeScheduled:
    //         TimeStart:
    //         TimeEnd:
    //         IsDayScheduled:
    //         DayMon:
    //         DayTue:
    //         DayWed:
    //         DayThu:
    //         DayFri:
    //         DaySat:
    //         DaySun:
    //         EntryUserId:
    //         EntryDateTime:
    //         UpdateUserId:
    //         UpdateDateTime:
    //         IsLocked:

    //     }

    // }
}