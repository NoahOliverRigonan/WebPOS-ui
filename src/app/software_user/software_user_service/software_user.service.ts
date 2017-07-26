import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class Software_User_Service {
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
    public getUser(): wijmo.collections.ObservableArray {
        let listUserObservableArray = new wijmo.collections.ObservableArray();
        let url = "http://localhost:2558/api/user/list";
        this.http.get(url, this.options).subscribe(
            response => {
                var results = response.json();
                if (results.length > 0) {
                    for (var i = 0; i < results.length; i++) {
                        listUserObservableArray.push({
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
                        });
                    }
                    // (<HTMLButtonElement>document.getElementById("load-item-data")).click();
                } else {
                    console.log("No data");
                }
            }
        );
        return listUserObservableArray;
    }

    public postUserData(userObject: Object, toastr: ToastsManager) {
        let url = "http://localhost:2558/api/user/post";
        this.http.post(url, JSON.stringify(userObject), this.options).subscribe(
            response => {
                var results = response.json();
                if (results > 0) {
                    this.router.navigate(['/userdetail', results]);
                } else {
                    this.toastr.error('', 'Error');
                }
            },
            error => {
                this.toastr.error('', 'Bad Request');
            },
        )
    }


 

    public deleteUserData(id: number, toastr: ToastsManager) {
        let url = "http://localhost:2558/api/user/delete/" + id;
        this.http.delete(url, this.options).subscribe(
            response => {
                this.toastr.info('', 'Successfully Deleted');
                setTimeout(() => {
                    (<HTMLButtonElement>document.getElementById("refreshGrid")).click();
                }, 1000)
            },
            error => {
                this.toastr.error(' ', 'Bad Request');
            }
        )
    }
}

