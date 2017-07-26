import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class Software_Purchase_Service {
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
    public getPurchaseOrderList(): wijmo.collections.ObservableArray {
        let stockInObservableArray = new wijmo.collections.ObservableArray();
        let url = "http://localhost:2558/api/purchaseOrder/list";
        this.http.get(url, this.options).subscribe(
            response => {
                var results = response.json();
                if (results.length > 0) {
                    for (var i = 0; i < results.length; i++) {
                        stockInObservableArray.push({
                            Id: results[i].Id,
                            PeriodId: results[i].PeriodId,
                            PurchaseOrderDate: results[i].PurchaseOrderDate,
                            PurchaseOrderNumber: results[i].PurchaseOrderNumber,
                            Amount: results[i].Amount,
                            SupplierId: results[i].SupplierId,
                            Supplier: results[i].Supplier,
                            Remarks: results[i].Remarks,
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
                    (<HTMLButtonElement>document.getElementById("set-value-fields")).click();
                } else {
                    console.log("No data");
                }
            }
        );
        return stockInObservableArray;
    }

    // ADD PURCHASE ORDER
    public postPurchaseOrderData(purchaseOrderObject: Object, toastr: ToastsManager) {
        let url = "http://localhost:2558/api/purchaseOrder/post";
        this.http.post(url, JSON.stringify(purchaseOrderObject), this.options).subscribe(
            response => {
                var results = response.json();
                if (results > 0) {
                    this.router.navigate(['/purchasedetail', results]);
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
    public deletePurchaseOrder(id: number, toastr: ToastsManager) {
        let url = "http://localhost:2558/api/purchaseOrder/delete/" + id;
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
