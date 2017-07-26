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
var Software_StockIn_Service = (function () {
    function Software_StockIn_Service(router, http, toastr, activateroute) {
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
    //GET STOCK IN
    Software_StockIn_Service.prototype.getStockInList = function () {
        var stockInObservableArray = new wijmo.collections.ObservableArray();
        var url = "http://localhost:2558/api/stockIn/list";
        this.http.get(url, this.options).subscribe(function (response) {
            var results = response.json();
            if (results.length > 0) {
                for (var i = 0; i < results.length; i++) {
                    stockInObservableArray.push({
                        Id: results[i].Id,
                        PeriodId: results[i].PeriodId,
                        StockInDate: results[i].StockInDate,
                        StockInNumber: results[i].StockInNumber,
                        SupplierId: results[i].SupplierId,
                        Supplier: results[i].Supplier,
                        Remarks: results[i].Remarks,
                        IsReturn: results[i].IsReturn,
                        CollectionId: results[i].CollectionId,
                        PurchaseOrderId: results[i].PurchaseOrderId,
                        PreparedBy: results[i].PreparedBy,
                        CheckedBy: results[i].CheckedBy,
                        ApprovedBy: results[i].ApprovedBy,
                        IsLocked: results[i].IsLocked,
                        EntryUserId: results[i].EntryUserId,
                        EntryDateTime: results[i].EntryDateTime,
                        UpdateUserId: results[i].UpdateUserId,
                        UpdateDateTime: results[i].UpdateDateTime,
                    });
                }
            }
            else {
                console.log("No data");
            }
        });
        return stockInObservableArray;
    };
    // ADD STOCKIN
    Software_StockIn_Service.prototype.postStockInData = function (stockInObject, toastr) {
        var _this = this;
        var url = "http://localhost:2558/api/stockIn/post";
        this.http.post(url, JSON.stringify(stockInObject), this.options).subscribe(function (response) {
            var results = response.json();
            if (results > 0) {
                _this.router.navigate(['/stockindetail', results]);
            }
            else {
                _this.toastr.error('', 'Bad Request');
            }
        }, function (error) {
            _this.toastr.error('', 'Bad Request');
        });
    };
    //DELETE STOCK IN LIST
    Software_StockIn_Service.prototype.deleteStockInList = function (id, toastr) {
        var _this = this;
        var url = "http://localhost:2558/api/stockIn/delete/" + id;
        this.http.delete(url, this.options).subscribe(function (response) {
            _this.toastr.info('', 'Successfully Deleted');
            setTimeout(function () {
                document.getElementById("refreshGrid").click();
            }, 1000);
        }, function (error) {
            _this.toastr.error(' ', 'Bad Request');
        });
    };
    return Software_StockIn_Service;
}());
Software_StockIn_Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http,
        ng2_toastr_1.ToastsManager,
        router_1.ActivatedRoute])
], Software_StockIn_Service);
exports.Software_StockIn_Service = Software_StockIn_Service;
//# sourceMappingURL=software_stockin.service.js.map