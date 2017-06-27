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
var Software_UserDetail_Service = (function () {
    function Software_UserDetail_Service(router, http, toastr, activateroute) {
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
    Software_UserDetail_Service.prototype.getUserList = function (Id) {
        var userObservableArray = new wijmo.collections.ObservableArray();
        var url = "http://localhost:2558/api/user/list/" + Id;
        this.http.get(url, this.options).subscribe(function (response) {
            var results = response.json();
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    userObservableArray.push({
                        Id: results[i].Id,
                        UserName: results[i].UserName,
                        Password: results[i].Password,
                        FullName: results[i].FullName,
                        UserCardNumber: results[i].UserCardNumber,
                        EntryUserId: results[i].EntryUserId,
                        EntryDateTime: results[i].EntryDateTime,
                        UpdateUserId: results[i].UpdateUserId,
                        UpdateDateTime: results[i].UpdateDateTime,
                        IsLocked: results[i].IsLocked,
                        AspNetUserId: results[i].AspNetUserId,
                        listMstUser: results[i].listMstUser,
                        listSysForm: results[i].listSysForm,
                    });
                    document.getElementById("set-value-fields").click();
                }
            }
        });
        return userObservableArray;
    };
    // update ITEM
    Software_UserDetail_Service.prototype.putUserData = function (id, userObject, toastr) {
        var _this = this;
        var url = "http://localhost:2558/api/user/put/" + id;
        this.http.put(url, JSON.stringify(userObject), this.options).subscribe(function (response) {
            _this.toastr.success('', 'Successful');
            setTimeout(function () {
                _this.router.navigate(['/user']);
            }, 1000);
        }, function (error) {
            alert("Error");
        });
    };
    return Software_UserDetail_Service;
}());
Software_UserDetail_Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http,
        ng2_toastr_1.ToastsManager,
        router_1.ActivatedRoute])
], Software_UserDetail_Service);
exports.Software_UserDetail_Service = Software_UserDetail_Service;
//# sourceMappingURL=software_userdetail.service.js.map