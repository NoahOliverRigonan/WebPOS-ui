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
var Software_PostouchDetail_Service = (function () {
    function Software_PostouchDetail_Service(router, http, toastr) {
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
    //MST ITEM GROUP
    Software_PostouchDetail_Service.prototype.getListItemGroup = function () {
        var itemGroupObsevableArray = new wijmo.collections.ObservableArray();
        var url = "http://localhost:2558/api/itemGroup/list/";
        this.http.get(url, this.options).subscribe(function (response) {
            var results = response.json();
            if (results.length > 0) {
                var itemGroup1Id = void 0;
                var itemGroup1 = void 0;
                var itemGroup2Id = void 0;
                var itemGroup2 = void 0;
                var itemGroup3Id = void 0;
                var itemGroup3 = void 0;
                var itemGroup4Id = void 0;
                var itemGroup4 = void 0;
                var itemGroup5Id = void 0;
                var itemGroup5 = void 0;
                var itemGroup6Id = void 0;
                var itemGroup6 = void 0;
                var length_1 = (results.length - 1) + 5;
                var fixIndex = 5;
                var fixIndexValue = 5;
                for (var i = 0; i <= (results.length - 1) + 5; i++) {
                    if (fixIndex == i) {
                        if ((i - fixIndexValue) + 5 <= length_1) {
                            itemGroup1Id = results[i - fixIndexValue].Id;
                            itemGroup1 = results[i - fixIndexValue].ItemGroup;
                        }
                        else {
                            itemGroup1Id = " ";
                            itemGroup1 = " ";
                        }
                        if (((i + 1) - fixIndexValue) + 5 <= length_1) {
                            itemGroup2Id = results[(i + 1) - fixIndexValue].Id;
                            itemGroup2 = results[(i + 1) - fixIndexValue].ItemGroup;
                        }
                        else {
                            itemGroup2Id = " ";
                            itemGroup2 = " ";
                        }
                        if (((i + 2) - fixIndexValue) + 5 <= length_1) {
                            itemGroup3Id = results[(i + 2) - fixIndexValue].Id;
                            itemGroup3 = results[(i + 2) - fixIndexValue].ItemGroup;
                        }
                        else {
                            itemGroup3Id = " ";
                            itemGroup3 = " ";
                        }
                        if (((i + 3) - fixIndexValue) + 5 <= length_1) {
                            itemGroup4Id = results[(i + 3) - fixIndexValue].Id;
                            itemGroup4 = results[(i + 3) - fixIndexValue].ItemGroup;
                        }
                        else {
                            itemGroup4Id = " ";
                            itemGroup4 = " ";
                        }
                        if (((i + 4) - fixIndexValue) + 5 <= length_1) {
                            itemGroup5Id = results[(i + 4) - fixIndexValue].Id;
                            itemGroup5 = results[(i + 4) - fixIndexValue].ItemGroup;
                        }
                        else {
                            itemGroup5Id = " ";
                            itemGroup5 = " ";
                        }
                        if (((i + 5) - fixIndexValue) + 5 <= length_1) {
                            itemGroup6Id = results[(i + 5) - fixIndexValue].Id;
                            itemGroup6 = results[(i + 5) - fixIndexValue].ItemGroup;
                        }
                        else {
                            itemGroup6Id = " ";
                            itemGroup6 = " ";
                        }
                        itemGroupObsevableArray.push({
                            itemGroup1Id: itemGroup1Id,
                            itemGroup1: itemGroup1,
                            itemGroup2Id: itemGroup2Id,
                            itemGroup2: itemGroup2,
                            itemGroup3Id: itemGroup3Id,
                            itemGroup3: itemGroup3,
                            itemGroup4Id: itemGroup4Id,
                            itemGroup4: itemGroup4,
                            itemGroup5Id: itemGroup5Id,
                            itemGroup5: itemGroup5,
                            itemGroup6Id: itemGroup6Id,
                            itemGroup6: itemGroup6,
                        });
                        fixIndex += 6;
                    }
                }
            }
            document.getElementById("set-Item-group-selectedValue").click();
            // setTimeout(() => {
            //
            //     (<HTMLButtonElement>document.getElementById("load-table-data")).click();
            // }, 200);
        });
        return itemGroupObsevableArray;
    };
    //MSTITEMGROUP ITEM 
    Software_PostouchDetail_Service.prototype.getListItemGroupItem = function (itemGroupId) {
        var itemGroupItemObsevableArray = new wijmo.collections.ObservableArray();
        var url = "http://localhost:2558/api/itemGroupItem/get/" + itemGroupId;
        this.http.get(url, this.options).subscribe(function (response) {
            var results = response.json();
            if (results.length > 0) {
                var itemGroupItem1Id = void 0;
                var itemGroupItem1 = void 0;
                var itemGroupItem2Id = void 0;
                var itemGroupItem2 = void 0;
                var itemGroupItem3Id = void 0;
                var itemGroupItem3 = void 0;
                var itemGroupItem4Id = void 0;
                var itemGroupItem4 = void 0;
                var itemGroupItem5Id = void 0;
                var itemGroupItem5 = void 0;
                var itemGroupItem6Id = void 0;
                var itemGroupItem6 = void 0;
                var length_2 = (results.length - 1) + 5;
                var fixIndex = 5;
                var fixIndexValue = 5;
                for (var i = 0; i <= (results.length - 1) + 5; i++) {
                    if (fixIndex == i) {
                        if ((i - fixIndexValue) + 5 <= length_2) {
                            itemGroupItem1Id = results[i - fixIndexValue].Id;
                            itemGroupItem1 = results[i - fixIndexValue].Item;
                        }
                        else {
                            itemGroupItem1Id = " ";
                            itemGroupItem1 = " ";
                        }
                        if (((i + 1) - fixIndexValue) + 5 <= length_2) {
                            itemGroupItem2Id = results[(i + 1) - fixIndexValue].Id;
                            itemGroupItem2 = results[(i + 1) - fixIndexValue].Item;
                        }
                        else {
                            itemGroupItem2Id = " ";
                            itemGroupItem2 = " ";
                        }
                        if (((i + 2) - fixIndexValue) + 5 <= length_2) {
                            itemGroupItem3Id = results[(i + 2) - fixIndexValue].Id;
                            itemGroupItem3 = results[(i + 2) - fixIndexValue].Item;
                        }
                        else {
                            itemGroupItem3Id = " ";
                            itemGroupItem3 = " ";
                        }
                        if (((i + 3) - fixIndexValue) + 5 <= length_2) {
                            itemGroupItem4Id = results[(i + 3) - fixIndexValue].Id;
                            itemGroupItem4 = results[(i + 3) - fixIndexValue].Item;
                        }
                        else {
                            itemGroupItem4Id = " ";
                            itemGroupItem4 = " ";
                        }
                        if (((i + 4) - fixIndexValue) + 5 <= length_2) {
                            itemGroupItem5Id = results[(i + 4) - fixIndexValue].Id;
                            itemGroupItem5 = results[(i + 4) - fixIndexValue].Item;
                        }
                        else {
                            itemGroupItem5Id = " ";
                            itemGroupItem5 = " ";
                        }
                        if (((i + 5) - fixIndexValue) + 5 <= length_2) {
                            itemGroupItem6Id = results[(i + 5) - fixIndexValue].Id;
                            itemGroupItem6 = results[(i + 5) - fixIndexValue].Item;
                        }
                        else {
                            itemGroupItem6Id = " ";
                            itemGroupItem6 = " ";
                        }
                        itemGroupItemObsevableArray.push({
                            itemGroupItem1Id: itemGroupItem1Id,
                            itemGroupItem1: itemGroupItem1,
                            itemGroupItem2Id: itemGroupItem2Id,
                            itemGroupItem2: itemGroupItem2,
                            itemGroupItem3Id: itemGroupItem3Id,
                            itemGroupItem3: itemGroupItem3,
                            itemGroupItem4Id: itemGroupItem4Id,
                            itemGroupItem4: itemGroupItem4,
                            itemGroupItem5Id: itemGroupItem5Id,
                            itemGroupItem5: itemGroupItem5,
                            itemGroupItem6Id: itemGroupItem6Id,
                            itemGroupItem6: itemGroupItem6,
                        });
                        fixIndex += 6;
                    }
                }
            }
            // (<HTMLButtonElement>document.getElementById("refresh-Item-group")).click();
            // (<HTMLButtonElement>document.getElementById("set-table-group-selectedValue")).click();
            // setTimeout(() => {
            //
            //     (<HTMLButtonElement>document.getElementById("load-table-data")).click();
            // }, 200);
        });
        return itemGroupItemObsevableArray;
    };
    //MSTTABLE
    Software_PostouchDetail_Service.prototype.getListItem = function (Id) {
        var tableObsevableArray = new wijmo.collections.ObservableArray();
        var url = "http://localhost:2558/api/table/list/" + Id;
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
                var length_3 = (results.length - 1) + 5;
                var fixIndex = 5;
                var fixIndexValue = 5;
                for (var i = 0; i <= (results.length - 1) + 5; i++) {
                    if (fixIndex == i) {
                        if ((i - fixIndexValue) + 5 <= length_3) {
                            tableNo1Id = results[i - fixIndexValue].Id;
                            tableNo1 = results[i - fixIndexValue].TableCode;
                        }
                        else {
                            tableNo1Id = " ";
                            tableNo1 = " ";
                        }
                        if (((i + 1) - fixIndexValue) + 5 <= length_3) {
                            tableNo2Id = results[(i + 1) - fixIndexValue].Id;
                            tableNo2 = results[(i + 1) - fixIndexValue].TableCode;
                        }
                        else {
                            tableNo2Id = " ";
                            tableNo2 = " ";
                        }
                        if (((i + 2) - fixIndexValue) + 5 <= length_3) {
                            tableNo3Id = results[(i + 2) - fixIndexValue].Id;
                            tableNo3 = results[(i + 2) - fixIndexValue].TableCode;
                        }
                        else {
                            tableNo3Id = " ";
                            tableNo3 = " ";
                        }
                        if (((i + 3) - fixIndexValue) + 5 <= length_3) {
                            tableNo4Id = results[(i + 3) - fixIndexValue].Id;
                            tableNo4 = results[(i + 3) - fixIndexValue].TableCode;
                        }
                        else {
                            tableNo4Id = " ";
                            tableNo4 = " ";
                        }
                        if (((i + 4) - fixIndexValue) + 5 <= length_3) {
                            tableNo5Id = results[(i + 4) - fixIndexValue].Id;
                            tableNo5 = results[(i + 4) - fixIndexValue].TableCode;
                        }
                        else {
                            tableNo5Id = " ";
                            tableNo5 = " ";
                        }
                        if (((i + 5) - fixIndexValue) + 5 <= length_3) {
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
            }
        });
        return tableObsevableArray;
    };
    return Software_PostouchDetail_Service;
}());
Software_PostouchDetail_Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http,
        ng2_toastr_1.ToastsManager])
], Software_PostouchDetail_Service);
exports.Software_PostouchDetail_Service = Software_PostouchDetail_Service;
//# sourceMappingURL=software_postouchdetail.service.js.map