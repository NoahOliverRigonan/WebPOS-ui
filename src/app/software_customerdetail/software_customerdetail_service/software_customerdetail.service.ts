import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class Software_Customerdetail_Service {
    //  Global Variables
    private headers = new Headers({
        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        'Content-Type': 'application/json'
    });
    private options = new RequestOptions({ headers: this.headers });

    constructor(
        private router: Router,
        private http: Http,
        private toastr: ToastsManager
    ) { }



    public getCustomerDetail(id: number): wijmo.collections.ObservableArray {
        let discountObservableArray = new wijmo.collections.ObservableArray();
        let url = "http://localhost:2558/api/customer/get/" + id;
        this.http.get(url, this.options).subscribe(
            response => {
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
                    (<HTMLButtonElement>document.getElementById("set-fields-values")).click();
                } else {
                    console.log("No data");
                }
            }
        );
        return discountObservableArray;
    }

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
    public putCustomerData(id: number, discountObject: Object, toastr: ToastsManager) {
        let url = "http://localhost:2558/api/customer/put/" + id;
        this.http.put(url, JSON.stringify(discountObject), this.options).subscribe(
            response => {
                this.toastr.success('', 'Save Successful');
                this.router.navigate(['/customer']);
            },
            error => {
                alert("Error");
            }
        )
    }

}

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


