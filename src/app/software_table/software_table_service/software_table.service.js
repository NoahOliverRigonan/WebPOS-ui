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
var Software_TableGroup_Service = (function () {
    function Software_TableGroup_Service(router, http, toastr, activateroute) {
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
    Software_TableGroup_Service.prototype.getTableGroup = function () {
        var tableGroupObservableArray = new wijmo.collections.ObservableArray();
        var url = "http://localhost:2558/api/tableGroup/list";
        this.http.get(url, this.options).subscribe(function (response) {
            var results = response.json();
            if (results.length > 0) {
                tableGroupObservableArray.push({
                    Id: results[0].Id,
                    EntryUserId: results[0].EntryUserId,
                    EntryDateTime: results[0].EntryDateTime,
                    TableGroup: results[0].TableGroup,
                    UpdateDateTime: results[0].UpdateDateTime,
                    UpdateUserId: results[0].UpdateUserId,
                    IsLocked: results[0].IsLocked,
                    Table: results[0].Table
                });
            }
            else {
                console.log("No data");
            }
        });
        return tableGroupObservableArray;
    };
    return Software_TableGroup_Service;
}());
Software_TableGroup_Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http,
        ng2_toastr_1.ToastsManager,
        router_1.ActivatedRoute])
], Software_TableGroup_Service);
exports.Software_TableGroup_Service = Software_TableGroup_Service;
//# sourceMappingURL=software_table.service.js.map