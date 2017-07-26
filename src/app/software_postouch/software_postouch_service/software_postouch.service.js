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
var Software_Postouch_Service = (function () {
    function Software_Postouch_Service(router, http, toastr) {
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
    Software_Postouch_Service.prototype.getListTableGroup = function () {
        var tableGroupObsevableArray = new wijmo.collections.ObservableArray();
        var url = "http://localhost:2558/api/tableGroup/list";
        this.http.get(url, this.options).subscribe(function (response) {
            var results = response.json();
            if (results.length > 0) {
                var tableGroup1Id = void 0;
                var tableGroup1 = void 0;
                var tableGroup2Id = void 0;
                var tableGroup2 = void 0;
                var tableGroup3Id = void 0;
                var tableGroup3 = void 0;
                var tableGroup4Id = void 0;
                var tableGroup4 = void 0;
                var tableGroup5Id = void 0;
                var tableGroup5 = void 0;
                var tableGroup6Id = void 0;
                var tableGroup6 = void 0;
                var length_1 = (results.length - 1) + 5;
                var fixIndex = 5;
                var fixIndexValue = 5;
                var tableGroudIdDineIn = results[0].Id;
                var tableGroudIdDineTableGroup = results[0].TableGroup;
                for (var i = 0; i <= (results.length - 1) + 5; i++) {
                    if (fixIndex == i) {
                        if ((i - fixIndexValue) + 5 <= length_1) {
                            tableGroup1Id = results[i - fixIndexValue].Id;
                            tableGroup1 = results[i - fixIndexValue].TableGroup;
                        }
                        else {
                            tableGroup1Id = " ";
                            tableGroup1 = " ";
                        }
                        if (((i + 1) - fixIndexValue) + 5 <= length_1) {
                            tableGroup2Id = results[(i + 1) - fixIndexValue].Id;
                            tableGroup2 = results[(i + 1) - fixIndexValue].TableGroup;
                        }
                        else {
                            tableGroup2Id = " ";
                            tableGroup2 = " ";
                        }
                        if (((i + 2) - fixIndexValue) + 5 <= length_1) {
                            tableGroup3Id = results[(i + 2) - fixIndexValue].Id;
                            tableGroup3 = results[(i + 2) - fixIndexValue].TableGroup;
                        }
                        else {
                            tableGroup3Id = " ";
                            tableGroup3 = " ";
                        }
                        if (((i + 3) - fixIndexValue) + 5 <= length_1) {
                            tableGroup4Id = results[(i + 3) - fixIndexValue].Id;
                            tableGroup4 = results[(i + 3) - fixIndexValue].TableGroup;
                        }
                        else {
                            tableGroup4Id = " ";
                            tableGroup4 = " ";
                        }
                        if (((i + 4) - fixIndexValue) + 5 <= length_1) {
                            tableGroup5Id = results[(i + 4) - fixIndexValue].Id;
                            tableGroup5 = results[(i + 4) - fixIndexValue].TableGroup;
                        }
                        else {
                            tableGroup5Id = " ";
                            tableGroup5 = " ";
                        }
                        if (((i + 5) - fixIndexValue) + 5 <= length_1) {
                            tableGroup6Id = results[(i + 5) - fixIndexValue].Id;
                            tableGroup6 = results[(i + 5) - fixIndexValue].TableGroup;
                        }
                        else {
                            tableGroup6Id = " ";
                            tableGroup6 = " ";
                        }
                        tableGroupObsevableArray.push({
                            tableGroup1Id: tableGroup1Id,
                            tableGroup1: tableGroup1,
                            tableGroup2Id: tableGroup2Id,
                            tableGroup2: tableGroup2,
                            tableGroup3Id: tableGroup3Id,
                            tableGroup3: tableGroup3,
                            tableGroup4Id: tableGroup4Id,
                            tableGroup4: tableGroup4,
                            tableGroup5Id: tableGroup5Id,
                            tableGroup5: tableGroup5,
                            tableGroup6Id: tableGroup6Id,
                            tableGroup6: tableGroup6,
                        });
                        fixIndex += 6;
                    }
                }
            }
            document.getElementById("set-table-group-selectedValue").click();
            // setTimeout(() => {
            //     
            //     (<HTMLButtonElement>document.getElementById("load-table-data")).click();
            // }, 200);
        });
        return tableGroupObsevableArray;
    };
    //MSTTABLE
    Software_Postouch_Service.prototype.getListTable = function (tableId) {
        var tableObsevableArray = new wijmo.collections.ObservableArray();
        var url = "http://localhost:2558/api/table/list/" + tableId;
        this.http.get(url, this.options).subscribe(function (response) {
            var results = response.json();
            if (results.length > 0) {
                var tableNo1Id = void 0;
                var tableNo1 = void 0;
                var tableNo2Id = void 0;
                var tableNo2 = void 0;
                var tableNo3Id = void 0;
                var tableNo3 = void 0;
                var tableNo4Id = void 0;
                var tableNo4 = void 0;
                var tableNo5Id = void 0;
                var tableNo5 = void 0;
                var tableNo6Id = void 0;
                var tableNo6 = void 0;
                var length_2 = (results.length - 1) + 5;
                var fixIndex = 5;
                var fixIndexValue = 5;
                for (var i = 0; i <= (results.length - 1) + 5; i++) {
                    if (fixIndex == i) {
                        if ((i - fixIndexValue) + 5 <= length_2) {
                            tableNo1Id = results[i - fixIndexValue].Id;
                            tableNo1 = results[i - fixIndexValue].TableCode;
                        }
                        else {
                            tableNo1Id = " ";
                            tableNo1 = " ";
                        }
                        if (((i + 1) - fixIndexValue) + 5 <= length_2) {
                            tableNo2Id = results[(i + 1) - fixIndexValue].Id;
                            tableNo2 = results[(i + 1) - fixIndexValue].TableCode;
                        }
                        else {
                            tableNo2Id = " ";
                            tableNo2 = " ";
                        }
                        if (((i + 2) - fixIndexValue) + 5 <= length_2) {
                            tableNo3Id = results[(i + 2) - fixIndexValue].Id;
                            tableNo3 = results[(i + 2) - fixIndexValue].TableCode;
                        }
                        else {
                            tableNo3Id = " ";
                            tableNo3 = " ";
                        }
                        if (((i + 3) - fixIndexValue) + 5 <= length_2) {
                            tableNo4Id = results[(i + 3) - fixIndexValue].Id;
                            tableNo4 = results[(i + 3) - fixIndexValue].TableCode;
                        }
                        else {
                            tableNo4Id = " ";
                            tableNo4 = " ";
                        }
                        if (((i + 4) - fixIndexValue) + 5 <= length_2) {
                            tableNo5Id = results[(i + 4) - fixIndexValue].Id;
                            tableNo5 = results[(i + 4) - fixIndexValue].TableCode;
                        }
                        else {
                            tableNo5Id = " ";
                            tableNo5 = " ";
                        }
                        if (((i + 5) - fixIndexValue) + 5 <= length_2) {
                            tableNo6Id = results[(i + 5) - fixIndexValue].Id;
                            tableNo6 = results[(i + 5) - fixIndexValue].TableCode;
                        }
                        else {
                            tableNo6Id = " ";
                            tableNo6 = " ";
                        }
                        tableObsevableArray.push({
                            tableNo1Id: tableNo1Id,
                            tableNo1: tableNo1,
                            tableNo2Id: tableNo2Id,
                            tableNo2: tableNo2,
                            tableNo3Id: tableNo3Id,
                            tableNo3: tableNo3,
                            tableNo4Id: tableNo4Id,
                            tableNo4: tableNo4,
                            tableNo5Id: tableNo5Id,
                            tableNo5: tableNo5,
                            tableNo6Id: tableNo6Id,
                            tableNo6: tableNo6
                        });
                        fixIndex += 6;
                    }
                    else {
                    }
                }
                document.getElementById("refresh-table-group").click();
            }
        });
        return tableObsevableArray;
    };
    //Trn Sales
    Software_Postouch_Service.prototype.getListTableSaleOpen = function () {
        var tableSaleObsevableArray = new wijmo.collections.ObservableArray();
        var url = "http://localhost:2558/api/sales/listOpen";
        this.http.get(url, this.options).subscribe(function (response) {
            var results = response.json();
            if (results.length > 0) {
                for (var i = 0; i < results.length; i++) {
                    tableSaleObsevableArray.push({
                        Id: results[i].Id,
                        PeriodId: results[i].TableId,
                        SalesDate: results[i].SalesDate,
                        SalesNumber: results[i].SalesNumber,
                        ManualInvoiceNumber: results[i].ManualInvoiceNumber,
                        Amount: results[i].Amount,
                        TableId: results[i].TableId,
                        TableCode: results[i].TableCode,
                        CustomerId: results[i].CustomerId,
                        AccountId: results[i].AccountId,
                        AccountName: results[i].AccountName,
                        TermId: results[i].TermId,
                        DiscountId: results[i].DiscountId,
                        SeniorCitizenId: results[i].SeniorCitizenId,
                        SeniorCitizenName: results[i].SeniorCitizenName,
                        SeniorCitizenAge: results[i].SeniorCitizenAge,
                        Remarks: results[i].Remarks,
                        SalesAgent: results[i].SalesAgent,
                        SalesAgentName: results[i].SalesAgentName,
                        TerminalId: results[i].TerminalId,
                        PreparedBy: results[i].PreparedBy,
                        CheckedBy: results[i].CheckedBy,
                        ApprovedBy: results[i].ApprovedBy,
                        IsLocked: results[i].IsLocked,
                        IsCancelled: results[i].IsCancelled,
                        PaidAmount: results[i].PaidAmount,
                        CreditAmount: results[i].CreditAmount,
                        DebitAmount: results[i].DebitAmount,
                        BalanceAmount: results[i].BalanceAmount,
                        EntryUserId: results[i].EntryUserId,
                        EntryDateTime: results[i].EntryDateTime,
                        UpdateUserId: results[i].UpdateUserId,
                        UpdateDateTime: results[i].UpdateDateTime,
                        Pax: results[i].Pax,
                        TableStatus: results[i].TableStatus,
                    });
                }
            }
        });
        return tableSaleObsevableArray;
    };
    //TABLE GROUP FOR WALKIN
    Software_Postouch_Service.prototype.getListTableGroupWalkin = function () {
        var tableGroupObsevableArray = new wijmo.collections.ObservableArray();
        var url = "http://localhost:2558/api/tableGroup/get";
        this.http.get(url, this.options).subscribe(function (response) {
            var results = response.json();
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    tableGroupObsevableArray.push({
                        Id: results[i].Id,
                        EntryUserId: results[i].EntryUserId,
                        EntryDateTime: results[i].EntryDateTime,
                        TableGroup: results[i].TableGroup,
                        UpdateDateTime: results[i].UpdateDateTime,
                        UpdateUserId: results[i].UpdateUserId,
                        IsLocked: results[i].IsLocked,
                    });
                }
            }
        });
        return tableGroupObsevableArray;
    };
    Software_Postouch_Service.prototype.postSalesData = function (salesObject, toastr) {
        var _this = this;
        var url = "http://localhost:2558/api/sales/post";
        this.http.post(url, JSON.stringify(salesObject), this.options).subscribe(function (response) {
            var results = response.json();
            if (results > 0) {
                _this.router.navigate(['/postouchdetail', results]);
            }
            else {
                _this.toastr.error('', 'Bad Request');
                _this.router.navigate(['/postouch']);
            }
        }, function (error) {
            _this.toastr.error('', 'Bad Request');
            console.log(error);
        });
    };
    return Software_Postouch_Service;
}());
Software_Postouch_Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http,
        ng2_toastr_1.ToastsManager])
], Software_Postouch_Service);
exports.Software_Postouch_Service = Software_Postouch_Service;
//# sourceMappingURL=software_postouch.service.js.map