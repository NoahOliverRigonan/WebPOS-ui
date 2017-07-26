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
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var Software_Itemdetail_Service = (function () {
    function Software_Itemdetail_Service(router, http, toastr, activateroute) {
        this.router = router;
        this.http = http;
        this.toastr = toastr;
        this.activateroute = activateroute;
        //  Global Variables
        this.headers = new http_1.Headers({
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            'Content-Type': 'application/json'
        });
        this.options = new http_1.RequestOptions({ headers: this.headers });
        // this.toastr.setRootViewContainerRef(vcRef);
    }
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
    Software_Itemdetail_Service.prototype.putItemData = function (id, itemObject, toastr) {
        var _this = this;
        var url = "http://localhost:2558/api/item/put/" + id;
        this.http.put(url, JSON.stringify(itemObject), this.options).subscribe(function (response) {
            _this.toastr.success('', 'Successful');
            setTimeout(function () {
                _this.router.navigate(['/item']);
            }, 1000);
        }, function (error) {
            alert("Error");
        });
    };
    return Software_Itemdetail_Service;
}());
Software_Itemdetail_Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http,
        ng2_toastr_1.ToastsManager,
        router_1.ActivatedRoute])
], Software_Itemdetail_Service);
exports.Software_Itemdetail_Service = Software_Itemdetail_Service;
var Software_ItemPrice_Service = (function () {
    function Software_ItemPrice_Service(router, http, toastr, activateroute) {
        this.router = router;
        this.http = http;
        this.toastr = toastr;
        this.activateroute = activateroute;
        //  Global Variables
        this.headers = new http_1.Headers({
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            'Content-Type': 'application/json'
        });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    //GET USER FORM
    Software_ItemPrice_Service.prototype.getItemPriceById = function (itemPriceId) {
        var itemPriceObservableArray = new wijmo.collections.ObservableArray();
        var url = "http://localhost:2558/api/itemPrice/get/" + itemPriceId;
        this.http.get(url, this.options).subscribe(function (response) {
            var results = response.json();
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    itemPriceObservableArray.push({
                        Id: results[i].Id,
                        ItemId: results[i].ItemId,
                        PriceDescription: results[i].PriceDescription,
                        Price: results[i].Price,
                        TriggerQuantity: results[i].TriggerQuantity,
                    });
                }
            }
        });
        return itemPriceObservableArray;
    };
    Software_ItemPrice_Service.prototype.postItemPrice = function (itemPriceObject, toastr) {
        var _this = this;
        var url = "http://localhost:2558/api/itemPrice/post";
        this.http.post(url, JSON.stringify(itemPriceObject), this.options).subscribe(function (response) {
            _this.toastr.success('', 'Success');
            document.getElementById('refreshGrid').click();
            document.getElementById('clear-fields').click();
        }, function (error) {
            _this.toastr.error('', 'Bad Request');
        });
    };
    Software_ItemPrice_Service.prototype.deleteItemPrice = function (id, toastr) {
        var _this = this;
        var url = "http://localhost:2558/api/itemPrice/delete/" + id;
        this.http.delete(url, this.options).subscribe(function (response) {
            _this.toastr.info('', 'Successfully Deleted');
            setTimeout(function () {
                document.getElementById("refreshGrid").click();
            }, 1000);
        }, function (error) {
            _this.toastr.error(' ', 'Bad Request');
        });
    };
    return Software_ItemPrice_Service;
}());
Software_ItemPrice_Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http,
        ng2_toastr_1.ToastsManager,
        router_1.ActivatedRoute])
], Software_ItemPrice_Service);
exports.Software_ItemPrice_Service = Software_ItemPrice_Service;
//# sourceMappingURL=software_itemdetail.service.js.map