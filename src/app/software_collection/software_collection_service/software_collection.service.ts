import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class Software_Collection_Service {
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


    //GET PURCHASE ORDER
    public getCollectionList(): wijmo.collections.ObservableArray {
        let stockInObservableArray = new wijmo.collections.ObservableArray();
        let url = "http://localhost:2558/api/Collection/list";
        this.http.get(url, this.options).subscribe(
            response => {
                var results = response.json();
                if (results.length > 0) {
                    for (var i = 0; i < results.length; i++) {
                        stockInObservableArray.push({
                            Id: results[i].Id,
                            PeriodId: results[i].PeriodId,
                            CollectionDate: results[i].CollectionDate,
                            CollectionNumber: results[i].CollectionNumber,
                            TerminalId: results[i].TerminalId,
                            Terminal: results[i].Terminal,
                            ManualORNumber: results[i].ManualORNumber,
                            CustomerId: results[i].CustomerId,
                            Customer: results[i].Customer,
                            Remarks: results[i].Remarks,
                            SalesId: results[i].SalesId,
                            SalesNumber: results[i].SalesNumber,
                            SalesBalanceAmount: results[i].SalesBalanceAmount,
                            Amount: results[i].Amount,
                            TenderAmount: results[i].TenderAmount,
                            ChangeAmount: results[i].ChangeAmount,
                            PreparedBy: results[i].PreparedBy,
                            CheckedBy: results[i].CheckedBy,
                            ApprovedBy: results[i].ApprovedBy,
                            IsCancelled: results[i].IsCancelled,
                            IsLocked: results[i].IsLocked,
                            EntryUserId: results[i].EntryUserId,
                            EntryDateTime: results[i].EntryDateTime,
                            UpdateUserId: results[i].UpdateUserId,
                            UpdateDateTime: results[i].UpdateDateTime,
                        });
                    }
                    // (<HTMLButtonElement>document.getElementById("set-value-fields")).click();
                } else {
                    console.log("No data");
                }
            }
        );
        return stockInObservableArray;
    }

    // ADD PURCHASE ORDER
    public postCollectionData(collectionObject: Object, toastr: ToastsManager) {
        let url = "http://localhost:2558/api/Collection/post";
        this.http.post(url, JSON.stringify(collectionObject), this.options).subscribe(
            response => {
                var results = response.json();
                if (results > 0) {
                    this.router.navigate(['/collectiondetail', results]);
                } else {
                    this.toastr.error('', 'Bad Request');
                }
            },
            error => {
                this.toastr.error('', 'Bad Request');
            },
        )
    }

    //DELETE PURCHASE ORDER
    public deleteCollection(id: number, toastr: ToastsManager) {
        let url = "http://localhost:2558/api/Collection/delete/" + id;
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
