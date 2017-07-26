import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Software_Customerdetail_Service } from '../software_customerdetail_service/software_customerdetail.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'software_customerdetail',
    templateUrl: 'app/software_customerdetail/software_customerdetail_template/software_customerdetail.html'
})

export class Software_Customerdetail_Component implements OnInit {
    //ITEM DISCOUNT COLLECTION VIEW
    private customerCollectionView: wijmo.collections.CollectionView;
    //LIST OF ITEM PRICE, TERM, ACCOUNT OBSERVABLE ARRAY
    private listOfItemPriceObservableArray: wijmo.collections.ObservableArray;
    private listOfTermObservableArray: wijmo.collections.ObservableArray;
    private listOfAccountObservableArray: wijmo.collections.ObservableArray;
    //LIST OF ITEM PRICE, TERM, SELECTED INDEX
    private itemPriceSelectedIndex: number;
    private termSelectedIndex: number;
    private accountSelectedIndex: number;
    //LIST OF ITEM PRICE, TERM, ACCOUNTCODE COLLECTION VIEW
    private listOfItemPriceCollectionView: wijmo.collections.CollectionView;
    private listOfTermCollectionView: wijmo.collections.CollectionView;
    private listOfAccountCollectionView: wijmo.collections.CollectionView;
    //LIST OF ITEM PRICE, TERM, ACCOUNTCODE SELECTED VALUE
    private itemPriceSelectedValue: String;
    private termSelectedValue: String;
    private accountSelectedValue: String;
    //Other Methods
    private customerId: number;

    constructor(
        private router: Router,
        private softwareCustomerDetailService: Software_Customerdetail_Service,
        private activatedRoute: ActivatedRoute,
        private toastr: ToastsManager,
        private vcRef: ViewContainerRef,
    ) {
        this.toastr.setRootViewContainerRef(vcRef);
    }

    public getIdUrlParameter() {
        this.activatedRoute.params.subscribe(params => {
            this.customerId = params['id'];
        });
        return this.customerId;
    }

    public setFieldValues() {
        if (this.customerCollectionView.items.length > 0) {
            (<HTMLInputElement>document.getElementById("Customer")).value = this.customerCollectionView.items[0].Customer;
            (<HTMLInputElement>document.getElementById("Address")).value = this.customerCollectionView.items[0].Address;
            (<HTMLInputElement>document.getElementById("ContactPerson")).value = this.customerCollectionView.items[0].ContactPerson;
            (<HTMLInputElement>document.getElementById("ContactNumber")).value = this.customerCollectionView.items[0].ContactNumber;
            (<HTMLInputElement>document.getElementById("CreditLimit")).value = this.customerCollectionView.items[0].CreditLimit;

            this.listOfTermObservableArray = this.customerCollectionView.items[0].listTerm;
            this.listOfTermCollectionView = new wijmo.collections.CollectionView(this.listOfTermObservableArray);
            this.listOfTermCollectionView.items[0].listTerm = this.customerCollectionView.items[0].listTerm;

            (<HTMLInputElement>document.getElementById("TIN")).value = this.customerCollectionView.items[0].TIN;

            this.listOfAccountObservableArray = this.customerCollectionView.items[0].listAccount;
            this.listOfAccountCollectionView = new wijmo.collections.CollectionView(this.listOfAccountObservableArray);
            this.listOfAccountCollectionView.items[0].listAccount = this.customerCollectionView.items[0].listAccount;

            (<HTMLInputElement>document.getElementById("WithReward")).checked = this.customerCollectionView.items[0].WithReward;
            (<HTMLInputElement>document.getElementById("RewardNumber")).value = this.customerCollectionView.items[0].RewardNumber;
            (<HTMLInputElement>document.getElementById("RewardConversion")).value = this.customerCollectionView.items[0].RewardConversion;

            this.listOfItemPriceObservableArray = this.customerCollectionView.items[0].listItemPrice;
            this.listOfItemPriceCollectionView = new wijmo.collections.CollectionView(this.listOfItemPriceObservableArray);
            this.listOfItemPriceCollectionView.items[0].listItemPrice = this.customerCollectionView.items[0].listItemPrice;

        }


    }

    public cboItemPriceSelectedIndex() {
        this.customerCollectionView.items[0].listItemPrice[this.itemPriceSelectedIndex].Id;
    }

    public cboTermSelectedIndex() {
        this.customerCollectionView.items[0].listTerm[this.termSelectedIndex].Id;
    }

    public cboAccountSelectedIndex() {
        this.customerCollectionView.items[0].listAccount[this.accountSelectedIndex].Id;
    }


    public getCustomerObject() {
        let dataObject =
            {
                Customer: (<HTMLInputElement>document.getElementById("Customer")).value,
                Address: (<HTMLInputElement>document.getElementById("Address")).value,
                ContactPerson: (<HTMLInputElement>document.getElementById("ContactPerson")).value,
                ContactNumber: (<HTMLInputElement>document.getElementById("ContactNumber")).value,
                CreditLimit: (<HTMLInputElement>document.getElementById("CreditLimit")).value,
                TermId: this.listOfTermCollectionView.items[0].listTerm[this.termSelectedIndex].Id,
                TIN: (<HTMLInputElement>document.getElementById("TIN")).value,
                WithReward: (<HTMLInputElement>document.getElementById("WithReward")).checked,
                RewardNumber: (<HTMLInputElement>document.getElementById("RewardNumber")).value,
                RewardConversion: (<HTMLInputElement>document.getElementById("RewardConversion")).value,
                AccountId: this.listOfAccountCollectionView.items[0].listAccount[this.accountSelectedIndex].Id,
                EntryUserId: this.customerCollectionView.items[0].EntryUserId,
                EntryDateTime: this.customerCollectionView.items[0].EntryDateTime,
                UpdateUserId: this.customerCollectionView.items[0].UpdateUserId,
                UpdateDateTime: this.customerCollectionView.items[0].UpdateDateTime,
                IsLocked: this.customerCollectionView.items[0].IsLocked,
            }
        return dataObject;
    }

    public btnSaveEdit() {
        let toastr: ToastsManager;
        this.softwareCustomerDetailService.putCustomerData(this.getIdUrlParameter(), this.getCustomerObject(), toastr);
    }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.customerCollectionView = new wijmo.collections.CollectionView(this.softwareCustomerDetailService.getCustomerDetail(this.getIdUrlParameter()));
    }
}