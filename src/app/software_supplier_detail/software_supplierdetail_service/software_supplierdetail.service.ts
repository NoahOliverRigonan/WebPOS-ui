import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class Software_SupplierDetail_Service {
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
    public getSupplierList(Id: number): wijmo.collections.ObservableArray {
        let supplierObservableArray = new wijmo.collections.ObservableArray();
        let url = "http://localhost:2558/api/supplier/list/" + Id;
        this.http.get(url, this.options).subscribe(
            response => {
                var results = response.json();
                if (results.length > 0) {
                    for (var i = 0; i <= results.length - 1; i++) {
                        supplierObservableArray.push({
                            Id: results[i].Id,
                            Supplier: results[i].Supplier,
                            Address: results[i].Address,
                            TelephoneNumber: results[i].TelephoneNumber,
                            CellphoneNumber: results[i].CellphoneNumber,
                            FaxNumber: results[i].FaxNumber,
                            TermId: results[i].TermId,
                            TIN: results[i].TIN,
                            AccountId: results[i].AccountId,
                            EntryUserId: results[i].EntryUserId,
                            EntryDateTime: results[i].EntryDateTime,
                            UpdateUserId: results[i].UpdateUserId,
                            UpdateDateTime: results[i].UpdateDateTime,
                            IsLocked: results[i].IsLocked,
                            listAccount: results[i].listAccount,
                            listTerm: results[i].listTerm
                            // listUnit: results[i].listUnit.Unit,
                        });
                        (<HTMLButtonElement>document.getElementById("set-value-fields")).click();
                        // for (var j = 0; j < results[i].listUnit.length; j++) {
                        //     console.log(results[i].listUnit[j].Unit + " - " + (j + 1));
                        // }
                    }
                }
            }
        );
        return supplierObservableArray;
    }


    //http://localhost:2558/api/item/post
    //ADD ITEM
    // toastr: ToastsManager



    // update ITEM
    public putSupplierData(id: number, supplierObject: Object, toastr: ToastsManager) {
        let url = "http://localhost:2558/api/supplier/put/" + id;
        this.http.put(url, JSON.stringify(supplierObject), this.options).subscribe(
            response => {
                this.toastr.success('', 'Successful');
                setTimeout(() => {
                    this.router.navigate(['/supplier'])
                }, 1000)
            },
            error => {
                alert("Error");
            }
        )
    }

}
