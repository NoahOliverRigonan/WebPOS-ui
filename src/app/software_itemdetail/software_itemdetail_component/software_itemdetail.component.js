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
var software_itemdetail_service_2 = require("../software_itemdetail_service/software_itemdetail.service");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var Software_Itemdetail_Component = (function () {
    function Software_Itemdetail_Component(router, softwareItemDetailService, softwareItemPriceService, activatedRoute, toastr, vcRef) {
        this.router = router;
        this.softwareItemDetailService = softwareItemDetailService;
        this.softwareItemPriceService = softwareItemPriceService;
        this.activatedRoute = activatedRoute;
        this.toastr = toastr;
        this.vcRef = vcRef;
        //Other Method
        this.itemBoolean = true;
        this.refreshPage = true;
        this.toastr.setRootViewContainerRef(vcRef);
    }
    // get url Id parameter
    Software_Itemdetail_Component.prototype.getIdUrlParameter = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.itemId = params['id'];
        });
        return this.itemId;
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
            this.unitCollectionView.items[0].listUnit = this.itemCollectionView.items[0].listUnit;
            this.listSupplierObservableArray = this.itemCollectionView.items[0].listSupplier;
            this.supplierCollectionView = new wijmo.collections.CollectionView(this.listSupplierObservableArray);
            this.supplierCollectionView.items[0].listSupplier = this.itemCollectionView.items[0].listSupplier;
            this.listSalesAccountObservableArray = this.itemCollectionView.items[0].listSalesAccount;
            this.salesCollectionView = new wijmo.collections.CollectionView(this.listSalesAccountObservableArray);
            this.salesCollectionView.items[0].listSalesAccount = this.itemCollectionView.items[0].listSalesAccount;
            this.listAssetAccountObservableArray = this.itemCollectionView.items[0].listAssetAccount;
            this.assetCollectionView = new wijmo.collections.CollectionView(this.listAssetAccountObservableArray);
            this.assetCollectionView.items[0].listAssetAccount = this.itemCollectionView.items[0].listAssetAccount;
            this.listCostAccountObservableArray = this.itemCollectionView.items[0].listCostAccount;
            this.costCollectionView = new wijmo.collections.CollectionView(this.listCostAccountObservableArray);
            this.costCollectionView.items[0].listCostAccount = this.itemCollectionView.items[0].listCostAccount;
            this.listPurchaseVatTaxObservableArray = this.itemCollectionView.items[0].listPurchaseVatTax;
            this.purchaseVatCollectionView = new wijmo.collections.CollectionView(this.listPurchaseVatTaxObservableArray);
            this.purchaseVatCollectionView.items[0].listPurchaseVatTax = this.itemCollectionView.items[0].listPurchaseVatTax;
            this.listSalesVatTaxObservableArray = this.itemCollectionView.items[0].listSalesVatTax;
            this.salesVatCollectionView = new wijmo.collections.CollectionView(this.listSalesVatTaxObservableArray);
            this.salesVatCollectionView.items[0].listSalesVatTax = this.itemCollectionView.items[0].listSalesVatTax;
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
        var toastr;
        this.softwareItemDetailService.putItemData(this.getIdUrlParameter(), this.getDataItemObject(), toastr);
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
    //
    // FOR MST ITEM PRICE 
    //
    Software_Itemdetail_Component.prototype.ClearAfterSave = function () {
        document.getElementById("PriceDescripton").value = "";
        document.getElementById("ItemPrice").value = " ";
        document.getElementById("TriggerQuantity").value = " ";
    };
    Software_Itemdetail_Component.prototype.createItemPriceObject = function () {
        var dataObject = {
            ItemId: this.getIdUrlParameter(),
            PriceDescripton: document.getElementById("PriceDescription").value = "",
            Price: document.getElementById("ItemPrice").value,
            TriggerQuantity: document.getElementById("TriggerQuantity").value,
        };
        return dataObject;
    };
    Software_Itemdetail_Component.prototype.getItemPrice = function () {
        this.itemPriceCollectionView = new wijmo.collections.CollectionView(this.softwareItemPriceService.getItemPriceById(this.getIdUrlParameter()));
        this.itemPriceCollectionView.pageSize = 15;
    };
    Software_Itemdetail_Component.prototype.btnModalItemPrice = function () {
        document.getElementById("modalStockInLine").click();
    };
    Software_Itemdetail_Component.prototype.addItemPrice = function () {
        var toast;
        this.itemPriceCollectionView = new wijmo.collections.CollectionView(this.softwareItemPriceService.postItemPrice(this.createItemPriceObject(), toast));
    };
    Software_Itemdetail_Component.prototype.btnDeleteItemPriceModal = function () {
        document.getElementById("deleteItemPriceModal").click();
    };
    Software_Itemdetail_Component.prototype.btnDeleteItemPrice = function () {
        var toastr;
        var currentSelectedItem = this.itemPriceCollectionView.currentItem;
        this.softwareItemPriceService.deleteItemPrice(currentSelectedItem.Id, toastr);
        // (<HTMLButtonElement>document.getElementById("btn-hidden-start-loading")).click();
    };
    Software_Itemdetail_Component.prototype.ngOnInit = function () {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.itemCollectionView = new wijmo.collections.CollectionView(this.softwareItemDetailService.getItemDetail(this.getIdUrlParameter()));
        this.getItemPrice();
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
        software_itemdetail_service_2.Software_ItemPrice_Service,
        router_1.ActivatedRoute,
        ng2_toastr_1.ToastsManager,
        core_1.ViewContainerRef])
], Software_Itemdetail_Component);
exports.Software_Itemdetail_Component = Software_Itemdetail_Component;
//# sourceMappingURL=software_itemdetail.component.js.map