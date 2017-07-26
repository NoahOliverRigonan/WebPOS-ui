import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class Software_CollectionDetail_Service {
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

    public getCollectionById(Id: number): wijmo.collections.ObservableArray {
        let collectionObservableArray = new wijmo.collections.ObservableArray();
        let url = "http://localhost:2558/api/Collection/get/" + Id;
        this.http.get(url, this.options).subscribe(
            response => {
                var results = response.json();
                if (results.length > 0) {
                    for (var i = 0; i <= results.length - 1; i++) {
                        collectionObservableArray.push({
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
                            listPeriod: results[i].listPeriod,
                            listSales: results[i].listSales,
                            listCustomer: results[i].listCustomer,
                            listTerminal: results[i].listTerminal,
                            listPayType: results[i].listPayType,
                            listStockIn: results[i].listStockIn,
                            listAccount: results[i].listAccount,
                        });
                        (<HTMLButtonElement>document.getElementById("set-value-fields")).click();
                    }
                }
            }
        );
        return collectionObservableArray;
    }

    //update COLLECTION DETAIL
    public putCollectionData(id: number, collectionObject: Object, toastr: ToastsManager) {
        let url = "http://localhost:2558/api/Collection/put/" + id;
        this.http.put(url, JSON.stringify(collectionObject), this.options).subscribe(
            response => {
                this.toastr.success('', 'Successful');
                setTimeout(() => {
                    this.router.navigate(['/collection'])
                }, 1000)
            },
            error => {
                this.toastr.error("Error");
            }
        )
    }
}

@Injectable()
export class Software_CollectionLine_Service {
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
    public getCollectionLineList(collectionLineId: number): wijmo.collections.ObservableArray {
        let collectionLineObservableArray = new wijmo.collections.ObservableArray();
        let url = "http://localhost:2558/api/CollectionLine/get/" + collectionLineId;
        this.http.get(url, this.options).subscribe(
            response => {
                var results = response.json();
                if (results.length > 0) {
                    for (var i = 0; i <= results.length - 1; i++) {
                        collectionLineObservableArray.push({
                            Id: results[i].Id,
                            CollectionId: results[i].CollectionId,
                            Amount: results[i].Amount,
                            PayTypeId: results[i].PayTypeId,
                            PayType: results[i].PayType,
                            CheckNumber: results[i].CheckNumber,
                            CheckDate: results[i].CheckDate,
                            CheckBank: results[i].CheckBank,
                            CreditCardVerificationCode: results[i].CreditCardVerificationCode,
                            CreditCardNumber: results[i].CreditCardNumber,
                            CreditCardType: results[i].CreditCardType,
                            CreditCardBank: results[i].CreditCardBank,
                            GiftCertificateNumber: results[i].GiftCertificateNumber,
                            OtherInformation: results[i].OtherInformation,
                            StockInId: results[i].StockInId,
                            StockIn: results[i].StockIn,
                            AccountId: results[i].AccountId,
                            Account: results[i].Account,
                        });
                        // (<HTMLButtonElement>document.getElementById("set-value-fields")).click();
                        // for (var j = 0; j < results[i].listUnit.length; j++) {
                        //     console.log(results[i].listUnit[j].Unit + " - " + (j + 1));
                        // }
                    }
                }
            }
        );
        return collectionLineObservableArray;
    }

    public postPurchaseOrderLineData(collectionObject: Object, toastr: ToastsManager) {
        let url = "http://localhost:2558/api/CollectionLine/post";
        this.http.post(url, JSON.stringify(collectionObject), this.options).subscribe(
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


    public deleteCollectionLine(id: number, toastr: ToastsManager) {
        let url = "http://localhost:2558/api/CollectionLine/delete/" + id;
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
