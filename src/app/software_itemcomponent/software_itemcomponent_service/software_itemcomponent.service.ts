import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Injectable()
export class Software_ItemComponent_Service {
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
    public getListOfItem(): wijmo.collections.ObservableArray {
        let itemObsevableArray = new wijmo.collections.ObservableArray();
        let url = "http://localhost:2558/api/itemComponent/list";
        this.http.get(url, this.options).subscribe(
            response => {
                var results = response.json();
                if (results.length > 0) {
                    for (var i = 0; i <= results.length - 1; i++) {
                        itemObsevableArray.push({
                            Id: results[i].Id,
                            ItemId: results[i].ItemId,
                            Item: results[i].Item,
                            ComponentItemId: results[i].ComponentItemId,
                            UnitId: results[i].UnitId,
                            Quantity: results[i].Quantity,
                            Cost: results[i].Cost,
                            Amount: results[i].Amount,
                            IsPrinted: results[i].IsPrinted,
                        });
                        // for (var j = 0; j < results[i].listUnit.length; j++) {
                        //     console.log(results[i].listUnit[j].Unit + " - " + (j + 1));
                        // }
                    }
                }
            }
        );
        return itemObsevableArray;
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
