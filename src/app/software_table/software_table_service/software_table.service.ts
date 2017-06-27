import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class Software_TableGroup_Service {
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
        private activateroute: ActivatedRoute,
        // private vcRef: ViewContainerRef
    ) {
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
    public getTableGroup(): wijmo.collections.ObservableArray {
        let tableGroupObservableArray = new wijmo.collections.ObservableArray();
        let url = "http://localhost:2558/api/tableGroup/list";
        this.http.get(url, this.options).subscribe(
            response => {
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
                    // (<HTMLButtonElement>document.getElementById("set-value-fields")).click();

                } else {
                    console.log("No data");
                }
            }
        );
        return tableGroupObservableArray;
    }


    //http://localhost:2558/api/item/post
    //ADD ITEM
    // toastr: ToastsManager



    // update ITEM
    // public putItemData(id: number, itemObject: Object, toastr: ToastsManager) {
    //     let url = "http://localhost:2558/api/item/put/" + id;
    //     this.http.put(url, JSON.stringify(itemObject), this.options).subscribe(
    //         response => {
    //             this.toastr.success('', 'Edit Successful');
    //             setTimeout(() => {
    //                 this.router.navigate(['/item'])
    //             }, 1000)
    //         },
    //         error => {
    //             alert("Error");
    //         }
    //     )
    // }

}
