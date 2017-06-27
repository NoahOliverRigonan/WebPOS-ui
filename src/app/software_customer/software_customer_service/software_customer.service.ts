import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Injectable()
export class Software_Customer_Service {
    //  Global Variables
    private headers = new Headers({
        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        'Content-Type': 'application/json'
    });
    private options = new RequestOptions({ headers: this.headers });

    constructor(
        private router: Router,
        private http: Http,
        private toastr: ToastsManager,
        private slimLoadingBarService: SlimLoadingBarService
    ) { }


    //MSTTABLE
    public getCustomerList(): wijmo.collections.ObservableArray {
        let customerObsevableArray = new wijmo.collections.ObservableArray();
        let url = "http://localhost:2558/api/customer/list";
        this.http.get(url, this.options).subscribe(
            response => {
                var results = response.json();
                if (results.length > 0) {
                    for (var i = 0; i <= results.length - 1; i++) {
                        customerObsevableArray.push({
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
                            // listUnit: results[i].listUnit.Unit,
                        });

                        // for (var j = 0; j < results[i].listUnit.length; j++) {
                        //     console.log(results[i].listUnit[j].Unit + " - " + (j + 1));
                        // }
                    }
                }
            }
        );
        return customerObsevableArray;
    }
    // public startLoading() {
    //     this.slimLoadingBarService.progress = 30;
    //     this.slimLoadingBarService.start();
    // }

    // delete ITEM
    // public deleteItem(id: number, toastr: ToastsManager) {
    //     let url = "http://localhost:2558/api/item/delete/" + id;
    //     this.http.delete(url, this.options).subscribe(
    //         response => {
    //             this.startLoading();
    //             this.toastr.info('', 'Successfully Deleted');
    //             setTimeout(() => {
    //                 (<HTMLButtonElement>document.getElementById("refreshGrid")).click();
    //             }, 1000)
    //         },
    //         error => {
    //             this.toastr.error(' ', 'Bad Request');
    //         }
    //     )
    // }

    // public postItemData(itemObject: Object, toastr: ToastsManager) {
    //     let url = "http://localhost:2558/api/item/post";
    //     this.http.post(url, JSON.stringify(itemObject), this.options).subscribe(
    //         response => {
    //             var results = response.json();
    //             if (results > 0) {
    //                 this.router.navigate(['/itemdetail', results]);
    //             } else {
    //                 this.toastr.error('', 'Bad Request');
    //             }
    //         },
    //         error => {
    //             this.toastr.error('', 'Bad Request');
    //         },
    //     )
    // }


}
