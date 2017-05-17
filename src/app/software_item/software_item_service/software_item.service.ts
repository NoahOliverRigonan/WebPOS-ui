import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';


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
    ) { }

   
    //MSTTABLE
    public getListOfItem(): wijmo.collections.ObservableArray {
        let itemObsevableArray = new wijmo.collections.ObservableArray();
        let url = "http://localhost:2558/api/item/list/";
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
                        });
                    }
                }
            }
        );
        return itemObsevableArray;
    }
}
