import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class Software_StockIn_Service {
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


    //GET STOCK IN
    public getStockInList(): wijmo.collections.ObservableArray {
        let stockInObservableArray = new wijmo.collections.ObservableArray();
        let url = "http://localhost:2558/api/stockIn/list";
        this.http.get(url, this.options).subscribe(
            response => {
                var results = response.json();
                if (results.length > 0) {
                    for (var i = 0; i < results.length; i++) {
                        stockInObservableArray.push({
                            Id: results[i].Id,
                            PeriodId: results[i].PeriodId,
                            StockInDate: results[i].StockInDate,
                            StockInNumber: results[i].StockInNumber,
                            SupplierId: results[i].SupplierId,
                            Supplier: results[i].Supplier,
                            Remarks: results[i].Remarks,
                            IsReturn: results[i].IsReturn,
                            CollectionId: results[i].CollectionId,
                            PurchaseOrderId: results[i].PurchaseOrderId,
                            PreparedBy: results[i].PreparedBy,
                            CheckedBy: results[i].CheckedBy,
                            ApprovedBy: results[i].ApprovedBy,
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

    // ADD STOCKIN
    public postStockInData(stockInObject: Object, toastr: ToastsManager) {
        let url = "http://localhost:2558/api/stockIn/post";
        this.http.post(url, JSON.stringify(stockInObject), this.options).subscribe(
            response => {
                var results = response.json();
                if (results > 0) {
                    this.router.navigate(['/stockindetail', results]);
                } else {
                    this.toastr.error('', 'Bad Request');
                }
            },
            error => {
                this.toastr.error('', 'Bad Request');
            },
        )
    }

    //DELETE STOCK IN LIST
    public deleteStockInList(id: number, toastr: ToastsManager) {
        let url = "http://localhost:2558/api/stockIn/delete/" + id;
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
