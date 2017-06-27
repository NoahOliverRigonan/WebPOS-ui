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
var Software_ItemGroup_Service = (function () {
    function Software_ItemGroup_Service(router, http, toastr, slimLoadingBarService) {
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
    Software_ItemGroup_Service.prototype.getListOfItem = function () {
        var itemObsevableArray = new wijmo.collections.ObservableArray();
        var url = "http://localhost:2558/api/itemGroup/list";
        this.http.get(url, this.options).subscribe(function (response) {
            var results = response.json();
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    itemObsevableArray.push({
                        Id: results[i].Id,
                        ItemGroup: results[i].ItemGroup,
                        ImagePath: results[i].ImagePath,
                        KitchenReport: results[i].KitchenReport,
                        EntryUserId: results[i].EntryUserId,
                        EntryDateTime: results[i].EntryDateTime,
                        UpdateUserId: results[i].UpdateUserId,
                        UpdateDateTime: results[i].UpdateDateTime,
                        IsLocked: results[i].IsLocked,
                    });
                }
            }
        });
        return itemObsevableArray;
    };
    return Software_ItemGroup_Service;
}());
Software_ItemGroup_Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http,
        ng2_toastr_1.ToastsManager,
        ng2_slim_loading_bar_1.SlimLoadingBarService])
], Software_ItemGroup_Service);
exports.Software_ItemGroup_Service = Software_ItemGroup_Service;
//# sourceMappingURL=software_itemgroup.service.js.map