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
var Software_PurchaseDetail_Service = (function () {
    function Software_PurchaseDetail_Service(router, http, toastr, activateroute) {
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
    Software_PurchaseDetail_Service.prototype.getPurchaseOrderById = function (Id) {
        var purchaseOrderObservableArray = new wijmo.collections.ObservableArray();
        var url = "http://localhost:2558/api/purchaseOrder/get/" + Id;
        this.http.get(url, this.options).subscribe(function (response) {
            var results = response.json();
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    purchaseOrderObservableArray.push({
                        Id: results[i].Id,
                        PeriodId: results[i].PeriodId,
                        PurchaseOrderDate: results[i].PurchaseOrderDate,
                        PurchaseOrderNumber: results[i].PurchaseOrderNumber,
                        Amount: results[i].Amount,
                        SupplierId: results[i].SupplierId,
                        Remarks: results[i].Remarks,
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
                        listSupplier: results[i].listSupplier,
                        listPeriod: results[i].listPeriod,
                        listItem: results[i].listItem,
                        listUnit: results[i].listUnit,
                    });
                    document.getElementById("set-value-fields").click();
                }
            }
        });
        return purchaseOrderObservableArray;
    };
    // update USER
    Software_PurchaseDetail_Service.prototype.putPurchaseOrderData = function (id, purchaseOrderObject, toastr) {
        var _this = this;
        var url = "http://localhost:2558/api/purchaseOrder/put/" + id;
        this.http.put(url, JSON.stringify(purchaseOrderObject), this.options).subscribe(function (response) {
            _this.toastr.success('', 'Successful');
            setTimeout(function () {
                _this.router.navigate(['/purchase']);
            }, 1000);
        }, function (error) {
            _this.toastr.error("Error");
        });
    };
    return Software_PurchaseDetail_Service;
}());
Software_PurchaseDetail_Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http,
        ng2_toastr_1.ToastsManager,
        router_1.ActivatedRoute])
], Software_PurchaseDetail_Service);
exports.Software_PurchaseDetail_Service = Software_PurchaseDetail_Service;
var Software_PurchaseDetailLine_Service = (function () {
    function Software_PurchaseDetailLine_Service(router, http, toastr, activateroute) {
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
    Software_PurchaseDetailLine_Service.prototype.getPurchaseOrderLineList = function (purchaseOrderLineId) {
        var purchaseOrderLineObservableArray = new wijmo.collections.ObservableArray();
        var url = "http://localhost:2558/api/purchaseOrderLine/get/" + purchaseOrderLineId;
        this.http.get(url, this.options).subscribe(function (response) {
            var results = response.json();
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    purchaseOrderLineObservableArray.push({
                        Id: results[i].Id,
                        PurchaseOrderId: results[i].PurchaseOrderId,
                        ItemId: results[i].ItemId,
                        Item: results[i].Item,
                        UnitId: results[i].UnitId,
                        Unit: results[i].Unit,
                        Quantity: results[i].Quantity,
                        Cost: results[i].Cost,
                        Amount: results[i].Amount,
                    });
                }
            }
        });
        return purchaseOrderLineObservableArray;
    };
    Software_PurchaseDetailLine_Service.prototype.postPurchaseOrderLineData = function (POLineObject, toastr) {
        var _this = this;
        var url = "http://localhost:2558/api/purchaseOrderLine/post";
        this.http.post(url, JSON.stringify(POLineObject), this.options).subscribe(function (response) {
            _this.toastr.success('', 'Success');
            document.getElementById('refreshGrid').click();
            document.getElementById('clear-fields').click();
        }, function (error) {
            _this.toastr.error('', 'Bad Request');
        });
    };
    Software_PurchaseDetailLine_Service.prototype.deletePurchaseOrderLine = function (id, toastr) {
        var _this = this;
        var url = "http://localhost:2558/api/purchaseOrderLine/delete/" + id;
        this.http.delete(url, this.options).subscribe(function (response) {
            _this.toastr.info('', 'Successfully Deleted');
            setTimeout(function () {
                document.getElementById("refreshGrid").click();
            }, 1000);
        }, function (error) {
            _this.toastr.error(' ', 'Bad Request');
        });
    };
    // update USER FORM
    Software_PurchaseDetailLine_Service.prototype.putUserFormData = function (id, userObject, toastr) {
        var _this = this;
        var url = "http://localhost:2558/api/userform/put/" + id;
        this.http.put(url, JSON.stringify(userObject), this.options).subscribe(function (response) {
            document.getElementById("modalAddRights").click();
            // setTimeout(() => {
            //     this.router.navigate(['/userdetail'])
            // }, 1000)
        }, function (error) {
            _this.toastr.error("Error");
        });
    };
    return Software_PurchaseDetailLine_Service;
}());
Software_PurchaseDetailLine_Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http,
        ng2_toastr_1.ToastsManager,
        router_1.ActivatedRoute])
], Software_PurchaseDetailLine_Service);
exports.Software_PurchaseDetailLine_Service = Software_PurchaseDetailLine_Service;
//# sourceMappingURL=software_purchasedetail.service.js.map