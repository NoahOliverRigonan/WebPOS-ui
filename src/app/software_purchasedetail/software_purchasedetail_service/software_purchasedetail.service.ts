import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class Software_PurchaseDetail_Service {
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

    public getPurchaseOrderById(Id: number): wijmo.collections.ObservableArray {
        let purchaseOrderObservableArray = new wijmo.collections.ObservableArray();
        let url = "http://localhost:2558/api/purchaseOrder/get/" + Id;
        this.http.get(url, this.options).subscribe(
            response => {
                var results = response.json();
                if (results.length > 0) {
                    for (var i = 0; i <= results.length - 1; i++) {
                        purchaseOrderObservableArray.push({
                            Id: results[i].Id,
                            PeriodId: results[i].PeriodId,
                            PurchaseOrderDate: results[i].PurchaseOrderDate,
                            PurchaseOrderNumber: results[i].PurchaseOrderNumber,
                            Amount: results[i].Amount,
                            SupplierId: results[i].SupplierId,
                            Remarks: results[i].Remarks,
                            PreparedBy: results[i].PreparedBy,
                            Prepared: results[i].Prepared,
                            CheckedBy: results[i].CheckedBy,
                            ApprovedBy: results[i].ApprovedBy,
                            IsLocked: results[i].IsLocked,
                            EntryUserId: results[i].EntryUserId,
                            EntryDateTime: results[i].EntryDateTime,
                            UpdateUserId: results[i].UpdateUserId,
                            UpdateDateTime: results[i].UpdateDateTime,
                            listPreparedBy: results[i].listPreparedBy,
                            listApprovedBy: results[i].listApprovedBy,
                            listCheckedBy: results[i].listCheckedBy,
                            listSupplier: results[i].listSupplier,
                            listPeriod: results[i].listPeriod,
                            listItem: results[i].listItem,
                            listUnit: results[i].listUnit,
                        });
                        (<HTMLButtonElement>document.getElementById("set-value-fields")).click();
                    }
                }
            }
        );
        return purchaseOrderObservableArray;
    }

    // update USER
    public putPurchaseOrderData(id: number, purchaseOrderObject: Object, toastr: ToastsManager) {
        let url = "http://localhost:2558/api/purchaseOrder/put/" + id;
        this.http.put(url, JSON.stringify(purchaseOrderObject), this.options).subscribe(
            response => {
                this.toastr.success('', 'Successful');
                setTimeout(() => {
                    this.router.navigate(['/purchase'])
                }, 1000)
            },
            error => {
                this.toastr.error("Error");
            }
        )
    }
}

@Injectable()
export class Software_PurchaseDetailLine_Service {
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
    public getPurchaseOrderLineList(purchaseOrderLineId: number): wijmo.collections.ObservableArray {
        let purchaseOrderLineObservableArray = new wijmo.collections.ObservableArray();
        let url = "http://localhost:2558/api/purchaseOrderLine/get/" + purchaseOrderLineId;
        this.http.get(url, this.options).subscribe(
            response => {
                var results = response.json();
                if (results.length > 0) {
                    for (var i = 0; i <= results.length - 1; i++) {
                        purchaseOrderLineObservableArray.push({
                            Id: results[i].Id,
                            PurchaseOrderId: results[i].PurchaseOrderId,
                            ItemId: results[i].ItemId,
                            Item: results[i].Item,
                            UnitId: results[i].UnitId,
                            Unit: results[i].Unit,
                            Quantity: results[i].Quantity,
                            Cost: results[i].Cost,
                            Amount: results[i].Amount,
                        });
                        // (<HTMLButtonElement>document.getElementById("set-value-fields")).click();
                        // for (var j = 0; j < results[i].listUnit.length; j++) {
                        //     console.log(results[i].listUnit[j].Unit + " - " + (j + 1));
                        // }
                    }
                }
            }
        );
        return purchaseOrderLineObservableArray;
    }

    public postPurchaseOrderLineData(POLineObject: Object, toastr: ToastsManager) {
        let url = "http://localhost:2558/api/purchaseOrderLine/post";
        this.http.post(url, JSON.stringify(POLineObject), this.options).subscribe(
            response => {
                this.toastr.success('', 'Success');
                (<HTMLButtonElement>document.getElementById('refreshGrid')).click();
                (<HTMLButtonElement>document.getElementById('clear-fields')).click();
            },
            error => {
                this.toastr.error('', 'Bad Request');
            },
        )
    }


    public deletePurchaseOrderLine(id: number, toastr: ToastsManager) {
        let url = "http://localhost:2558/api/purchaseOrderLine/delete/" + id;
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
