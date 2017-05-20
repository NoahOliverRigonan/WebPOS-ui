import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Software_Itemdetail_Service } from '../software_itemdetail_service/software_itemdetail.service';

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
    //Item Method
    private ItemCode: String;
    private BarCode: String;
    private ItemDescription: String;
    private Alias: String;
    private Category: String;
    private Unit = this.listUnitObservableArray;
    private DefaultSupplier = this.listSupplierObservableArray;
    private Cost: number;
    private MarkUp: number;
    private Price: number;
    private StockLevel: number;
    private Onhand: number;
    private Inventory: Boolean;
    private Package: Boolean;
    private ExpDate: Date;
    private LotNumber: String;
    private Remarks: String;
    //Other Method
    private itemBoolean: Boolean = true;
    constructor(
        private router: Router,
        private softwareItemDetailService: Software_Itemdetail_Service
    ) { }


    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.itemCollectionView = new wijmo.collections.CollectionView(this.softwareItemDetailService.getItemDetail(1));
    }

    //
    // UNIT 
    //



    public setFieldValuesUnit(): void {

        this.listUnitObservableArray = this.itemCollectionView.items[0].listUnit;
        this.listSupplierObservableArray = this.itemCollectionView.items[0].listSupplier;
    }

    public cboUnitSelectedIndexChanged(): void {
        console.log(this.itemCollectionView.items[0].listUnit[this.unitSelectedIndex].Id);
    }

    public cboSupplierSelectedIndexChanged(): void {
        console.log(this.itemCollectionView.items[0].listSupplier[this.supplierSelectedIndex].Id);
    }



    //
    //ADD ITEM
    //
    public getDataItemObject() {

        let dataObject = {
            ItemCode: this.ItemCode,
            BarCode: this.BarCode,
            ItemDescription: this.ItemDescription,
            Alias: this.Alias,
            Category: this.Category,
            Unit: this.Unit,
            DefaultSupplier: this.DefaultSupplier,
            Cost: this.Cost,
            MarkUp: this.MarkUp,
            Price: this.Price,
            StockLevel: this.StockLevel,
            Onhand: this.Onhand,
            Inventory: this.Inventory,
            Package: this.Package,
            ExpDate: this.Package,
            LotNumber: this.LotNumber,
            Remarks: this.Remarks

        }


    }

    public LockDataItem() {
        (<HTMLButtonElement>document.getElementById("ItemCode")).disabled = true;
        (<HTMLButtonElement>document.getElementById("BarCode")).disabled = true;
        (<HTMLButtonElement>document.getElementById("ItemDescription")).disabled = true;
        (<HTMLButtonElement>document.getElementById("Alias")).disabled = true;
        (<HTMLButtonElement>document.getElementById("Category")).disabled = true;
        (<HTMLButtonElement>document.getElementById("Unit")).disabled = true;
        (<HTMLButtonElement>document.getElementById("DefaultSupplier")).disabled = true;
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