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

    // update USER
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
                this.toastr.error("Error");
            }
        )
    }
}

@Injectable()
export class Software_UserForm_Service {
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

    //GET USER FORM
    public getUserFormList(userId:number): wijmo.collections.ObservableArray {
        let userFormObservableArray = new wijmo.collections.ObservableArray();
        let url = "http://localhost:2558/api/userform/list/" + userId;
        this.http.get(url, this.options).subscribe(
            response => {
                var results = response.json();
                if (results.length > 0) {
                    for (var i = 0; i <= results.length - 1; i++) {
                        userFormObservableArray.push({
                            Id: results[i].Id,
                            FormId: results[i].FormId,
                            FormDescription: results[i].FormDescription,
                            UserId: results[i].UserId,
                            CanDelete: results[i].CanDelete,
                            CanAdd: results[i].CanAdd,
                            CanLock: results[i].CanLock,
                            CanUnlock: results[i].CanUnlock,
                            CanPrint: results[i].CanPrint,
                            CanPreview: results[i].CanPreview,
                            CanEdit: results[i].CanEdit,
                            CanTender: results[i].CanTender,
                            CanDiscount: results[i].CanDiscount,
                            CanView: results[i].CanView,
                            CanSplit: results[i].CanSplit,
                            CanCancel: results[i].CanCancel,
                            CanReturn: results[i].CanReturn,
                        });
                        // (<HTMLButtonElement>document.getElementById("set-value-fields")).click();
                        // for (var j = 0; j < results[i].listUnit.length; j++) {
                        //     console.log(results[i].listUnit[j].Unit + " - " + (j + 1));
                        // }
                    }
                }
            }
        );
        return userFormObservableArray;
    }

    // GET USER FORM BY ID
    public getUserFormListById(id:number): wijmo.collections.ObservableArray {
        let userFormObservableArray = new wijmo.collections.ObservableArray();
        let url = "http://localhost:2558/api/userform/get/" + id;
        this.http.get(url, this.options).subscribe(
            response => {
                var results = response.json();
                if (results.length > 0) {
                    for (var i = 0; i <= results.length - 1; i++) {
                        userFormObservableArray.push({
                            Id: results[i].Id,
                            FormId: results[i].FormId,
                            // FormDescription: results[i].FormDescription,
                            UserId: results[i].UserId,
                            CanDelete: results[i].CanDelete,
                            CanAdd: results[i].CanAdd,
                            CanLock: results[i].CanLock,
                            CanUnlock: results[i].CanUnlock,
                            CanPrint: results[i].CanPrint,
                            CanPreview: results[i].CanPreview,
                            CanEdit: results[i].CanEdit,
                            CanTender: results[i].CanTender,
                            CanDiscount: results[i].CanDiscount,
                            CanView: results[i].CanView,
                            CanSplit: results[i].CanSplit,
                            CanCancel: results[i].CanCancel,
                            CanReturn: results[i].CanReturn,
                        });
                        // (<HTMLButtonElement>document.getElementById("modalAddRights")).click();
                        // for (var j = 0; j < results[i].listUnit.length; j++) {
                        //     console.log(results[i].listUnit[j].Unit + " - " + (j + 1));
                        // }
                    }
                }
            }
        );
        return userFormObservableArray;
    }

    public postUserFormData(userObject: Object, toastr: ToastsManager) {
        let url = "http://localhost:2558/api/userform/post";
        this.http.post(url, JSON.stringify(userObject), this.options).subscribe(
            response => {
                this.toastr.success('', 'Success');
                (<HTMLButtonElement>document.getElementById('refreshGrid')).click();
            },
            error => {
                this.toastr.error('', 'Bad Request');
            },
        )
    }


    public deleteUserFormData(id: number, toastr: ToastsManager) {
        let url = "http://localhost:2558/api/userform/delete/" + id;
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

    // update USER FORM
    public putUserFormData(id: number, userObject: Object, toastr: ToastsManager) {
        let url = "http://localhost:2558/api/userform/put/" + id;
        this.http.put(url, JSON.stringify(userObject), this.options).subscribe(
            response => {
                (<HTMLButtonElement>document.getElementById("modalAddRights")).click();
                // setTimeout(() => {
                //     this.router.navigate(['/userdetail'])
                // }, 1000)
            },
            error => {
                this.toastr.error("Error");
            }
        )
    }
}
