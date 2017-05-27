import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class Software_Item_Service {
    //  Global Variables
    private headers = new Headers({
        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        'Content-Type': 'application/json'
    });
    private options = new RequestOptions({ headers: this.headers });

    constructor(
        private router: Router,
        private http: Http,
        private toastr: ToastsManager
    ) { }


    //MSTTABLE
    public getListOfItem(): wijmo.collections.ObservableArray {
        let itemObsevableArray = new wijmo.collections.ObservableArray();
        let url = "http://localhost:2558/api/item/list";
        this.http.get(url, this.options).subscribe(
            response => {
                var results = response.json();
                if (results.length > 0) {
                    for (var i = 0; i <= results.length - 1; i++) {
                        itemObsevableArray.push({
                            Id: results[i].Id,
                            ItemCode: results[i].ItemCode,
                            BarCode: results[i].BarCode,
                            ItemDescription: results[i].ItemDescription,
                            Alias: results[i].Alias,
                            GenericName: results[i].GenericName,
                            Category: results[i].Category,
                            SalesAccountId: results[i].SalesAccountId,
                            AssetAccountId: results[i].AssetAccountId,
                            CostAccountId: results[i].CostAccountId,
                            InTaxId: results[i].InTaxId,
                            OutTaxId: results[i].OutTaxId,
                            UnitId: results[i].UnitId,
                            Unit: results[i].Unit,
                            DefaultSupplierId: results[i].DefaultSupplierId,
                            Cost: results[i].Cost,
                            MarkUp: results[i].MarkUp,
                            Price: results[i].Price,
                            ImagePath: results[i].ImagePath,
                            ReorderQuantity: results[i].ReorderQuantity,
                            OnhandQuantity: results[i].OnhandQuantity,
                            IsInventory: results[i].IsInventory,
                            ExpiryDate: results[i].ExpiryDate,
                            LotNumber: results[i].LotNumber,
                            Remarks: results[i].Remarks,
                            EntryUserId: results[i].EntryUserId,
                            EntryDateTime: results[i].EntryDateTime,
                            UpdateUserId: results[i].UpdateUserId,
                            UpdateDateTime: results[i].UpdateDateTime,
                            IsLocked: results[i].IsLocked,
                            DefaultKitchenReport: results[i].DefaultKitchenReport,
                            IsPackage: results[i].IsPackage,
                            // listUnit: results[i].listUnit.Unit,
                        });

                        // for (var j = 0; j < results[i].listUnit.length; j++) {
                        //     console.log(results[i].listUnit[j].Unit + " - " + (j + 1));
                        // }
                    }
                }
            }
        );
        return itemObsevableArray;
    }


    // delete ITEM
    public deleteItem(id: number, toastr: ToastsManager) {
        let url = "http://localhost:2558/api/item/delete/" + id;
        this.http.delete(url, this.options).subscribe(
            response => {
                this.toastr.success('', 'Successfully Deleted');
                setTimeout(() => {
                    (<HTMLButtonElement>document.getElementById("refreshGrid")).click();
                }, 1000)
            },
            error => {
                (<HTMLButtonElement>document.getElementById("delete-modal-warning-id")).click();
            }
        )
    }

    public postItemData(itemObject: Object) {
        let url = "http://localhost:2558/api/item/post";
        this.http.post(url, JSON.stringify(itemObject), this.options).subscribe(
            response => {
                var results = response.json();
                if (results > 0) {
                    this.router.navigate(['/itemdetail', results]);
                } else {
                    alert("Error");
                }
            },
            error => {
                alert("Error");
            }
        )
    }


}
