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
var Software_ItemComponent_Service = (function () {
    function Software_ItemComponent_Service(router, http, toastr, slimLoadingBarService) {
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
    Software_ItemComponent_Service.prototype.getListOfItem = function () {
        var itemObsevableArray = new wijmo.collections.ObservableArray();
        var url = "http://localhost:2558/api/itemComponent/list";
        this.http.get(url, this.options).subscribe(function (response) {
            var results = response.json();
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    itemObsevableArray.push({
                        Id: results[i].Id,
                        ItemId: results[i].ItemId,
                        Item: results[i].Item,
                        ComponentItemId: results[i].ComponentItemId,
                        UnitId: results[i].UnitId,
                        Quantity: results[i].Quantity,
                        Cost: results[i].Cost,
                        Amount: results[i].Amount,
                        IsPrinted: results[i].IsPrinted,
                    });
                }
            }
        });
        return itemObsevableArray;
    };
    return Software_ItemComponent_Service;
}());
Software_ItemComponent_Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http,
        ng2_toastr_1.ToastsManager,
        ng2_slim_loading_bar_1.SlimLoadingBarService])
], Software_ItemComponent_Service);
exports.Software_ItemComponent_Service = Software_ItemComponent_Service;
//# sourceMappingURL=software_itemcomponent.service.js.map