"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var software_itemdetail_service_1 = require("../software_itemdetail_service/software_itemdetail.service");
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';
var Software_Itemdetail_Component = (function () {
    function Software_Itemdetail_Component(router, softwareItemDetailService, activatedRoute) {
        this.router = router;
        this.softwareItemDetailService = softwareItemDetailService;
        this.activatedRoute = activatedRoute;
        //Other Method
        this.itemBoolean = true;
        this.refreshPage = true;
    }
    // get url Id parameter
    Software_Itemdetail_Component.prototype.getIdUrlParameter = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.itemId = params['id'];
        });
        return this.itemId;
    };
    Software_Itemdetail_Component.prototype.ngOnInit = function () {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.itemCollectionView = new wijmo.collections.CollectionView(this.softwareItemDetailService.getItemDetail(this.getIdUrlParameter()));
    };
    //
    // WJMO-COMBO-BOX - UNIT & SUPPLIER & TAX & ACCOUNT
    //
    Software_Itemdetail_Component.prototype.setFieldValuesUnit = function () {
        if (this.itemCollectionView.items.length > 0) {
            document.getElementById("ItemCode").value = this.itemCollectionView.items[0].ItemCode;
            document.getElementById("BarCode").value = this.itemCollectionView.items[0].BarCode;
            document.getElementById("ItemDescription").value = this.itemCollectionView.items[0].ItemDescription;
            document.getElementById("Alias").value = this.itemCollectionView.items[0].Alias;
            document.getElementById("Category").value = this.itemCollectionView.items[0].Category;
            document.getElementById("Cost").value = this.itemCollectionView.items[0].Cost.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
            document.getElementById("MarkUp").value = this.itemCollectionView.items[0].MarkUp.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
            document.getElementById("Price").value = this.itemCollectionView.items[0].Price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
            document.getElementById("StockLevel").value = this.itemCollectionView.items[0].ReorderQuantity.toFixed();
            document.getElementById("OnHand").value = this.itemCollectionView.items[0].OnhandQuantity.toFixed();
            document.getElementById("Inventory").checked = this.itemCollectionView.items[0].IsInventory;
            document.getElementById("GenericName").value = this.itemCollectionView.items[0].GenericName;
            document.getElementById("Package").checked = this.itemCollectionView.items[0].IsPackage;
            document.getElementById("LotNumber").value = this.itemCollectionView.items[0].LotNumber;
            document.getElementById("Remarks").value = this.itemCollectionView.items[0].Remarks;
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
            this.costCollectionView = new wijmo.collections.CollectionView(this.listCostAccountObservableArray);
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
    };
    Software_Itemdetail_Component.prototype.cboUnitSelectedIndexChanged = function () {
        this.itemCollectionView.items[0].listUnit[this.unitSelectedIndex].Id;
        console.log(this.unitSelectedValue);
    };
    Software_Itemdetail_Component.prototype.cboSupplierSelectedIndexChanged = function () {
        this.itemCollectionView.items[0].listSupplier[this.supplierSelectedIndex].Id;
        console.log(this.supplierSelectedValue);
    };
    Software_Itemdetail_Component.prototype.cboSalesAccountSelectedIndexChange = function () {
        this.itemCollectionView.items[0].listSalesAccount[this.salesAccountSelectedIndex].Id;
        console.log(this.salesSelectedValue);
    };
    Software_Itemdetail_Component.prototype.cboAssetAccountSelectedIndexChange = function () {
        this.itemCollectionView.items[0].listAssetAccount[this.assetAccountSelectedIndex].Id;
        console.log(this.assetSelectedValue);
    };
    Software_Itemdetail_Component.prototype.cboCostAccountSelectedIndexChange = function () {
        this.itemCollectionView.items[0].listCostAccount[this.costAccountSelectedIndex].Id;
        console.log(this.costSelectedValue);
    };
    Software_Itemdetail_Component.prototype.cboPurchaseVatTaxSelectedIndexChange = function () {
        this.itemCollectionView.items[0].listPurchaseVatTax[this.purchaseVatTaxSelectedIndex].Id;
        console.log(this.purchaseVatSelectedValue);
    };
    Software_Itemdetail_Component.prototype.cboSalesVatTaxSelectedIndexChange = function () {
        this.itemCollectionView.items[0].listSalesVatTax[this.salesVatTaxSelectedIndex].Id;
        console.log(this.salesVatSelectedValue);
    };
    //GET ITEM OBJECT
    Software_Itemdetail_Component.prototype.getDataItemObject = function () {
        var dataObject = {
            ItemCode: document.getElementById("ItemCode").value,
            BarCode: document.getElementById("BarCode").value,
            ItemDescription: document.getElementById("ItemDescription").value,
            Alias: document.getElementById("Alias").value,
            GenericName: document.getElementById("GenericName").value,
            Category: document.getElementById("Category").value,
            SalesAccountId: this.itemCollectionView.items[0].listSalesAccount[this.salesAccountSelectedIndex].Id,
            AssetAccountId: this.itemCollectionView.items[0].listAssetAccount[this.assetAccountSelectedIndex].Id,
            CostAccountId: this.itemCollectionView.items[0].listCostAccount[this.costAccountSelectedIndex].Id,
            InTaxId: this.itemCollectionView.items[0].listPurchaseVatTax[this.purchaseVatTaxSelectedIndex].Id,
            OutTaxId: this.itemCollectionView.items[0].listSalesVatTax[this.salesVatTaxSelectedIndex].Id,
            UnitId: this.itemCollectionView.items[0].listUnit[this.unitSelectedIndex].Id,
            DefaultSupplierId: this.itemCollectionView.items[0].listSupplier[this.supplierSelectedIndex].Id,
            Cost: document.getElementById("Cost").value,
            MarkUp: document.getElementById("MarkUp").value,
            Price: document.getElementById("Price").value,
            ImagePath: this.itemCollectionView.items[0].ImagePath,
            ReorderQuantity: document.getElementById("StockLevel").value,
            OnhandQuantity: document.getElementById("OnHand").value,
            IsInventory: document.getElementById("Inventory").checked,
            ExpiryDate: this.ExpiryDate.toLocaleDateString(),
            LotNumber: document.getElementById("LotNumber").value,
            Remarks: document.getElementById("Remarks").value,
            EntryUserId: this.itemCollectionView.items[0].EntryUserId,
            EntryDateTime: this.itemCollectionView.items[0].EntryDateTime,
            UpdateUserId: this.itemCollectionView.items[0].UpdateUserId,
            UpdateDateTime: this.itemCollectionView.items[0].UpdateDateTime,
            IsLocked: this.itemCollectionView.items[0].IsLocked = true,
            DefaultKitchenReport: this.itemCollectionView.items[0].DefaultKitchenReport,
            IsPackage: document.getElementById("Package").checked,
        };
        return dataObject;
    };
    //SAVE ITEM 
    Software_Itemdetail_Component.prototype.btnSaveEditItem = function () {
        this.softwareItemDetailService.putItemData(this.getIdUrlParameter(), this.getDataItemObject());
        console.log(this.getDataItemObject());
    };
    //value 
    Software_Itemdetail_Component.prototype.expiryDateChangeValue = function () {
    };
    //SET 
    Software_Itemdetail_Component.prototype.setDateRanged = function () {
        this.ExpiryDate = new Date();
    };
    //DROPDOWN
    Software_Itemdetail_Component.prototype.setDropDownFields = function () {
        this.ExpiryDate = new Date(document.getElementById("ExpiryDate").value.toString());
    };
    //LOCK FIELDS
    Software_Itemdetail_Component.prototype.LockDataItem = function () {
        document.getElementById("ItemCode").disabled = true;
        document.getElementById("BarCode").disabled = true;
        document.getElementById("ItemDescription").disabled = true;
        document.getElementById("Alias").disabled = true;
        document.getElementById("Category").disabled = true;
        document.getElementById("Cost").disabled = true;
        document.getElementById("MarkUp").disabled = true;
        document.getElementById("Price").disabled = true;
        document.getElementById("StockLevel").disabled = true;
        document.getElementById("OnHand").disabled = true;
        document.getElementById("Inventory").disabled = true;
        document.getElementById("Package").disabled = true;
        document.getElementById("ExpDate").disabled = true;
        document.getElementById("LotNumber").disabled = true;
        document.getElementById("Remarks").disabled = true;
    };
    return Software_Itemdetail_Component;
}());
Software_Itemdetail_Component = __decorate([
    core_1.Component({
        selector: 'software_itemdetail',
        templateUrl: 'app/software_itemdetail/software_itemdetail_template/software_itemdetail.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        software_itemdetail_service_1.Software_Itemdetail_Service,
        router_1.ActivatedRoute])
], Software_Itemdetail_Component);
exports.Software_Itemdetail_Component = Software_Itemdetail_Component;
//# sourceMappingURL=software_itemdetail.component.js.map