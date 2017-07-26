import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Software_UserDetail_Service } from '../software_userdetail_service/software_userdetail.service';
import { Software_UserForm_Service } from '../software_userdetail_service/software_userdetail.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'software_userdetail',
    templateUrl: 'app/software_userdetail/software_userdetail_template/software_userdetail.html'
})

export class Software_UserDetail_Component implements OnInit {
    //COLLECTION VIEW
    private itemCollectionView: wijmo.collections.CollectionView;
    private userFormCollectionView: wijmo.collections.CollectionView;
    //OBSERVABLE ARRAY
    private userFormObservableArray: wijmo.collections.ObservableArray;
    //FOR SUPPLIER TERM
    private listOfCopyRightUserObservableArray: wijmo.collections.ObservableArray;
    private copyRightUserSelectedIndex: number;
    //FOR SUPPLIER ACCOUNT
    private listOfFormsReportsObservableArray: wijmo.collections.ObservableArray;
    private formsReportSelectedIndex: number;

    //Other Method
    private supplierBoolean: Boolean = true;
    private refreshPage: Boolean = true;
    private userId: number;
    private indexItem: String;
    //Term  , ACCOUNT  WIJMO COLLECTION
    private copyRightUserCollecetionView: wijmo.collections.CollectionView;
    private formsReportCollectionView: wijmo.collections.CollectionView;
    //SELECTED VALUE
    private copyRightSelectedValue: String;
    private formsReportSelectedValue: String;

    constructor(
        private router: Router,
        private softwareUserDetailService: Software_UserDetail_Service,
        private softwareUserFormService: Software_UserForm_Service,
        private activatedRoute: ActivatedRoute,
        private toastr: ToastsManager,
        private vcRef: ViewContainerRef
    ) {
        this.toastr.setRootViewContainerRef(vcRef);
    }


    // get url Id parameter
    public getIdUrlParameter() {
        this.activatedRoute.params.subscribe(params => {
            this.userId = params['id'];
        });
        return this.userId;
    }

    public getUserFormListById() {
        let currentItem = new wijmo.collections.CollectionView(this.softwareUserFormService.getUserFormList(this.userId));
        console.log(currentItem.items);
        (<HTMLButtonElement>document.getElementById("modalAddRights")).click();
        (<HTMLInputElement>document.getElementById("CanDelete")).checked = this.userFormCollectionView.items[0].CanDelete;
        (<HTMLInputElement>document.getElementById("CanAdd")).checked = this.userFormCollectionView.items[0].CanAdd;
        (<HTMLInputElement>document.getElementById("CanLock")).checked = this.userFormCollectionView.items[0].CanLock;
        (<HTMLInputElement>document.getElementById("CanUnlock")).checked = this.userFormCollectionView.items[0].CanUnlock;
        (<HTMLInputElement>document.getElementById("CanPrint")).checked = this.userFormCollectionView.items[0].CanPrint;
        (<HTMLInputElement>document.getElementById("CanPreview")).checked = this.userFormCollectionView.items[0].CanPreview;
        (<HTMLInputElement>document.getElementById("CanEdit")).checked = this.userFormCollectionView.items[0].CanEdit;
        (<HTMLInputElement>document.getElementById("CanTender")).checked = this.userFormCollectionView.items[0].CanTender;
        (<HTMLInputElement>document.getElementById("CanDiscount")).checked = this.userFormCollectionView.items[0].CanDiscount;
        (<HTMLInputElement>document.getElementById("CanView")).checked = this.userFormCollectionView.items[0].CanView;
        (<HTMLInputElement>document.getElementById("CanSplit")).checked = this.userFormCollectionView.items[0].CanSplit;
        (<HTMLInputElement>document.getElementById("CanCancel")).checked = this.userFormCollectionView.items[0].CanCancel;
        (<HTMLInputElement>document.getElementById("CanReturn")).checked = this.userFormCollectionView.items[0].CanReturn;
        // if (this.itemCollectionView.items.length > 0) {
        //     this.listOfFormsReportsObservableArray = this.itemCollectionView.items[0].listSysForm;
        //     this.formsReportCollectionView = new wijmo.collections.CollectionView(this.listOfFormsReportsObservableArray);
        //     if (this.itemCollectionView.items.length > 0) {
        //         this.formsReportCollectionView.items[0].listSysForm = this.userFormCollectionView.currentItem.FormId;
        //     }
        // } else {
        //     this.toastr.error('', 'Error');
        // }
    }

    public Clear() {
        (<HTMLInputElement>document.getElementById("CanDelete")).checked = false;
        (<HTMLInputElement>document.getElementById("CanAdd")).checked = false;
        (<HTMLInputElement>document.getElementById("CanLock")).checked = false;
        (<HTMLInputElement>document.getElementById("CanUnlock")).checked = false;
        (<HTMLInputElement>document.getElementById("CanPrint")).checked = false;
        (<HTMLInputElement>document.getElementById("CanPreview")).checked = false;
        (<HTMLInputElement>document.getElementById("CanEdit")).checked = false;
        (<HTMLInputElement>document.getElementById("CanTender")).checked = false;
        (<HTMLInputElement>document.getElementById("CanDiscount")).checked = false;
        (<HTMLInputElement>document.getElementById("CanView")).checked = false;
        (<HTMLInputElement>document.getElementById("CanSplit")).checked = false;
        (<HTMLInputElement>document.getElementById("CanCancel")).checked = false;
        (<HTMLInputElement>document.getElementById("CanReturn")).checked = false;
    }

    public getUserFormList() {
        this.userFormCollectionView = new wijmo.collections.CollectionView(this.softwareUserFormService.getUserFormList(this.getIdUrlParameter()));
        this.userFormCollectionView.pageSize = 15;
    }

    public moveItemToFirstPage(): void {
        this.userFormCollectionView.moveToFirstPage();
        this.indexItem = (this.userFormCollectionView.pageIndex + 1) + " / " + this.userFormCollectionView.pageCount;
    }

    public moveItemToPreviousPage(): void {
        this.userFormCollectionView.moveToPreviousPage();
        this.indexItem = (this.userFormCollectionView.pageIndex + 1) + " / " + this.userFormCollectionView.pageCount;
    }

    public moveItemToNextPage(): void {
        this.userFormCollectionView.moveToNextPage();
        this.indexItem = (this.userFormCollectionView.pageIndex + 1) + " / " + this.userFormCollectionView.pageCount;
    }

    public moveItemToLastPage(): void {
        this.userFormCollectionView.moveToLastPage();
        this.indexItem = (this.userFormCollectionView.pageIndex + 1) + " / " + this.userFormCollectionView.pageCount;
    }

    public btnEditItem() {
        let currentSelectedItem = this.itemCollectionView.currentItem;
        this.router.navigate(['/itemdetail', currentSelectedItem.Id]);
    }
    //
    // WJMO-COMBO-BOX - TERM & ACCOUNT
    //
    public setFieldValues(): void {
        let currentItem = new wijmo.collections.CollectionView(this.softwareUserFormService.getUserFormListById(this.getIdUrlParameter()));
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

            this.listOfFormsReportsObservableArray = this.itemCollectionView.items[0].listSysForm;
            this.formsReportCollectionView = new wijmo.collections.CollectionView(this.listOfFormsReportsObservableArray);
            if (this.itemCollectionView.items.length > 0) {
                this.formsReportCollectionView.items[0].listSysForm = this.itemCollectionView.items[0].listSysForm;
            }
        }
    }
    public cboMstUserSelectedIndexChanged(): void {
        this.itemCollectionView.items[0].listMstUser[this.copyRightUserSelectedIndex].Id;
        // console.log(this.copyRightUserSelectedIndex);
    }

    public cboSysFormSelectedIndexChanged(): void {
        this.itemCollectionView.items[0].listSysForm[this.formsReportSelectedIndex].Id;
        // console.log(this.formsReportSelectedIndex);
    }


    //GET ITEM OBJECT
    public getDataUserObject() {

        let dataObject = {
            UserName: (<HTMLInputElement>document.getElementById("UserName")).value,
            Password: (<HTMLInputElement>document.getElementById("Password")).value,
            FullName: (<HTMLInputElement>document.getElementById("FullName")).value,
            UserCardNumber: (<HTMLInputElement>document.getElementById("UserCardNumber")).value,
            EntryUserId: this.itemCollectionView.items[0].EntryUserId,
            EntryDateTime: this.itemCollectionView.items[0].EntryDateTime,
            UpdateUserId: this.itemCollectionView.items[0].UpdateUserId,
            UpdateDateTime: this.itemCollectionView.items[0].UpdateDateTime,
            IsLocked: this.itemCollectionView.items[0].IsLocked = true,
            AspNetUserId: this.itemCollectionView.items[0].AspNetUserId,
            listMstUser: this.itemCollectionView.items[0].listMstUser[this.copyRightUserSelectedIndex].Id,
        }
        return dataObject;
    }


    //SAVE ITEM 
    public btnSaveEditItem() {
        let toastr: ToastsManager;
        this.softwareUserDetailService.putUserData(this.getIdUrlParameter(), this.getDataUserObject(), toastr);
        // console.log(this.getDataUserObject());
    }

    //
    // SAVE MST USER FORM AND UPDATE MST USER FORM
    //
    public getUserFormObject() {
        let dataUserFormObject = {
            FormId: this.itemCollectionView.items[0].listSysForm[this.formsReportSelectedIndex].Id,
            UserId: this.getIdUrlParameter(),
            CanDelete: (<HTMLInputElement>document.getElementById("CanDelete")).checked,
            CanAdd: (<HTMLInputElement>document.getElementById("CanAdd")).checked,
            CanLock: (<HTMLInputElement>document.getElementById("CanLock")).checked,
            CanUnlock: (<HTMLInputElement>document.getElementById("CanUnlock")).checked,
            CanPrint: (<HTMLInputElement>document.getElementById("CanPrint")).checked,
            CanPreview: (<HTMLInputElement>document.getElementById("CanPreview")).checked,
            CanEdit: (<HTMLInputElement>document.getElementById("CanEdit")).checked,
            CanTender: (<HTMLInputElement>document.getElementById("CanTender")).checked,
            CanDiscount: (<HTMLInputElement>document.getElementById("CanDiscount")).checked,
            CanView: (<HTMLInputElement>document.getElementById("CanView")).checked,
            CanSplit: (<HTMLInputElement>document.getElementById("CanSplit")).checked,
            CanCancel: (<HTMLInputElement>document.getElementById("CanCancel")).checked,
            CanReturn: (<HTMLInputElement>document.getElementById("CanReturn")).checked,
        }
        return dataUserFormObject;
    }

    public saveUserFormRight() {
        let toast: ToastsManager;

        this.userFormCollectionView = new wijmo.collections.CollectionView(this.softwareUserFormService.postUserFormData(this.getUserFormObject(), toast));
    }



    //value 
    public expiryDateChangeValue() {

    }

    public btnModalCopyRight() {
        (<HTMLButtonElement>document.getElementById("modalRights")).click()
    }


    public btnModalAddRight() {
        (<HTMLButtonElement>document.getElementById("modalAddRights")).click()
    }
    //
    //DELETE MSTUSERFORM DATA
    //
    public btnDeleteUserFormModal() {
        (<HTMLButtonElement>document.getElementById("deleteUserFormModal")).click();
    }

    public btnDeleteUserForm() {
        let toastr: ToastsManager;
        let currentSelectedItem = this.userFormCollectionView.currentItem;
        this.softwareUserFormService.deleteUserFormData(currentSelectedItem.Id, toastr);
        // (<HTMLButtonElement>document.getElementById("btn-hidden-start-loading")).click();
    }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.itemCollectionView = new wijmo.collections.CollectionView(this.softwareUserDetailService.getUserList(this.getIdUrlParameter()));
        this.getUserFormList();
    }
}