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
var Software_CollectionDetail_Service = (function () {
    function Software_CollectionDetail_Service(router, http, toastr, activateroute) {
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
    Software_CollectionDetail_Service.prototype.getCollectionById = function (Id) {
        var collectionObservableArray = new wijmo.collections.ObservableArray();
        var url = "http://localhost:2558/api/Collection/get/" + Id;
        this.http.get(url, this.options).subscribe(function (response) {
            var results = response.json();
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    collectionObservableArray.push({
                        Id: results[i].Id,
                        PeriodId: results[i].PeriodId,
                        CollectionDate: results[i].CollectionDate,
                        CollectionNumber: results[i].CollectionNumber,
                        TerminalId: results[i].TerminalId,
                        Terminal: results[i].Terminal,
                        ManualORNumber: results[i].ManualORNumber,
                        CustomerId: results[i].CustomerId,
                        Customer: results[i].Customer,
                        Remarks: results[i].Remarks,
                        SalesId: results[i].SalesId,
                        SalesNumber: results[i].SalesNumber,
                        SalesBalanceAmount: results[i].SalesBalanceAmount,
                        Amount: results[i].Amount,
                        TenderAmount: results[i].TenderAmount,
                        ChangeAmount: results[i].ChangeAmount,
                        PreparedBy: results[i].PreparedBy,
                        Prepared: results[i].Prepared,
                        CheckedBy: results[i].CheckedBy,
                        ApprovedBy: results[i].ApprovedBy,
                        IsLocked: results[i].IsLocked,
                        EntryUserId: results[i].EntryUserId,
                        EntryDateTime: results[i].EntryDateTime,
                        UpdateUserId: results[i].UpdateUserId,
                        UpdateDateTime: results[i].UpdateDateTime,
                        listPreparedBy: results[i].listPreparedBy,
                        listApprovedBy: results[i].listApprovedBy,
                        listCheckedBy: results[i].listCheckedBy,
                        listPeriod: results[i].listPeriod,
                        listSales: results[i].listSales,
                        listCustomer: results[i].listCustomer,
                        listTerminal: results[i].listTerminal,
                        listPayType: results[i].listPayType,
                        listStockIn: results[i].listStockIn,
                        listAccount: results[i].listAccount,
                    });
                    document.getElementById("set-value-fields").click();
                }
            }
        });
        return collectionObservableArray;
    };
    //update COLLECTION DETAIL
    Software_CollectionDetail_Service.prototype.putCollectionData = function (id, collectionObject, toastr) {
        var _this = this;
        var url = "http://localhost:2558/api/Collection/put/" + id;
        this.http.put(url, JSON.stringify(collectionObject), this.options).subscribe(function (response) {
            _this.toastr.success('', 'Successful');
            setTimeout(function () {
                _this.router.navigate(['/collection']);
            }, 1000);
        }, function (error) {
            _this.toastr.error("Error");
        });
    };
    return Software_CollectionDetail_Service;
}());
Software_CollectionDetail_Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http,
        ng2_toastr_1.ToastsManager,
        router_1.ActivatedRoute])
], Software_CollectionDetail_Service);
exports.Software_CollectionDetail_Service = Software_CollectionDetail_Service;
var Software_CollectionLine_Service = (function () {
    function Software_CollectionLine_Service(router, http, toastr, activateroute) {
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
    Software_CollectionLine_Service.prototype.getCollectionLineList = function (collectionLineId) {
        var collectionLineObservableArray = new wijmo.collections.ObservableArray();
        var url = "http://localhost:2558/api/CollectionLine/get/" + collectionLineId;
        this.http.get(url, this.options).subscribe(function (response) {
            var results = response.json();
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    collectionLineObservableArray.push({
                        Id: results[i].Id,
                        CollectionId: results[i].CollectionId,
                        Amount: results[i].Amount,
                        PayTypeId: results[i].PayTypeId,
                        PayType: results[i].PayType,
                        CheckNumber: results[i].CheckNumber,
                        CheckDate: results[i].CheckDate,
                        CheckBank: results[i].CheckBank,
                        CreditCardVerificationCode: results[i].CreditCardVerificationCode,
                        CreditCardNumber: results[i].CreditCardNumber,
                        CreditCardType: results[i].CreditCardType,
                        CreditCardBank: results[i].CreditCardBank,
                        GiftCertificateNumber: results[i].GiftCertificateNumber,
                        OtherInformation: results[i].OtherInformation,
                        StockInId: results[i].StockInId,
                        StockIn: results[i].StockIn,
                        AccountId: results[i].AccountId,
                        Account: results[i].Account,
                    });
                }
            }
        });
        return collectionLineObservableArray;
    };
    Software_CollectionLine_Service.prototype.postPurchaseOrderLineData = function (collectionObject, toastr) {
        var _this = this;
        var url = "http://localhost:2558/api/CollectionLine/post";
        this.http.post(url, JSON.stringify(collectionObject), this.options).subscribe(function (response) {
            _this.toastr.success('', 'Success');
            document.getElementById('refreshGrid').click();
            document.getElementById('clear-fields').click();
        }, function (error) {
            _this.toastr.error('', 'Bad Request');
        });
    };
    Software_CollectionLine_Service.prototype.deleteCollectionLine = function (id, toastr) {
        var _this = this;
        var url = "http://localhost:2558/api/CollectionLine/delete/" + id;
        this.http.delete(url, this.options).subscribe(function (response) {
            _this.toastr.info('', 'Successfully Deleted');
            setTimeout(function () {
                document.getElementById("refreshGrid").click();
            }, 1000);
        }, function (error) {
            _this.toastr.error(' ', 'Bad Request');
        });
    };
    return Software_CollectionLine_Service;
}());
Software_CollectionLine_Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http,
        ng2_toastr_1.ToastsManager,
        router_1.ActivatedRoute])
], Software_CollectionLine_Service);
exports.Software_CollectionLine_Service = Software_CollectionLine_Service;
//# sourceMappingURL=software_collectiondetail.service.js.map