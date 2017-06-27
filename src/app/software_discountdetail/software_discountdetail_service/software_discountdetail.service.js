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
var Software_Discountdetail_Service = (function () {
    function Software_Discountdetail_Service(router, http, toastr) {
        this.router = router;
        this.http = http;
        this.toastr = toastr;
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
    Software_Discountdetail_Service.prototype.getItemDiscountDetail = function () {
        var discountItemObservableArray = new wijmo.collections.ObservableArray();
        var url = "http://localhost:2558/api/discountitem/list";
        this.http.get(url, this.options).subscribe(function (response) {
            var results = response.json();
            if (results.length > 0) {
                discountItemObservableArray.push({
                    Id: results[0].Id,
                    ItemId: results[0].ItemId,
                    DiscountId: results[0].DiscountId,
                    ItemCode: results[0].ItemCode,
                    Item: results[0].Item,
                    listOfItemCode: results[0].listOfItemCode,
                    listOfItemDescription: results[0].listOfItemDescription,
                });
                document.getElementById("set-value-fields-item").click();
            }
            else {
                console.log("No data");
            }
        });
        return discountItemObservableArray;
    };
    Software_Discountdetail_Service.prototype.getDiscountDetail = function (id) {
        var discountObservableArray = new wijmo.collections.ObservableArray();
        var url = "http://localhost:2558/api/discount/get/" + id;
        this.http.get(url, this.options).subscribe(function (response) {
            var results = response.json();
            if (results.length > 0) {
                discountObservableArray.push({
                    Id: results[0].Id,
                    Discount: results[0].Discount,
                    DiscountRate: results[0].DiscountRate,
                    IsVatExempt: results[0].IsVatExempt,
                    IsDateScheduled: results[0].IsDateScheduled,
                    DateStart: results[0].DateStart,
                    DateEnd: results[0].DateEnd,
                    IsTimeScheduled: results[0].IsTimeScheduled,
                    TimeStart: results[0].TimeStart,
                    TimeEnd: results[0].TimeEnd,
                    IsDayScheduled: results[0].IsDayScheduled,
                    DayMon: results[0].DayMon,
                    DayTue: results[0].DayTue,
                    DayWed: results[0].DayWed,
                    DayThu: results[0].DayThu,
                    DayFri: results[0].DayFri,
                    DaySat: results[0].DaySat,
                    DaySun: results[0].DaySun,
                    EntryUserId: results[0].EntryUserId,
                    EntryDateTime: results[0].EntryDateTime,
                    UpdateUserId: results[0].UpdateUserId,
                    UpdateDateTime: results[0].UpdateDateTime,
                    IsLocked: results[0].IsLocked,
                });
                document.getElementById("set-value-fields-discountdetail").click();
            }
            else {
                console.log("No data");
            }
        });
        return discountObservableArray;
    };
    Software_Discountdetail_Service.prototype.deleteDiscountItem = function (id, toastr) {
        var _this = this;
        var url = "http://localhost:2558/api/discountitem/delete/" + id;
        this.http.delete(url, this.options).subscribe(function (response) {
            var result = response.json();
            if (result > 0) {
                _this.router.navigate(['/discount', result]);
                setTimeout(function () {
                    document.getElementById("refreshGrid").click();
                }, 1000);
            }
        }, function (error) {
            document.getElementById("delete-modal-warning-id").click();
        });
    };
    return Software_Discountdetail_Service;
}());
Software_Discountdetail_Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http,
        ng2_toastr_1.ToastsManager])
], Software_Discountdetail_Service);
exports.Software_Discountdetail_Service = Software_Discountdetail_Service;
//# sourceMappingURL=software_discountdetail.service.js.map