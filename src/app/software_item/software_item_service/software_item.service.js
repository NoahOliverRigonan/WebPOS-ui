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
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
var Software_Item_Service = (function () {
    function Software_Item_Service(router, http, toastr, slimLoadingBarService) {
        this.router = router;
        this.http = http;
        this.toastr = toastr;
        this.slimLoadingBarService = slimLoadingBarService;
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
        var url = "http://localhost:2558/api/item/list";
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
                    });
                }
            }
        });
        return itemObsevableArray;
    };
    Software_Item_Service.prototype.startLoading = function () {
        this.slimLoadingBarService.progress = 30;
        this.slimLoadingBarService.start();
    };
    // delete ITEM
    Software_Item_Service.prototype.deleteItem = function (id, toastr) {
        var _this = this;
        var url = "http://localhost:2558/api/item/delete/" + id;
        this.http.delete(url, this.options).subscribe(function (response) {
            _this.startLoading();
            _this.toastr.info('', 'Successfully Deleted');
            setTimeout(function () {
                document.getElementById("refreshGrid").click();
            }, 1000);
        }, function (error) {
            _this.toastr.error(' ', 'Bad Request');
        });
    };
    Software_Item_Service.prototype.postItemData = function (itemObject, toastr) {
        var _this = this;
        var url = "http://localhost:2558/api/item/post";
        this.http.post(url, JSON.stringify(itemObject), this.options).subscribe(function (response) {
            var results = response.json();
            if (results > 0) {
                _this.router.navigate(['/itemdetail', results]);
            }
            else {
                _this.toastr.error('', 'Bad Request');
            }
        }, function (error) {
            _this.toastr.error('', 'Bad Request');
        });
    };
    return Software_Item_Service;
}());
Software_Item_Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http,
        ng2_toastr_1.ToastsManager,
        ng2_slim_loading_bar_1.SlimLoadingBarService])
], Software_Item_Service);
exports.Software_Item_Service = Software_Item_Service;
//# sourceMappingURL=software_item.service.js.map