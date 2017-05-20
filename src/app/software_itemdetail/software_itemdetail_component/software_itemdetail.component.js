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
var Software_Itemdetail_Component = (function () {
    function Software_Itemdetail_Component(router, softwareItemDetailService) {
        this.router = router;
        this.softwareItemDetailService = softwareItemDetailService;
        this.Unit = this.listUnitObservableArray;
        this.DefaultSupplier = this.listSupplierObservableArray;
        //Other Method
        this.itemBoolean = true;
    }
    Software_Itemdetail_Component.prototype.ngOnInit = function () {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.itemCollectionView = new wijmo.collections.CollectionView(this.softwareItemDetailService.getItemDetail(1));
    };
    //
    // UNIT 
    //
    Software_Itemdetail_Component.prototype.setFieldValuesUnit = function () {
        this.listUnitObservableArray = this.itemCollectionView.items[0].listUnit;
        this.listSupplierObservableArray = this.itemCollectionView.items[0].listSupplier;
    };
    Software_Itemdetail_Component.prototype.cboUnitSelectedIndexChanged = function () {
        console.log(this.itemCollectionView.items[0].listUnit[this.unitSelectedIndex].Id);
    };
    Software_Itemdetail_Component.prototype.cboSupplierSelectedIndexChanged = function () {
        console.log(this.itemCollectionView.items[0].listSupplier[this.supplierSelectedIndex].Id);
    };
    //
    //ADD ITEM
    //
    Software_Itemdetail_Component.prototype.getDataItemObject = function () {
        var dataObject = {
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
        };
    };
    Software_Itemdetail_Component.prototype.LockDataItem = function () {
        document.getElementById("ItemCode").disabled = true;
        document.getElementById("BarCode").disabled = true;
        document.getElementById("ItemDescription").disabled = true;
        document.getElementById("Alias").disabled = true;
        document.getElementById("Category").disabled = true;
        document.getElementById("Unit").disabled = true;
        document.getElementById("DefaultSupplier").disabled = true;
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
        software_itemdetail_service_1.Software_Itemdetail_Service])
], Software_Itemdetail_Component);
exports.Software_Itemdetail_Component = Software_Itemdetail_Component;
//# sourceMappingURL=software_itemdetail.component.js.map