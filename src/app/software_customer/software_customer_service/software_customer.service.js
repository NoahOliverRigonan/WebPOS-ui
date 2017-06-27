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
var Software_Customer_Service = (function () {
    function Software_Customer_Service(router, http, toastr, slimLoadingBarService) {
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
    Software_Customer_Service.prototype.getCustomerList = function () {
        var customerObsevableArray = new wijmo.collections.ObservableArray();
        var url = "http://localhost:2558/api/customer/list";
        this.http.get(url, this.options).subscribe(function (response) {
            var results = response.json();
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    customerObsevableArray.push({
                        Id: results[i].Id,
                        Customer: results[i].Customer,
                        Address: results[i].Address,
                        ContactPerson: results[i].ContactPerson,
                        ContactNumber: results[i].ContactNumber,
                        CreditLimit: results[i].CreditLimit,
                        TermId: results[i].TermId,
                        TIN: results[i].TIN,
                        WithReward: results[i].WithReward,
                        RewardNumber: results[i].RewardNumber,
                        RewardConversion: results[i].RewardConversion,
                        AccountId: results[i].AccountId,
                        EntryUserId: results[i].EntryUserId,
                        EntryDateTime: results[i].EntryDateTime,
                        UpdateUserId: results[i].UpdateUserId,
                        UpdateDateTime: results[i].UpdateDateTime,
                        IsLocked: results[i].IsLocked,
                    });
                }
            }
        });
        return customerObsevableArray;
    };
    return Software_Customer_Service;
}());
Software_Customer_Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http,
        ng2_toastr_1.ToastsManager,
        ng2_slim_loading_bar_1.SlimLoadingBarService])
], Software_Customer_Service);
exports.Software_Customer_Service = Software_Customer_Service;
//# sourceMappingURL=software_customer.service.js.map