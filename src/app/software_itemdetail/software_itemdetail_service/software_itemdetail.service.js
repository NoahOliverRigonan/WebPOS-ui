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
var http_1 = require("@angular/http");
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';
var Software_Itemdetail_Service = (function () {
    function Software_Itemdetail_Service(router, http) {
        this.router = router;
        this.http = http;
        //  Global Variables
        this.headers = new http_1.Headers({
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            'Content-Type': 'application/json'
        });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    // UPLOAD IMAGE
    // public getUnittById(unitId: number) {
    //     let url = "http://localhost:2558/api/item/list/1" + unitId;
    //     this.http.get(url, this.options).subscribe(
    //         response => {
    //             if (response.json() != null) {
    //                 (<HTMLInputElement>document.getElementById("unitSelectedValue")).value = response.json().listUnit;
    //                 document.getElementById("btn-hidden-selectedValue-data").click();
    //                 document.getElementById("btn-hidden-complete-loading").click();
    //             } else {
    //                 alert("No Data");
    //                 this.router.navigate(["/itemDetail"]);
    //             }
    //         }
    //     );
    // }
    //GET ITEM UNIT
    Software_Itemdetail_Service.prototype.getItemDetail = function (Id) {
        var itemObservableArray = new wijmo.collections.ObservableArray();
        var url = "http://localhost:2558/api/item/list/" + Id;
        this.http.get(url, this.options).subscribe(function (response) {
            var results = response.json();
            if (results.length > 0) {
                itemObservableArray.push({
                    Id: results[0].Id,
                    ItemCode: results[0].ItemCode,
                    BarCode: results[0].BarCode,
                    ItemDescription: results[0].ItemDescription,
                    Alias: results[0].Alias,
                    GenericName: results[0].GenericName,
                    Category: results[0].Category,
                    SalesAccountId: results[0].SalesAccountId,
                    AssetAccountId: results[0].AssetAccountId,
                    CostAccountId: results[0].CostAccountId,
                    Account: results[0].Account,
                    InTaxId: results[0].InTaxId,
                    OutTaxId: results[0].OutTaxId,
                    UnitId: results[0].UnitId,
                    Unit: results[0].Unit,
                    DefaultSupplierId: results[0].DefaultSupplierId,
                    DefaultSupplier: results[0].DefaultSupplier,
                    Cost: results[0].Cost,
                    MarkUp: results[0].MarkUp,
                    Price: results[0].Price,
                    ImagePath: results[0].ImagePath,
                    ReorderQuantity: results[0].ReorderQuantity,
                    OnhandQuantity: results[0].OnhandQuantity,
                    IsInventory: results[0].IsInventory,
                    ExpiryDate: results[0].ExpiryDate,
                    LotNumber: results[0].LotNumber,
                    Remarks: results[0].Remarks,
                    EntryUserId: results[0].EntryUserId,
                    EntryDateTime: results[0].EntryDateTime,
                    UpdateUserId: results[0].UpdateUserId,
                    UpdateDateTime: results[0].UpdateDateTime,
                    IsLocked: results[0].IsLocked,
                    DefaultKitchenReport: results[0].DefaultKitchenReport,
                    IsPackage: results[0].IsPackage,
                    listUnit: results[0].listUnit,
                    listSupplier: results[0].listSupplier,
                    listSalesAccount: results[0].listSalesAccount,
                    listAssetAccount: results[0].listAssetAccount,
                    listCostAccount: results[0].listCostAccount,
                    listPurchaseVatTax: results[0].listPurchaseVatTax,
                    listSalesVatTax: results[0].listSalesVatTax
                });
                document.getElementById("set-value-fields").click();
            }
            else {
                console.log("No data");
            }
        });
        return itemObservableArray;
    };
    //http://localhost:2558/api/item/post
    //ADD ITEM
    // toastr: ToastsManager
    // update ITEM
    Software_Itemdetail_Service.prototype.putItemData = function (id, itemObject) {
        var url = "http://localhost:2558/api/item/put/" + id;
        this.http.put(url, JSON.stringify(itemObject), this.options).subscribe(function (response) {
            console.log('', 'Save Successful');
        }, function (error) {
            alert("Error");
        });
    };
    return Software_Itemdetail_Service;
}());
Software_Itemdetail_Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http])
], Software_Itemdetail_Service);
exports.Software_Itemdetail_Service = Software_Itemdetail_Service;
//# sourceMappingURL=software_itemdetail.service.js.map