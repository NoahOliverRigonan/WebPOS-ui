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
var Software_Postouch_Service = (function () {
    function Software_Postouch_Service(router, http) {
        this.router = router;
        this.http = http;
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
                for (var i = 0; i <= results.length - 1; i++) {
                    tableGroupObsevableArray.push({
                        Id: results[i].Id,
                        EntryUserId: results[i].EntryUserId,
                        EntryDateTime: results[i].EntryDateTime,
                        TableGroup: results[i].TableGroup,
                        UpdateDateTime: results[i].UpdateDateTime,
                        UpdateUserId: results[i].UpdateUserId
                    });
                }
            }
            document.getElementById("set-table-group-selectedValue").click();
            setTimeout(function () {
                document.getElementById("load-table-group-data").click();
                document.getElementById("load-table-data").click();
            }, 200);
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
                for (var i = 0; i <= results.length - 1; i++) {
                    tableObsevableArray.push({
                        Id: results[i].Id,
                        TableCode: results[i].TableCode,
                        TableGroupId: results[i].TableGroupId,
                        TopLocation: results[i].TopLocation,
                        LeftLocation: results[i].LeftLocation
                    });
                }
            }
        });
        return tableObsevableArray;
    };
    return Software_Postouch_Service;
}());
Software_Postouch_Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http])
], Software_Postouch_Service);
exports.Software_Postouch_Service = Software_Postouch_Service;
//# sourceMappingURL=software_postouch.service.js.map