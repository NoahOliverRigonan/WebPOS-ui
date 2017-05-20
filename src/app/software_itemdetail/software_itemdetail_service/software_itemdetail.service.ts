import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class Software_Itemdetail_Service {
    //  Global Variables
    private headers = new Headers({
        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        'Content-Type': 'application/json'
    });
    private options = new RequestOptions({ headers: this.headers });

    constructor(
        private router: Router,
        private http: Http,
    ) { }

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
    public getItemDetail(Id: number): wijmo.collections.ObservableArray {
        let itemObservableArray = new wijmo.collections.ObservableArray();
        let url = "http://localhost:2558/api/item/list/" + Id;
        this.http.get(url, this.options).subscribe(
            response => {
                var results = response.json();
                if (results.length > 0) {
                    itemObservableArray.push({
                        Id: results[0].Id,
                        ItemCode: results[0].ItemCode,
                        BarCode: results[0].BarCode,
                        ItemDescription: results[0].ItemDescription,
                        Alias: results[0].Alias,
                        GenericName: results[0].GenericName,
                        Category: results[0].Category,
                        SalesAccountId: results[0].SalesAccountId,
                        AssetAccountId: results[0].AssetAccountId,
                        CostAccountId: results[0].CostAccountId,
                        InTaxId: results[0].InTaxId,
                        OutTaxId: results[0].OutTaxId,
                        UnitId: results[0].UnitId,
                        Unit: results[0].Unit,
                        DefaultSupplierId: results[0].DefaultSupplierId,
                        Cost: results[0].Cost,
                        MarkUp: results[0].MarkUp,
                        Price: results[0].Price,
                        ImagePath: results[0].ImagePath,
                        ReorderQuantity: results[0].ReorderQuantity,
                        OnhandQuantity: results[0].OnhandQuantity,
                        IsInventory: results[0].IsInventory,
                        ExpiryDate: results[0].ExpiryDate,
                        LotNumber: results[0].LotNumber,
                        Remarks: results[0].Remarks,
                        EntryUserId: results[0].EntryUserId,
                        EntryDateTime: results[0].EntryDateTime,
                        UpdateUserId: results[0].UpdateUserId,
                        UpdateDateTime: results[0].UpdateDateTime,
                        IsLocked: results[0].IsLocked,
                        DefaultKitchenReport: results[0].DefaultKitchenReport,
                        IsPackage: results[0].IsPackage,
                        listUnit: results[0].listUnit,
                        listSupplier: results[0].listSupplier
                    });

                    setTimeout(() => {
                        (<HTMLButtonElement>document.getElementById("set-value-fields")).click();
                    }, 100);

                } else {
                    console.log("No data");
                }
            }
        );

        return itemObservableArray;
    }


    //http://localhost:2558/api/item/post
    //ADD ITEM
    //

        public postSupportData(supportObject: Object, toastr: ToastsManager) {
        let url = "http://localhost:22626/api/support/post";
        this.http.post(url, JSON.stringify(supportObject), this.options).subscribe(
            response => {
                if (response.json() > 0) {
                    this.toastr.success('', 'Save Successful');
                    setTimeout(() => {
                        document.getElementById("btn-hidden-support-detail-modal").click();
                        this.router.navigate(['/supportDetail', response.json()]);
                    }, 1000);
                } else {
                    this.toastr.error('', 'Something`s went wrong!');
                    (<HTMLButtonElement>document.getElementById("btnSaveSupport")).innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                    (<HTMLButtonElement>document.getElementById("btnSaveSupport")).disabled = false;
                    (<HTMLButtonElement>document.getElementById("btnCloseSupport")).disabled = false;
                }
            },
            error => {
                alert("Error");
            }
        )
    }

}
