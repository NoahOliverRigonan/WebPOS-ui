import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Software_Itemdetail_Service } from '../software_itemdetail_service/software_itemdetail.service';
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'software_itemdetail',
    templateUrl: 'app/software_itemdetail/software_itemdetail_template/software_itemdetail.html'
})

export class Software_Itemdetail_Component implements OnInit {
    //COLLECTION VIEW
    private itemCollectionView: wijmo.collections.CollectionView;
    //FOR UNIT
    private listUnitObservableArray: wijmo.collections.ObservableArray;
    private unitSelectedIndex: number;
    //FOR DEFAULT SUPPLIER
    private listSupplierObservableArray: wijmo.collections.ObservableArray;
    private supplierSelectedIndex: number;
    //FOR SALES ACCOUNT
    private listSalesAccountObservableArray: wijmo.collections.ObservableArray;
    private salesAccountSelectedIndex: number;
    //FOR ASSET ACCOUNT
    private listAssetAccountObservableArray: wijmo.collections.ObservableArray;
    private assetAccountSelectedIndex: number;
    //FOR COST ACCOUNT
    private listCostAccountObservableArray: wijmo.collections.ObservableArray;
    private costAccountSelectedIndex: number;
    //FOR Puchase TAX VAT 
    private listPurchaseVatTaxObservableArray: wijmo.collections.ObservableArray;
    private purchaseVatTaxSelectedIndex: number;
    //FOR Sales TAX VAT 
    private listSalesVatTaxObservableArray: wijmo.collections.ObservableArray;
    private salesVatTaxSelectedIndex: number;
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
    private Price: number;
    private fixPrice: number;
    private ImagePath: String;
    private ReorderQuantity: number;
    private OnhandQuantity: number;
    private IsInventory: Boolean;
    private ExpiryDate: Date;
    private LotNumber: String;
    private Remarks: String;
    private EntryUserId: number;
    private EntryDateTime: Date;
    private UpdateUserId: number;
    private UpdateDateTime: Date;
    private IsLocked: Boolean;
    private DefaultKitchenReport: String;
    private IsPackage: Boolean;
    //Other Method
    private itemBoolean: Boolean = true;
    private refreshPage: Boolean = true;
    private itemId: number;
    //UNIT , SUPPLIER , ACCOUNT , TAX WIJMO COLLECTION
    private unitCollectionView: wijmo.collections.CollectionView;
    private supplierCollectionView: wijmo.collections.CollectionView;
    private salesCollectionView: wijmo.collections.CollectionView;
    private assetCollectionView: wijmo.collections.CollectionView;
    private costCollectionView: wijmo.collections.CollectionView;
    private salesVatCollectionView: wijmo.collections.CollectionView;
    private purchaseVatCollectionView: wijmo.collections.CollectionView;
    //SELECTED VALUE
    private unitSelectedValue: String;
    private supplierSelectedValue: String;
    private salesSelectedValue: String;
    private assetSelectedValue: String;
    private costSelectedValue: String;
    private salesVatSelectedValue: String;
    private purchaseVatSelectedValue: String;

    constructor(
        private router: Router,
        private softwareItemDetailService: Software_Itemdetail_Service,
        private activatedRoute: ActivatedRoute,
        // private toastr: ToastsManager
    ) { }


    // get url Id parameter
    public getIdUrlParameter() {
        this.activatedRoute.params.subscribe(params => {
            this.itemId = params['id'];
        });
        return this.itemId;
    }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.itemCollectionView = new wijmo.collections.CollectionView(this.softwareItemDetailService.getItemDetail(this.getIdUrlParameter()));
    }
    //
    // WJMO-COMBO-BOX - UNIT & SUPPLIER & TAX & ACCOUNT
    //
    public setFieldValuesUnit(): void {
        if (this.itemCollectionView.items.length > 0) {
            (<HTMLInputElement>document.getElementById("ItemCode")).value = this.itemCollectionView.items[0].ItemCode;
            (<HTMLInputElement>document.getElementById("BarCode")).value = this.itemCollectionView.items[0].BarCode;
            (<HTMLInputElement>document.getElementById("ItemDescription")).value = this.itemCollectionView.items[0].ItemDescription;
            (<HTMLInputElement>document.getElementById("Alias")).value = this.itemCollectionView.items[0].Alias;
            (<HTMLInputElement>document.getElementById("Category")).value = this.itemCollectionView.items[0].Category;
            (<HTMLInputElement>document.getElementById("Cost")).value = this.itemCollectionView.items[0].Cost.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
            (<HTMLInputElement>document.getElementById("MarkUp")).value = this.itemCollectionView.items[0].MarkUp.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
            (<HTMLInputElement>document.getElementById("Price")).value = this.itemCollectionView.items[0].Price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
            (<HTMLInputElement>document.getElementById("StockLevel")).value = this.itemCollectionView.items[0].ReorderQuantity.toFixed();
            (<HTMLInputElement>document.getElementById("OnHand")).value = this.itemCollectionView.items[0].OnhandQuantity.toFixed();
            (<HTMLInputElement>document.getElementById("Inventory")).checked = this.itemCollectionView.items[0].IsInventory;
            (<HTMLInputElement>document.getElementById("GenericName")).value = this.itemCollectionView.items[0].GenericName;
            (<HTMLInputElement>document.getElementById("Package")).checked = this.itemCollectionView.items[0].IsPackage;
            (<HTMLInputElement>document.getElementById("LotNumber")).value = this.itemCollectionView.items[0].LotNumber;
            (<HTMLInputElement>document.getElementById("Remarks")).value = this.itemCollectionView.items[0].Remarks;

            this.ExpiryDate = this.itemCollectionView.items[0].ExpiryDate;

            this.listUnitObservableArray = this.itemCollectionView.items[0].listUnit;
            this.unitCollectionView = new wijmo.collections.CollectionView(this.listUnitObservableArray);
            if (this.itemCollectionView.items.length > 0) {
                this.unitCollectionView.items[0].Unit = this.itemCollectionView.items[0].Unit;
            }

            this.listSupplierObservableArray = this.itemCollectionView.items[0].listSupplier;
            this.supplierCollectionView = new wijmo.collections.CollectionView(this.listSupplierObservableArray);
            if (this.itemCollectionView.items.length > 0) {
                this.supplierCollectionView.items[0].listSupplier = this.itemCollectionView.items[0].listSupplier;
            }


            this.listSalesAccountObservableArray = this.itemCollectionView.items[0].listSalesAccount;
            this.salesCollectionView = new wijmo.collections.CollectionView(this.listSalesAccountObservableArray);
            if (this.itemCollectionView.items.length > 0) {
                this.salesCollectionView.items[0].listSalesAccount = this.itemCollectionView.items[0].listSalesAccount;
            }


            this.listAssetAccountObservableArray = this.itemCollectionView.items[0].listAssetAccount;
            this.assetCollectionView = new wijmo.collections.CollectionView(this.listAssetAccountObservableArray);
            if (this.itemCollectionView.items.length > 0) {
                this.assetCollectionView.items[0].listAssetAccount = this.itemCollectionView.items[0].listAssetAccount;
            }

            this.listCostAccountObservableArray = this.itemCollectionView.items[0].listCostAccount;
            this.costCollectionView = new wijmo.collections.CollectionView(this.listCostAccountObservableArray)
            if (this.itemCollectionView.items.length > 0) {
                this.costCollectionView.items[0].listCostAccount = this.itemCollectionView.items[0].listCostAccount;
            }

            this.listPurchaseVatTaxObservableArray = this.itemCollectionView.items[0].listPurchaseVatTax;
            this.purchaseVatCollectionView = new wijmo.collections.CollectionView(this.listPurchaseVatTaxObservableArray);
            if (this.itemCollectionView.items.length > 0) {
                this.purchaseVatCollectionView.items[0].listPurchaseVatTax = this.itemCollectionView.items[0].listPurchaseVatTax;
            }

            this.listSalesVatTaxObservableArray = this.itemCollectionView.items[0].listSalesVatTax;
            this.salesVatCollectionView = new wijmo.collections.CollectionView(this.listSalesVatTaxObservableArray);
            if (this.itemCollectionView.items.length > 0) {
                this.salesVatCollectionView.items[0].listSalesVatTax = this.itemCollectionView.items[0].listSalesVatTax;
            }
        }
    }

    public cboUnitSelectedIndexChanged(): void {
        this.itemCollectionView.items[0].listUnit[this.unitSelectedIndex].Id;
        console.log(this.unitSelectedValue);
    }

    public cboSupplierSelectedIndexChanged(): void {
        this.itemCollectionView.items[0].listSupplier[this.supplierSelectedIndex].Id;
        console.log(this.supplierSelectedValue);
    }

    public cboSalesAccountSelectedIndexChange(): void {
        this.itemCollectionView.items[0].listSalesAccount[this.salesAccountSelectedIndex].Id;
        console.log(this.salesSelectedValue);
    }

    public cboAssetAccountSelectedIndexChange(): void {
        this.itemCollectionView.items[0].listAssetAccount[this.assetAccountSelectedIndex].Id;
        console.log(this.assetSelectedValue);
    }

    public cboCostAccountSelectedIndexChange(): void {
        this.itemCollectionView.items[0].listCostAccount[this.costAccountSelectedIndex].Id;
        console.log(this.costSelectedValue);
    }

    public cboPurchaseVatTaxSelectedIndexChange(): void {
        this.itemCollectionView.items[0].listPurchaseVatTax[this.purchaseVatTaxSelectedIndex].Id;
        console.log(this.purchaseVatSelectedValue);
    }

    public cboSalesVatTaxSelectedIndexChange(): void {
        this.itemCollectionView.items[0].listSalesVatTax[this.salesVatTaxSelectedIndex].Id;
        console.log(this.salesVatSelectedValue);
    }


    //GET ITEM OBJECT
    public getDataItemObject() {

        let dataObject = {
            ItemCode: (<HTMLInputElement>document.getElementById("ItemCode")).value,
            BarCode: (<HTMLInputElement>document.getElementById("BarCode")).value,
            ItemDescription: (<HTMLInputElement>document.getElementById("ItemDescription")).value,
            Alias: (<HTMLInputElement>document.getElementById("Alias")).value,
            GenericName: (<HTMLInputElement>document.getElementById("GenericName")).value,
            Category: (<HTMLInputElement>document.getElementById("Category")).value,
            SalesAccountId: this.itemCollectionView.items[0].listSalesAccount[this.salesAccountSelectedIndex].Id,
            AssetAccountId: this.itemCollectionView.items[0].listAssetAccount[this.assetAccountSelectedIndex].Id,
            CostAccountId: this.itemCollectionView.items[0].listCostAccount[this.costAccountSelectedIndex].Id,
            InTaxId: this.itemCollectionView.items[0].listPurchaseVatTax[this.purchaseVatTaxSelectedIndex].Id,
            OutTaxId: this.itemCollectionView.items[0].listSalesVatTax[this.salesVatTaxSelectedIndex].Id,
            UnitId: this.itemCollectionView.items[0].listUnit[this.unitSelectedIndex].Id,
            DefaultSupplierId: this.itemCollectionView.items[0].listSupplier[this.supplierSelectedIndex].Id,
            Cost: (<HTMLInputElement>document.getElementById("Cost")).value,
            MarkUp: (<HTMLInputElement>document.getElementById("MarkUp")).value,
            Price: (<HTMLInputElement>document.getElementById("Price")).value,
            ImagePath: this.itemCollectionView.items[0].ImagePath,
            ReorderQuantity: (<HTMLInputElement>document.getElementById("StockLevel")).value,
            OnhandQuantity: (<HTMLInputElement>document.getElementById("OnHand")).value,
            IsInventory: (<HTMLInputElement>document.getElementById("Inventory")).checked,
            ExpiryDate: this.ExpiryDate.toLocaleDateString(),
            LotNumber: (<HTMLInputElement>document.getElementById("LotNumber")).value,
            Remarks: (<HTMLInputElement>document.getElementById("Remarks")).value,
            EntryUserId: this.itemCollectionView.items[0].EntryUserId,
            EntryDateTime: this.itemCollectionView.items[0].EntryDateTime,
            UpdateUserId: this.itemCollectionView.items[0].UpdateUserId,
            UpdateDateTime: this.itemCollectionView.items[0].UpdateDateTime,
            IsLocked: this.itemCollectionView.items[0].IsLocked = true,
            DefaultKitchenReport: this.itemCollectionView.items[0].DefaultKitchenReport,
            IsPackage: (<HTMLInputElement>document.getElementById("Package")).checked,
            
        }
        return dataObject;
    }

    //SAVE ITEM 
    public btnSaveEditItem() {
        this.softwareItemDetailService.putItemData(this.getIdUrlParameter(), this.getDataItemObject());
        console.log(this.getDataItemObject());
    }

    //value 
    public expiryDateChangeValue() {

    }

    //SET 
    public setDateRanged() {
        this.ExpiryDate = new Date();
    }

    //DROPDOWN
    public setDropDownFields() {
        this.ExpiryDate = new Date((<HTMLInputElement>document.getElementById("ExpiryDate")).value.toString());
    }


    //LOCK FIELDS
    public LockDataItem() {
        (<HTMLButtonElement>document.getElementById("ItemCode")).disabled = true;
        (<HTMLButtonElement>document.getElementById("BarCode")).disabled = true;
        (<HTMLButtonElement>document.getElementById("ItemDescription")).disabled = true;
        (<HTMLButtonElement>document.getElementById("Alias")).disabled = true;
        (<HTMLButtonElement>document.getElementById("Category")).disabled = true;
        (<HTMLButtonElement>document.getElementById("Cost")).disabled = true;
        (<HTMLButtonElement>document.getElementById("MarkUp")).disabled = true;
        (<HTMLButtonElement>document.getElementById("Price")).disabled = true;
        (<HTMLButtonElement>document.getElementById("StockLevel")).disabled = true;
        (<HTMLButtonElement>document.getElementById("OnHand")).disabled = true;
        (<HTMLButtonElement>document.getElementById("Inventory")).disabled = true;
        (<HTMLButtonElement>document.getElementById("Package")).disabled = true;
        (<HTMLButtonElement>document.getElementById("ExpDate")).disabled = true;
        (<HTMLButtonElement>document.getElementById("LotNumber")).disabled = true;
        (<HTMLButtonElement>document.getElementById("Remarks")).disabled = true;
    }
}