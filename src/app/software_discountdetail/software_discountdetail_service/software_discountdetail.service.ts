import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class Software_Discountdetail_Service {
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
    public getItemDiscountDetail(): wijmo.collections.ObservableArray {
        let discountItemObservableArray = new wijmo.collections.ObservableArray();
        let url = "http://localhost:2558/api/discountitem/list";
        this.http.get(url, this.options).subscribe(
            response => {
                var results = response.json();
                if (results.length > 0) {
                    discountItemObservableArray.push({
                        Id: results[0].Id,
                        ItemId: results[0].ItemId,
                        DiscountId: results[0].DiscountId,
                        ItemCode: results[0].ItemCode,
                        Item: results[0].Item,
                        listOfItemCode: results[0].listOfItemCode,
                        listOfItemDescription: results[0].listOfItemDescription,
                    });
                    (<HTMLButtonElement>document.getElementById("set-value-fields-item")).click();
                } else {
                    console.log("No data");
                }
            }
        );
        return discountItemObservableArray;
    }


    public getDiscountDetail(id: number): wijmo.collections.ObservableArray {
        let discountObservableArray = new wijmo.collections.ObservableArray();
        let url = "http://localhost:2558/api/discount/get/" + id;
        this.http.get(url, this.options).subscribe(
            response => {
                var results = response.json();
                if (results.length > 0) {
                    discountObservableArray.push({
                        Id: results[0].Id,
                        Discount: results[0].Discount,
                        DiscountRate: results[0].DiscountRate,
                        IsVatExempt: results[0].IsVatExempt,
                        IsDateScheduled: results[0].IsDateScheduled,
                        DateStart: results[0].DateStart,
                        DateEnd: results[0].DateEnd,
                        IsTimeScheduled: results[0].IsTimeScheduled,
                        TimeStart: results[0].TimeStart,
                        TimeEnd: results[0].TimeEnd,
                        IsDayScheduled: results[0].IsDayScheduled,
                        DayMon: results[0].DayMon,
                        DayTue: results[0].DayTue,
                        DayWed: results[0].DayWed,
                        DayThu: results[0].DayThu,
                        DayFri: results[0].DayFri,
                        DaySat: results[0].DaySat,
                        DaySun: results[0].DaySun,
                        EntryUserId: results[0].EntryUserId,
                        EntryDateTime: results[0].EntryDateTime,
                        UpdateUserId: results[0].UpdateUserId,
                        UpdateDateTime: results[0].UpdateDateTime,
                        IsLocked: results[0].IsLocked,
                    });
                    (<HTMLButtonElement>document.getElementById("set-value-fields-discountdetail")).click();
                } else {
                    console.log("No data");
                }
            }
        );
        return discountObservableArray;
    }

    public deleteDiscountItem(id: number, toastr: ToastsManager) {
        let url = "http://localhost:2558/api/discountitem/delete/" + id;
        this.http.delete(url, this.options).subscribe(
            response => {
                var result = response.json();
                if (result > 0) {
                    this.router.navigate(['/discount', result]);
                    setTimeout(() => {
                        (<HTMLButtonElement>document.getElementById("refreshGrid")).click();
                    }, 1000)
                }

            },
            error => {
                (<HTMLButtonElement>document.getElementById("delete-modal-warning-id")).click();
            }
        )
    }

    //  public postItemData(itemObject: Object) {
    //     let url = "http://localhost:2558/api/item/post";
    //     this.http.post(url, JSON.stringify(itemObject), this.options).subscribe(
    //         response => {
    //             var results = response.json();
    //             if (results > 0) {
    //                 this.router.navigate(['/itemdetail', results]);
    //             } else {
    //                 alert("Error");
    //             }
    //         },
    //         error => {
    //             alert("Error");
    //         }
    //     )
    // }

    //http://localhost:2558/api/item/post
    //ADD ITEM
    // toastr: ToastsManager



    // update ITEM
    // public putItemData(id: number, itemObject: Object) {
    //     let url = "http://localhost:2558/api/item/put/" + id;
    //     this.http.put(url, JSON.stringify(itemObject), this.options).subscribe(
    //         response => {
    //             console.log('', 'Save Successful');
    //         },
    //         error => {
    //             alert("Error");
    //         }
    //     )
    // }

}
