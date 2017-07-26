import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class Software_StockInDetail_Service {
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

    public getStockListById(Id: number): wijmo.collections.ObservableArray {
        let stockInObservableArray = new wijmo.collections.ObservableArray();
        let url = "http://localhost:2558/api/stockin/get/" + Id;
        this.http.get(url, this.options).subscribe(
            response => {
                var results = response.json();
                if (results.length > 0) {
                    for (var i = 0; i <= results.length - 1; i++) {
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
                            listCategoryItem: results[i].listCategoryItem,
                            listSupplier: results[i].listSupplier,
                            listPurchaseOrder: results[i].listPurchaseOrder,
                            listPeriod: results[i].listPeriod,
                            //FOR STOCK IN LINE LIST
                            listItem: results[i].listItem,
                            listUnit: results[i].listUnit,
                            listAccount: results[i].listAccount,
                        });
                        (<HTMLButtonElement>document.getElementById("set-value-fields")).click();
                    }
                }
            }
        );
        return stockInObservableArray;
    }

    // update USER
    public putStockInData(id: number, stockInObject: Object, toastr: ToastsManager) {
        let url = "http://localhost:2558/api/stockIn/put/" + id;
        this.http.put(url, JSON.stringify(stockInObject), this.options).subscribe(
            response => {
                this.toastr.success('', 'Successful');
                setTimeout(() => {
                    this.router.navigate(['/stock-in'])
                }, 1000)
            },
            error => {
                this.toastr.error("Error");
            }
        )
    }
}

@Injectable()
export class Software_StockInLine_Service {
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
    public getUserFormList(userId: number): wijmo.collections.ObservableArray {
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
    public getStockInLineById(id: number): wijmo.collections.ObservableArray {
        let stockInLineObservableArray = new wijmo.collections.ObservableArray();
        let url = "http://localhost:2558/api/stockInLine/get/" + id;
        this.http.get(url, this.options).subscribe(
            response => {
                var results = response.json();
                if (results.length > 0) {
                    for (var i = 0; i <= results.length - 1; i++) {
                        stockInLineObservableArray.push({
                            Id: results[i].Id,
                            StockInId: results[i].StockInId,
                            ItemId: results[i].ItemId,
                            Item: results[i].Item,
                            UnitId: results[i].UnitId,
                            Unit: results[i].Unit,
                            Quantity: results[i].Quantity,
                            Cost: results[i].Cost,
                            Amount: results[i].Amount,
                            ExpiryDate: results[i].ExpiryDate,
                            LotNumber: results[i].LotNumber,
                            AssetAccountId: results[i].AssetAccountId,
                            AssetAccount: results[i].AssetAccount,
                        });
                        // (<HTMLButtonElement>document.getElementById("modalAddRights")).click();
                        // for (var j = 0; j < results[i].listUnit.length; j++) {
                        //     console.log(results[i].listUnit[j].Unit + " - " + (j + 1));
                        // }
                    }
                }
            }
        );
        return stockInLineObservableArray;
    }

    public postStockInLineData(stockInLineObject: Object, toastr: ToastsManager) {
        let url = "http://localhost:2558/api/stockInLine/post";
        this.http.post(url, JSON.stringify(stockInLineObject), this.options).subscribe(
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


    public deleteStockInData(id: number, toastr: ToastsManager) {
        let url = "http://localhost:2558/api/stockInLine/delete/" + id;
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
