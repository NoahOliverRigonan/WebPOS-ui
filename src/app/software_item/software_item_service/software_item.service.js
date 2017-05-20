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
var Software_Item_Service = (function () {
    function Software_Item_Service(router, http) {
        this.router = router;
        this.http = http;
        //  Global Variables
        this.headers = new http_1.Headers({
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            'Content-Type': 'application/json'
        });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    //MSTTABLE
    Software_Item_Service.prototype.getListOfItem = function () {
        var itemObsevableArray = new wijmo.collections.ObservableArray();
        var url = "http://localhost:2558/api/item/list/1";
        this.http.get(url, this.options).subscribe(function (response) {
            var results = response.json();
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    itemObsevableArray.push({
                        Id: results[i].Id,
                        ItemCode: results[i].ItemCode,
                        BarCode: results[i].BarCode,
                        ItemDescription: results[i].ItemDescription,
                        Alias: results[i].Alias,
                        GenericName: results[i].GenericName,
                        Category: results[i].Category,
                        SalesAccountId: results[i].SalesAccountId,
                        AssetAccountId: results[i].AssetAccountId,
                        CostAccountId: results[i].CostAccountId,
                        InTaxId: results[i].InTaxId,
                        OutTaxId: results[i].OutTaxId,
                        UnitId: results[i].UnitId,
                        Unit: results[i].Unit,
                        DefaultSupplierId: results[i].DefaultSupplierId,
                        Cost: results[i].Cost,
                        MarkUp: results[i].MarkUp,
                        Price: results[i].Price,
                        ImagePath: results[i].ImagePath,
                        ReorderQuantity: results[i].ReorderQuantity,
                        OnhandQuantity: results[i].OnhandQuantity,
                        IsInventory: results[i].IsInventory,
                        ExpiryDate: results[i].ExpiryDate,
                        LotNumber: results[i].LotNumber,
                        Remarks: results[i].Remarks,
                        EntryUserId: results[i].EntryUserId,
                        EntryDateTime: results[i].EntryDateTime,
                        UpdateUserId: results[i].UpdateUserId,
                        UpdateDateTime: results[i].UpdateDateTime,
                        IsLocked: results[i].IsLocked,
                        DefaultKitchenReport: results[i].DefaultKitchenReport,
                        IsPackage: results[i].IsPackage,
                        listUnit: results[i].listUnit.Unit,
                    });
                    for (var j = 0; j < results[i].listUnit.length; j++) {
                        console.log(results[i].listUnit[j].Unit + " - " + (j + 1));
                    }
                }
            }
        });
        return itemObsevableArray;
    };
    return Software_Item_Service;
}());
Software_Item_Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http])
], Software_Item_Service);
exports.Software_Item_Service = Software_Item_Service;
//# sourceMappingURL=software_item.service.js.map