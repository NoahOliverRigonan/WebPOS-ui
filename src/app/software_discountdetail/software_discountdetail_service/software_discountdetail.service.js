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
    Software_Discountdetail_Service.prototype.getDiscountDetail = function (id) {
        var discountObservableArray = new wijmo.collections.ObservableArray();
        var url = "http://localhost:2558/api/discount/get/" + id;
        this.http.get(url, this.options).subscribe(function (response) {
            var results = response.json();
            if (results.length > 0) {
                for (var i = 0; i < results.length; i++) {
                    discountObservableArray.push({
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
                        listOfItemCode: results[i].listOfItemCode,
                        listOfItemDescription: results[i].listOfItemDescription,
                    });
                }
                document.getElementById("set-value-fields-item").click();
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
    // PUT DISCOUNT
    Software_Discountdetail_Service.prototype.putDiscountData = function (id, discountObject, toastr) {
        var _this = this;
        var url = "http://localhost:2558/api/discount/put/" + id;
        this.http.put(url, JSON.stringify(discountObject), this.options).subscribe(function (response) {
            _this.toastr.success('', 'Save Successful');
            _this.router.navigate(['/discount']);
        }, function (error) {
            alert("Error");
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
var Software_DiscountItem_Service = (function () {
    function Software_DiscountItem_Service(router, http, toastr, activateroute) {
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
    //GET DISCOUNT ITEM
    Software_DiscountItem_Service.prototype.getItemDiscountDetail = function (id) {
        var discountItemObservableArray = new wijmo.collections.ObservableArray();
        var url = "http://localhost:2558/api/discountitem/get/" + id;
        this.http.get(url, this.options).subscribe(function (response) {
            var results = response.json();
            if (results.length > 0) {
                for (var i = 0; i < results.length; i++) {
                    discountItemObservableArray.push({
                        Id: results[i].Id,
                        ItemId: results[i].ItemId,
                        DiscountId: results[i].DiscountId,
                        ItemCode: results[i].ItemCode,
                        Item: results[i].Item,
                    });
                }
            }
            else {
                console.log("No data");
            }
        });
        return discountItemObservableArray;
    };
    Software_DiscountItem_Service.prototype.postDiscountItem = function (discountItemObject, toastr) {
        var _this = this;
        var url = "http://localhost:2558/api/discountitem/post";
        this.http.post(url, JSON.stringify(discountItemObject), this.options).subscribe(function (response) {
            _this.toastr.success('', 'Success');
            document.getElementById('refreshGrid').click();
        }, function (error) {
            _this.toastr.error('', 'Bad Request');
        });
    };
    Software_DiscountItem_Service.prototype.deleteDiscountItem = function (id, toastr) {
        var _this = this;
        var url = "http://localhost:2558/api/discountitem/delete/" + id;
        this.http.delete(url, this.options).subscribe(function (response) {
            _this.toastr.info('', 'Successfully Deleted');
            setTimeout(function () {
                document.getElementById("refreshGrid").click();
            }, 1000);
        }, function (error) {
            _this.toastr.error(' ', 'Bad Request');
        });
    };
    return Software_DiscountItem_Service;
}());
Software_DiscountItem_Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http,
        ng2_toastr_1.ToastsManager,
        router_1.ActivatedRoute])
], Software_DiscountItem_Service);
exports.Software_DiscountItem_Service = Software_DiscountItem_Service;
//# sourceMappingURL=software_discountdetail.service.js.map