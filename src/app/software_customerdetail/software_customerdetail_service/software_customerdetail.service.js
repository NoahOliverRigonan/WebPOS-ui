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
var Software_Customerdetail_Service = (function () {
    function Software_Customerdetail_Service(router, http, toastr) {
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
    Software_Customerdetail_Service.prototype.getCustomerDetail = function (id) {
        var discountObservableArray = new wijmo.collections.ObservableArray();
        var url = "http://localhost:2558/api/customer/get/" + id;
        this.http.get(url, this.options).subscribe(function (response) {
            var results = response.json();
            if (results.length > 0) {
                for (var i = 0; i < results.length; i++) {
                    discountObservableArray.push({
                        Id: results[i].Id,
                        Customer: results[i].Customer,
                        Address: results[i].Address,
                        ContactPerson: results[i].ContactPerson,
                        ContactNumber: results[i].ContactNumber,
                        CreditLimit: results[i].CreditLimit,
                        TermId: results[i].TermId,
                        TIN: results[i].TIN,
                        WithReward: results[i].WithReward,
                        RewardNumber: results[i].RewardNumber,
                        RewardConversion: results[i].RewardConversion,
                        AccountId: results[i].AccountId,
                        EntryUserId: results[i].EntryUserId,
                        EntryDateTime: results[i].EntryDateTime,
                        UpdateUserId: results[i].UpdateUserId,
                        UpdateDateTime: results[i].UpdateDateTime,
                        IsLocked: results[i].IsLocked,
                        listItemPrice: results[i].listOfItemPrice,
                        listTerm: results[i].listTerm,
                        listAccount: results[i].listAccount,
                    });
                }
                document.getElementById("set-fields-values").click();
            }
            else {
                console.log("No data");
            }
        });
        return discountObservableArray;
    };
    // public deleteDiscountItem(id: number, toastr: ToastsManager) {
    //     let url = "http://localhost:2558/api/discountitem/delete/" + id;
    //     this.http.delete(url, this.options).subscribe(
    //         response => {
    //             var result = response.json();
    //             if (result > 0) {
    //                 this.router.navigate(['/discount', result]);
    //                 setTimeout(() => {
    //                     (<HTMLButtonElement>document.getElementById("refreshGrid")).click();
    //                 }, 1000)
    //             }
    //         },
    //         error => {
    //             (<HTMLButtonElement>document.getElementById("delete-modal-warning-id")).click();
    //         }
    //     )
    // }
    // PUT DISCOUNT
    Software_Customerdetail_Service.prototype.putCustomerData = function (id, discountObject, toastr) {
        var _this = this;
        var url = "http://localhost:2558/api/customer/put/" + id;
        this.http.put(url, JSON.stringify(discountObject), this.options).subscribe(function (response) {
            _this.toastr.success('', 'Save Successful');
            _this.router.navigate(['/customer']);
        }, function (error) {
            alert("Error");
        });
    };
    return Software_Customerdetail_Service;
}());
Software_Customerdetail_Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http,
        ng2_toastr_1.ToastsManager])
], Software_Customerdetail_Service);
exports.Software_Customerdetail_Service = Software_Customerdetail_Service;
// @Injectable()
// export class Software_DiscountItem_Service {
//     //  Global Variables
//     private headers = new Headers({
//         'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
//         'Content-Type': 'application/json'
//     });
//     private options = new RequestOptions({ headers: this.headers });
//     constructor(
//         private router: Router,
//         private http: Http,
//         private toastr: ToastsManager,
//         private activateroute: ActivatedRoute,
//     ) { }
//     //GET DISCOUNT ITEM
//     public getItemDiscountDetail(id: number): wijmo.collections.ObservableArray {
//         let discountItemObservableArray = new wijmo.collections.ObservableArray();
//         let url = "http://localhost:2558/api/discountitem/get/" + id;
//         this.http.get(url, this.options).subscribe(
//             response => {
//                 var results = response.json();
//                 if (results.length > 0) {
//                     for (var i = 0; i < results.length; i++) {
//                         discountItemObservableArray.push({
//                             Id: results[i].Id,
//                             ItemId: results[i].ItemId,
//                             DiscountId: results[i].DiscountId,
//                             ItemCode: results[i].ItemCode,
//                             Item: results[i].Item,
//                         });
//                     }
//                     // (<HTMLButtonElement>document.getElementById("set-value-fields-item")).click();
//                 } else {
//                     console.log("No data");
//                 }
//             }
//         );
//         return discountItemObservableArray;
//     }
//     public postDiscountItem(discountItemObject: Object, toastr: ToastsManager) {
//         let url = "http://localhost:2558/api/discountitem/post";
//         this.http.post(url, JSON.stringify(discountItemObject), this.options).subscribe(
//             response => {
//                 this.toastr.success('', 'Success');
//                 (<HTMLButtonElement>document.getElementById('refreshGrid')).click();
//             },
//             error => {
//                 this.toastr.error('', 'Bad Request');
//             },
//         )
//     }
//     public deleteDiscountItem(id: number, toastr: ToastsManager) {
//         let url = "http://localhost:2558/api/discountitem/delete/" + id;
//         this.http.delete(url, this.options).subscribe(
//             response => {
//                 this.toastr.info('', 'Successfully Deleted');
//                 setTimeout(() => {
//                     (<HTMLButtonElement>document.getElementById("refreshGrid")).click();
//                 }, 1000)
//             },
//             error => {
//                 this.toastr.error(' ', 'Bad Request');
//             }
//         )
//     }
// }
//# sourceMappingURL=software_customerdetail.service.js.map