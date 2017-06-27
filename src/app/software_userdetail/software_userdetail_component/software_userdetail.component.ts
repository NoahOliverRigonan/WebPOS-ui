import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Software_UserDetail_Service } from '../software_userdetail_service/software_userdetail.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'software_userdetail',
    templateUrl: 'app/software_userdetail/software_userdetail_template/software_userdetail.html'
})

export class Software_UserDetail_Component implements OnInit {
    //COLLECTION VIEW
    private itemCollectionView: wijmo.collections.CollectionView;
    //FOR SUPPLIER TERM
    private listOfCopyRightUserObservableArray: wijmo.collections.ObservableArray;
    private copyRightUserSelectedIndex: number;
    //FOR SUPPLIER ACCOUNT
    private listOfFormsReportsObservableArray: wijmo.collections.ObservableArray;
    private formsReportSelectedIndex: number;

    //Other Method
    private supplierBoolean: Boolean = true;
    private refreshPage: Boolean = true;
    private supplierId: number;
    //Term  , ACCOUNT  WIJMO COLLECTION
    private copyRightUserCollecetionView: wijmo.collections.CollectionView;
    private formsReportCollectionView: wijmo.collections.CollectionView;
    //SELECTED VALUE
    private copyRightSelectedValue: String;
    private formsReportSelectedValue: String;

    constructor(
        private router: Router,
        private softwareUserDetailService: Software_UserDetail_Service,
        private activatedRoute: ActivatedRoute,
        private toastr: ToastsManager,
        private vcRef: ViewContainerRef
    ) {
        this.toastr.setRootViewContainerRef(vcRef);
    }


    // get url Id parameter
    public getIdUrlParameter() {
        this.activatedRoute.params.subscribe(params => {
            this.supplierId = params['id'];
        });
        return this.supplierId;
    }


    //
    // WJMO-COMBO-BOX - TERM & ACCOUNT
    //
    public setFieldValuesUnit(): void {
        if (this.itemCollectionView.items.length > 0) {
            (<HTMLInputElement>document.getElementById("UserName")).value = this.itemCollectionView.items[0].UserName;
            (<HTMLInputElement>document.getElementById("Password")).value = this.itemCollectionView.items[0].Password;
            (<HTMLInputElement>document.getElementById("FullName")).value = this.itemCollectionView.items[0].FullName;
            (<HTMLInputElement>document.getElementById("UserCardNumber")).value = this.itemCollectionView.items[0].UserCardNumber;

            this.listOfCopyRightUserObservableArray = this.itemCollectionView.items[0].listMstUser;
            this.copyRightUserCollecetionView = new wijmo.collections.CollectionView(this.listOfCopyRightUserObservableArray);
            if (this.itemCollectionView.items.length > 0) {
                this.copyRightUserCollecetionView.items[0].listMstUser = this.itemCollectionView.items[0].listMstUser;
            }


            // this.listOfFormsReportsObservableArray = this.itemCollectionView.items[0].listSysForm;
            // this.formsReportCollectionView = new wijmo.collections.CollectionView(this.listOfFormsReportsObservableArray);
            // if (this.itemCollectionView.items.length > 0) {
            //     this.formsReportCollectionView.items[0].listSysForm = this.itemCollectionView.items[0].listSysForm;
            // }


        }
    }

    public cboMstUserSelectedIndexChanged(): void {
        this.itemCollectionView.items[0].listMstUser[this.copyRightUserSelectedIndex].Id;
        console.log(this.copyRightUserSelectedIndex);
    }

    public cboSysFormSelectedIndexChanged(): void {
        this.itemCollectionView.items[0].listSysForm[this.formsReportSelectedIndex].Id;
        console.log(this.formsReportSelectedIndex);
    }




    //GET ITEM OBJECT
    public getDataUserObject() {

        let dataObject = {
            Supplier: (<HTMLInputElement>document.getElementById("UserName")).value,
            Address: (<HTMLInputElement>document.getElementById("Password")).value,
            TelephoneNumber: (<HTMLInputElement>document.getElementById("FullName")).value,
            CellphoneNumber: (<HTMLInputElement>document.getElementById("UserCardNumber")).value,
            EntryUserId: this.itemCollectionView.items[0].EntryUserId,
            EntryDateTime: this.itemCollectionView.items[0].EntryDateTime,
            UpdateUserId: this.itemCollectionView.items[0].UpdateUserId,
            UpdateDateTime: this.itemCollectionView.items[0].UpdateDateTime,
            IsLocked: this.itemCollectionView.items[0].IsLocked = true,
            AspNetUserId: this.itemCollectionView.items[0].AspNetUserId,
            listMstUser: this.itemCollectionView.items[0].listMstUser[this.copyRightUserSelectedIndex].Id,
            // listSysForm: this.itemCollectionView.items[0].listSysForm[this.formsReportSelectedIndex].Id,

        }
        return dataObject;
    }

    //SAVE ITEM 
    public btnSaveEditItem() {
        let toastr: ToastsManager;
        this.softwareUserDetailService.putUserData(this.getIdUrlParameter(), this.getDataUserObject(), toastr);
        console.log(this.getDataUserObject());
    }

    //value 
    public expiryDateChangeValue() {

    }

    //LOCK FIELDS
    public LockDataItem() {
        (<HTMLButtonElement>document.getElementById("Supplier")).disabled = true;
        (<HTMLButtonElement>document.getElementById("Address")).disabled = true;
        (<HTMLButtonElement>document.getElementById("TelephoneNumber")).disabled = true;
        (<HTMLButtonElement>document.getElementById("CellphoneNumber")).disabled = true;
        (<HTMLButtonElement>document.getElementById("FaxNumber")).disabled = true;
        (<HTMLButtonElement>document.getElementById("TIN")).disabled = true;
    }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.itemCollectionView = new wijmo.collections.CollectionView(this.softwareUserDetailService.getUserList(this.getIdUrlParameter()));
    }

}