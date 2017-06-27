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
var Software_Discount_Service = (function () {
    function Software_Discount_Service(router, http, toastr) {
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
    //LIST OF MSTDISCOUNT
    Software_Discount_Service.prototype.getListOfDiscount = function () {
        var discountObsevableArray = new wijmo.collections.ObservableArray();
        var url = "http://localhost:2558/api/discount/list";
        this.http.get(url, this.options).subscribe(function (response) {
            var results = response.json();
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    discountObsevableArray.push({
                        Id: results[i].Id,
                        Discount: results[i].Discount,
                        DiscountRate: results[i].DiscountRate,
                        IsVatExempt: results[i].IsVatExempt,
                        IsDateScheduled: results[i].IsDateScheduled,
                        DateStart: results[i].DateStart,
                        DateEnd: results[i].DateEnd,
                        IsTimeScheduled: results[i].IsTimeScheduled,
                        TimeStart: results[i].TimeStart,
                        TimeEnd: results[i].TimeEnd,
                        IsDayScheduled: results[i].IsDayScheduled,
                        DayMon: results[i].DayMon,
                        DayTue: results[i].DayTue,
                        DayWed: results[i].DayWed,
                        DayThu: results[i].DayThu,
                        DayFri: results[i].DayFri,
                        DaySat: results[i].DaySat,
                        DaySun: results[i].DaySun,
                        EntryUserId: results[i].EntryUserId,
                        EntryDateTime: results[i].EntryDateTime,
                        UpdateUserId: results[i].UpdateUserId,
                        UpdateDateTime: results[i].UpdateDateTime,
                        IsLocked: results[i].IsLocked,
                    });
                }
            }
        });
        return discountObsevableArray;
    };
    //ADD DISCOUNT 
    Software_Discount_Service.prototype.postDiscountData = function (discountObject) {
        var _this = this;
        var url = "http://localhost:2558/api/discount/post";
        this.http.post(url, JSON.stringify(discountObject), this.options).subscribe(function (response) {
            var results = response.json();
            if (results > 0) {
                _this.router.navigate(['/discountdetail', results]);
            }
            else {
                alert("Error");
            }
        }, function (error) {
            alert("Error");
        });
    };
    Software_Discount_Service.prototype.isLoading = function () {
    };
    //DELETE DISCOUNT
    Software_Discount_Service.prototype.deleteDiscountItem = function (id, toastr) {
        var _this = this;
        var url = "http://localhost:2558/api/discount/delete/" + id;
        this.http.delete(url, this.options).subscribe(function (response) {
            _this.toastr.info('', 'Successfully Deleted');
            setTimeout(function () {
                document.getElementById("refreshGrid").click();
            }, 1000);
        }, function (error) {
            setTimeout(function () {
                alert("Error");
            }, 1000);
        });
    };
    return Software_Discount_Service;
}());
Software_Discount_Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http,
        ng2_toastr_1.ToastsManager])
], Software_Discount_Service);
exports.Software_Discount_Service = Software_Discount_Service;
//# sourceMappingURL=software_discount.service.js.map