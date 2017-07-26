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
var Software_StockInDetail_Service = (function () {
    function Software_StockInDetail_Service(router, http, toastr, activateroute) {
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
    Software_StockInDetail_Service.prototype.getStockListById = function (Id) {
        var stockInObservableArray = new wijmo.collections.ObservableArray();
        var url = "http://localhost:2558/api/stockin/get/" + Id;
        this.http.get(url, this.options).subscribe(function (response) {
            var results = response.json();
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
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
                        listCategoryItem: results[i].listCategoryItem,
                        listSupplier: results[i].listSupplier,
                        listPurchaseOrder: results[i].listPurchaseOrder,
                        listPeriod: results[i].listPeriod,
                        //FOR STOCK IN LINE LIST
                        listItem: results[i].listItem,
                        listUnit: results[i].listUnit,
                        listAccount: results[i].listAccount,
                    });
                    document.getElementById("set-value-fields").click();
                }
            }
        });
        return stockInObservableArray;
    };
    // update USER
    Software_StockInDetail_Service.prototype.putStockInData = function (id, stockInObject, toastr) {
        var _this = this;
        var url = "http://localhost:2558/api/stockIn/put/" + id;
        this.http.put(url, JSON.stringify(stockInObject), this.options).subscribe(function (response) {
            _this.toastr.success('', 'Successful');
            setTimeout(function () {
                _this.router.navigate(['/stock-in']);
            }, 1000);
        }, function (error) {
            _this.toastr.error("Error");
        });
    };
    return Software_StockInDetail_Service;
}());
Software_StockInDetail_Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http,
        ng2_toastr_1.ToastsManager,
        router_1.ActivatedRoute])
], Software_StockInDetail_Service);
exports.Software_StockInDetail_Service = Software_StockInDetail_Service;
var Software_StockInLine_Service = (function () {
    function Software_StockInLine_Service(router, http, toastr, activateroute) {
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
    Software_StockInLine_Service.prototype.getUserFormList = function (userId) {
        var userFormObservableArray = new wijmo.collections.ObservableArray();
        var url = "http://localhost:2558/api/userform/list/" + userId;
        this.http.get(url, this.options).subscribe(function (response) {
            var results = response.json();
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    userFormObservableArray.push({
                        Id: results[i].Id,
                        FormId: results[i].FormId,
                        FormDescription: results[i].FormDescription,
                        UserId: results[i].UserId,
                        CanDelete: results[i].CanDelete,
                        CanAdd: results[i].CanAdd,
                        CanLock: results[i].CanLock,
                        CanUnlock: results[i].CanUnlock,
                        CanPrint: results[i].CanPrint,
                        CanPreview: results[i].CanPreview,
                        CanEdit: results[i].CanEdit,
                        CanTender: results[i].CanTender,
                        CanDiscount: results[i].CanDiscount,
                        CanView: results[i].CanView,
                        CanSplit: results[i].CanSplit,
                        CanCancel: results[i].CanCancel,
                        CanReturn: results[i].CanReturn,
                    });
                }
            }
        });
        return userFormObservableArray;
    };
    // GET USER FORM BY ID
    Software_StockInLine_Service.prototype.getStockInLineById = function (id) {
        var stockInLineObservableArray = new wijmo.collections.ObservableArray();
        var url = "http://localhost:2558/api/stockInLine/get/" + id;
        this.http.get(url, this.options).subscribe(function (response) {
            var results = response.json();
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    stockInLineObservableArray.push({
                        Id: results[i].Id,
                        StockInId: results[i].StockInId,
                        ItemId: results[i].ItemId,
                        Item: results[i].Item,
                        UnitId: results[i].UnitId,
                        Unit: results[i].Unit,
                        Quantity: results[i].Quantity,
                        Cost: results[i].Cost,
                        Amount: results[i].Amount,
                        ExpiryDate: results[i].ExpiryDate,
                        LotNumber: results[i].LotNumber,
                        AssetAccountId: results[i].AssetAccountId,
                        AssetAccount: results[i].AssetAccount,
                    });
                }
            }
        });
        return stockInLineObservableArray;
    };
    Software_StockInLine_Service.prototype.postStockInLineData = function (stockInLineObject, toastr) {
        var _this = this;
        var url = "http://localhost:2558/api/stockInLine/post";
        this.http.post(url, JSON.stringify(stockInLineObject), this.options).subscribe(function (response) {
            _this.toastr.success('', 'Success');
            document.getElementById('refreshGrid').click();
            document.getElementById('clear-fields').click();
        }, function (error) {
            _this.toastr.error('', 'Bad Request');
        });
    };
    Software_StockInLine_Service.prototype.deleteStockInData = function (id, toastr) {
        var _this = this;
        var url = "http://localhost:2558/api/stockInLine/delete/" + id;
        this.http.delete(url, this.options).subscribe(function (response) {
            _this.toastr.info('', 'Successfully Deleted');
            setTimeout(function () {
                document.getElementById("refreshGrid").click();
            }, 1000);
        }, function (error) {
            _this.toastr.error(' ', 'Bad Request');
        });
    };
    return Software_StockInLine_Service;
}());
Software_StockInLine_Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http,
        ng2_toastr_1.ToastsManager,
        router_1.ActivatedRoute])
], Software_StockInLine_Service);
exports.Software_StockInLine_Service = Software_StockInLine_Service;
//# sourceMappingURL=software_stockin_detail.service.js.map