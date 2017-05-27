import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Software_Discountdetail_Service } from '../software_discountdetail_service/software_discountdetail.service';

@Component({
    selector: 'software_discountdetail',
    templateUrl: 'app/software_discountdetail/software_discountdetail_template/software_discountdetail.html'
})

export class Software_Discountdetail_Component implements OnInit {
    //ITEM DISCOUNT COLLECTION VIEW
    private itemDiscountCollectionView: wijmo.collections.CollectionView;
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
    private itemId: number;
    //DISCOUNT ITEM FIELDS
    private Discount : String;
    private DiscountRate : number;
    private IsVatExempt : Boolean;
    private IsDateScheduled: Boolean;
    private DateStart  : Date;
    private DateEnd : Date;
    private IsDayScheduled: Boolean;
    private DayMon: Boolean;
    private DayTue: Boolean;
    private DayWed: Boolean;
    private DayThu: Boolean;
    private DayFri: Boolean;
    private DaySat: Boolean;
    private DaySun: Boolean;
    private EntryUserId : number;
    private EntryDateTime: Date;
    private UpdateUserId : number;
    private UpdateDateTime: Date;
    private IsLocked: Boolean;

    constructor(
        private router: Router,
        private softwareDiscountItemService: Software_Discountdetail_Service
    ) { }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.itemDiscountCollectionView = new wijmo.collections.CollectionView(this.softwareDiscountItemService.getItemDiscountDetail());
    }

    public setFieldValues(): void {
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

            
            this.DateStart = this.itemCollectionView.items[0].DateStart;
            this.DateEnd = this.itemCollectionView.items[0].DateEnd;
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

    public addItemModal() {
        (<HTMLButtonElement>document.getElementById("btn-hidden-add-detail-modal")).click();
    }

    public getDiscountItemObjecet(){

        let dataObject = 
        {
            Discount:
            DiscountRate:
            IsVatExempt:
            IsDateScheduled:
            DateStart:
            DateEnd:
            IsTimeScheduled:
            TimeStart:
            TimeEnd:
            IsDayScheduled:
            DayMon:
            DayTue:
            DayWed:
            DayThu:
            DayFri:
            DaySat:
            DaySun:
            EntryUserId:
            EntryDateTime:
            UpdateUserId:
            UpdateDateTime:
            IsLocked:

        }

    }
}