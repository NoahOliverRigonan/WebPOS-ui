import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class Software_UserDetail_Service {
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
    ) { }

    public getUserList(Id: number): wijmo.collections.ObservableArray {
        let userObservableArray = new wijmo.collections.ObservableArray();
        let url = "http://localhost:2558/api/user/list/" + Id;
        this.http.get(url, this.options).subscribe(
            response => {
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
                        (<HTMLButtonElement>document.getElementById("set-value-fields")).click();
                        // for (var j = 0; j < results[i].listUnit.length; j++) {
                        //     console.log(results[i].listUnit[j].Unit + " - " + (j + 1));
                        // }
                    }
                }
            }
        );
        return userObservableArray;
    }

    // update ITEM
    public putUserData(id: number, userObject: Object, toastr: ToastsManager) {
        let url = "http://localhost:2558/api/user/put/" + id;
        this.http.put(url, JSON.stringify(userObject), this.options).subscribe(
            response => {
                this.toastr.success('', 'Successful');
                setTimeout(() => {
                    this.router.navigate(['/user'])
                }, 1000)
            },
            error => {
                alert("Error");
            }
        )
    }
}

