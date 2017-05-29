import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';

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
        // private toastr: ToastsManager
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
                    (<HTMLButtonElement>document.getElementById("set-value-fields")).click();
                } else {
                    console.log("No data");
                }
            }
        );
        return discountItemObservableArray;
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
