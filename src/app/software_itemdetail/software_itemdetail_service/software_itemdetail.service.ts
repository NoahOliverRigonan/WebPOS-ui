import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';

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
        // private toastr: ToastsManager
    ) { }

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
                        Account: results[0].Account,
                        InTaxId: results[0].InTaxId,
                        OutTaxId: results[0].OutTaxId,
                        UnitId: results[0].UnitId,
                        Unit: results[0].Unit,
                        DefaultSupplierId: results[0].DefaultSupplierId,
                        DefaultSupplier: results[0].DefaultSupplier,
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
                        listSupplier: results[0].listSupplier,
                        listSalesAccount: results[0].listSalesAccount,
                        listAssetAccount: results[0].listAssetAccount,
                        listCostAccount: results[0].listCostAccount,
                        listPurchaseVatTax: results[0].listPurchaseVatTax,
                        listSalesVatTax: results[0].listSalesVatTax
                    });
                    (<HTMLButtonElement>document.getElementById("set-value-fields")).click();

                } else {
                    console.log("No data");
                }
            }
        );
        return itemObservableArray;
    }


    //http://localhost:2558/api/item/post
    //ADD ITEM
    // toastr: ToastsManager

   

        // update ITEM
    public putItemData(id: number, itemObject: Object) {
        let url = "http://localhost:2558/api/item/put/" + id;
        this.http.put(url, JSON.stringify(itemObject), this.options).subscribe(
            response => {
                console.log('', 'Save Successful');
            },
            error => {
                alert("Error");
            }
        )
    }

}
