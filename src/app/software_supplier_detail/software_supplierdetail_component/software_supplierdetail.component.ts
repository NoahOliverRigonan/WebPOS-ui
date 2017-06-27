import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Software_SupplierDetail_Service } from '../software_supplierdetail_service/software_supplierdetail.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'software_supplierdetail',
    templateUrl: 'app/software_supplier_detail/software_supplierdetail_template/software_supplierdetail.html'
})

export class Software_SupplierDetail_Component implements OnInit {
    //COLLECTION VIEW
    private itemCollectionView: wijmo.collections.CollectionView;
    //FOR SUPPLIER TERM
    private listSupplierTermObservableArray: wijmo.collections.ObservableArray;
    private supplierTermSelectedIndex: number;
    //FOR SUPPLIER ACCOUNT
    private listSupplierAccountObservableArray: wijmo.collections.ObservableArray;
    private supplierAccountSelectedIndex: number;

    //Item Method
    private ItemCode: String;
    private BarCode: String;
    private ItemDescription: String;
    private Alias: String;
    private GenericName: String;
    private Category: String;
    private SalesAccountId: number;
    private AssetAccountId: number;
    private CostAccountId: number;
    private InTaxId: number;
    private OutTaxId: number;
    private UnitId: number;
    private DefaultSupplierId: number;
    private Cost: number;
    private MarkUp: number;
    //Other Method
    private supplierBoolean: Boolean = true;
    private refreshPage: Boolean = true;
    private supplierId: number;
    //Term  , ACCOUNT  WIJMO COLLECTION
    private supplierTermCollectionView: wijmo.collections.CollectionView;
    private supplierAccountCollectionView: wijmo.collections.CollectionView;
    //SELECTED VALUE
    private termSelectedValue: String;
    private accountSelectedValue: String;

    constructor(
        private router: Router,
        private softwareSupplierDetailService: Software_SupplierDetail_Service,
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
            (<HTMLInputElement>document.getElementById("Supplier")).value = this.itemCollectionView.items[0].Supplier;
            (<HTMLInputElement>document.getElementById("Address")).value = this.itemCollectionView.items[0].Address;
            (<HTMLInputElement>document.getElementById("TelephoneNumber")).value = this.itemCollectionView.items[0].TelephoneNumber;
            (<HTMLInputElement>document.getElementById("CellphoneNumber")).value = this.itemCollectionView.items[0].CellphoneNumber;
            (<HTMLInputElement>document.getElementById("FaxNumber")).value = this.itemCollectionView.items[0].FaxNumber;
            (<HTMLInputElement>document.getElementById("TIN")).checked = this.itemCollectionView.items[0].TIN;


            this.listSupplierAccountObservableArray = this.itemCollectionView.items[0].listAccount;
            this.supplierAccountCollectionView = new wijmo.collections.CollectionView(this.listSupplierAccountObservableArray);
            if (this.itemCollectionView.items.length > 0) {
                this.supplierAccountCollectionView.items[0].listAccount = this.itemCollectionView.items[0].listAccount;
            }


            this.listSupplierTermObservableArray = this.itemCollectionView.items[0].listTerm;
            this.supplierTermCollectionView = new wijmo.collections.CollectionView(this.listSupplierTermObservableArray);
            if (this.itemCollectionView.items.length > 0) {
                this.supplierTermCollectionView.items[0].listTerm = this.itemCollectionView.items[0].listTerm;
            }


        }
    }

    public cboTermSelectedIndexChanged(): void {
        this.itemCollectionView.items[0].listTerm[this.supplierTermSelectedIndex].Id;
        console.log(this.supplierTermSelectedIndex);
    }

    public cboAccountSelectedIndexChanged(): void {
        this.itemCollectionView.items[0].listAccount[this.supplierAccountSelectedIndex].Id;
        console.log(this.supplierAccountSelectedIndex);
    }




    //GET ITEM OBJECT
    public getDataSupplierObject() {

        let dataObject = {
            Supplier: (<HTMLInputElement>document.getElementById("Supplier")).value,
            Address: (<HTMLInputElement>document.getElementById("Address")).value,
            TelephoneNumber: (<HTMLInputElement>document.getElementById("TelephoneNumber")).value,
            CellphoneNumber: (<HTMLInputElement>document.getElementById("CellphoneNumber")).value,
            FaxNumber: (<HTMLInputElement>document.getElementById("FaxNumber")).value,
            TermId: this.itemCollectionView.items[0].TermId,
            TIN: (<HTMLInputElement>document.getElementById("TIN")).checked,
            AccountId: this.itemCollectionView.items[0].AccountId,
            EntryUserId: this.itemCollectionView.items[0].EntryUserId,
            EntryDateTime: this.itemCollectionView.items[0].EntryDateTime,
            UpdateUserId: this.itemCollectionView.items[0].UpdateUserId,
            UpdateDateTime: this.itemCollectionView.items[0].UpdateDateTime,
            IsLocked: this.itemCollectionView.items[0].IsLocked = true,
            listAccount: this.itemCollectionView.items[0].listAccount[this.supplierAccountSelectedIndex].Id,
            listTerm: this.itemCollectionView.items[0].listTerm[this.supplierTermSelectedIndex].Id,

        }
        return dataObject;
    }

    //SAVE ITEM 
    public btnSaveEditItem() {
        let toastr: ToastsManager;
        this.softwareSupplierDetailService.putSupplierData(this.getIdUrlParameter(), this.getDataSupplierObject(), toastr);
        console.log(this.getDataSupplierObject());
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
        this.itemCollectionView = new wijmo.collections.CollectionView(this.softwareSupplierDetailService.getSupplierList(this.getIdUrlParameter()));
    }

}