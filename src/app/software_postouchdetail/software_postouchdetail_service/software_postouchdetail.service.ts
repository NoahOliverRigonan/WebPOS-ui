import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Injectable()
export class Software_PostouchDetail_Service {
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
    ) { }

    //MST ITEM GROUP
    public getListItemGroup(): wijmo.collections.ObservableArray {
        let itemGroupObsevableArray = new wijmo.collections.ObservableArray();
        let url = "http://localhost:2558/api/itemGroup/list/";
        this.http.get(url, this.options).subscribe(
            response => {
                var results = response.json();
                if (results.length > 0) {
                    let itemGroup1Id: String;
                    let itemGroup1: String;

                    let itemGroup2Id: String;
                    let itemGroup2: String;

                    let itemGroup3Id: String;
                    let itemGroup3: String;

                    let itemGroup4Id: String;
                    let itemGroup4: String;

                    let itemGroup5Id: String;
                    let itemGroup5: String;

                    let itemGroup6Id: String;
                    let itemGroup6: String;

                    let length = (results.length - 1) + 5;
                    let fixIndex = 5;
                    let fixIndexValue = 5;


                    for (var i = 0; i <= (results.length - 1) + 5; i++) {
                        if (fixIndex == i) {
                            if ((i - fixIndexValue) + 5 <= length) {
                                itemGroup1Id = results[i - fixIndexValue].Id;
                                itemGroup1 = results[i - fixIndexValue].ItemGroup;
                            } else {
                                itemGroup1Id = " ";
                                itemGroup1 = " ";
                            }

                            if (((i + 1) - fixIndexValue) + 5 <= length) {
                                itemGroup2Id = results[(i + 1) - fixIndexValue].Id;
                                itemGroup2 = results[(i + 1) - fixIndexValue].ItemGroup;
                            } else {
                                itemGroup2Id = " ";
                                itemGroup2 = " ";
                            }

                            if (((i + 2) - fixIndexValue) + 5 <= length) {
                                itemGroup3Id = results[(i + 2) - fixIndexValue].Id;
                                itemGroup3 = results[(i + 2) - fixIndexValue].ItemGroup;
                            } else {
                                itemGroup3Id = " ";
                                itemGroup3 = " ";
                            }

                            if (((i + 3) - fixIndexValue) + 5 <= length) {
                                itemGroup4Id = results[(i + 3) - fixIndexValue].Id;
                                itemGroup4 = results[(i + 3) - fixIndexValue].ItemGroup;
                            } else {
                                itemGroup4Id = " ";
                                itemGroup4 = " ";
                            }

                            if (((i + 4) - fixIndexValue) + 5 <= length) {
                                itemGroup5Id = results[(i + 4) - fixIndexValue].Id;
                                itemGroup5 = results[(i + 4) - fixIndexValue].ItemGroup;
                            } else {
                                itemGroup5Id = " ";
                                itemGroup5 = " ";
                            }

                            if (((i + 5) - fixIndexValue) + 5 <= length) {
                                itemGroup6Id = results[(i + 5) - fixIndexValue].Id;
                                itemGroup6 = results[(i + 5) - fixIndexValue].ItemGroup;
                            } else {
                                itemGroup6Id = " ";
                                itemGroup6 = " ";
                            }

                            itemGroupObsevableArray.push({
                                itemGroup1Id: itemGroup1Id,
                                itemGroup1: itemGroup1,
                                itemGroup2Id: itemGroup2Id,
                                itemGroup2: itemGroup2,
                                itemGroup3Id: itemGroup3Id,
                                itemGroup3: itemGroup3,
                                itemGroup4Id: itemGroup4Id,
                                itemGroup4: itemGroup4,
                                itemGroup5Id: itemGroup5Id,
                                itemGroup5: itemGroup5,
                                itemGroup6Id: itemGroup6Id,
                                itemGroup6: itemGroup6,
                            });

                            fixIndex += 6;
                        }
                    }
                }
                (<HTMLButtonElement>document.getElementById("set-Item-group-selectedValue")).click();
                // setTimeout(() => {
                //
                //     (<HTMLButtonElement>document.getElementById("load-table-data")).click();
                // }, 200);
            }
        );
        return itemGroupObsevableArray;
    }


    //MSTITEMGROUP ITEM 
    public getListItemGroupItem(itemGroupId: number): wijmo.collections.ObservableArray {
        let itemGroupItemObsevableArray = new wijmo.collections.ObservableArray();
        let url = "http://localhost:2558/api/itemGroupItem/get/" + itemGroupId;
        this.http.get(url, this.options).subscribe(
            response => {
                var results = response.json();
                if (results.length > 0) {
                    let itemGroupItem1Id: String;
                    let itemGroupItem1: String;

                    let itemGroupItem2Id: String;
                    let itemGroupItem2: String;

                    let itemGroupItem3Id: String;
                    let itemGroupItem3: String;

                    let itemGroupItem4Id: String;
                    let itemGroupItem4: String;

                    let itemGroupItem5Id: String;
                    let itemGroupItem5: String;

                    let itemGroupItem6Id: String;
                    let itemGroupItem6: String;

                    let length = (results.length - 1) + 5;
                    let fixIndex = 5;
                    let fixIndexValue = 5;


                    for (var i = 0; i <= (results.length - 1) + 5; i++) {
                        if (fixIndex == i) {
                            if ((i - fixIndexValue) + 5 <= length) {
                                itemGroupItem1Id = results[i - fixIndexValue].Id;
                                itemGroupItem1 = results[i - fixIndexValue].Item;
                            } else {
                                itemGroupItem1Id = " ";
                                itemGroupItem1 = " ";
                            }

                            if (((i + 1) - fixIndexValue) + 5 <= length) {
                                itemGroupItem2Id = results[(i + 1) - fixIndexValue].Id;
                                itemGroupItem2 = results[(i + 1) - fixIndexValue].Item;
                            } else {
                                itemGroupItem2Id = " ";
                                itemGroupItem2 = " ";
                            }

                            if (((i + 2) - fixIndexValue) + 5 <= length) {
                                itemGroupItem3Id = results[(i + 2) - fixIndexValue].Id;
                                itemGroupItem3 = results[(i + 2) - fixIndexValue].Item;
                            } else {
                                itemGroupItem3Id = " ";
                                itemGroupItem3 = " ";
                            }

                            if (((i + 3) - fixIndexValue) + 5 <= length) {
                                itemGroupItem4Id = results[(i + 3) - fixIndexValue].Id;
                                itemGroupItem4 = results[(i + 3) - fixIndexValue].Item;
                            } else {
                                itemGroupItem4Id = " ";
                                itemGroupItem4 = " ";
                            }

                            if (((i + 4) - fixIndexValue) + 5 <= length) {
                                itemGroupItem5Id = results[(i + 4) - fixIndexValue].Id;
                                itemGroupItem5 = results[(i + 4) - fixIndexValue].Item;
                            } else {
                                itemGroupItem5Id = " ";
                                itemGroupItem5 = " ";
                            }

                            if (((i + 5) - fixIndexValue) + 5 <= length) {
                                itemGroupItem6Id = results[(i + 5) - fixIndexValue].Id;
                                itemGroupItem6 = results[(i + 5) - fixIndexValue].Item;
                            } else {
                                itemGroupItem6Id = " ";
                                itemGroupItem6 = " ";
                            }

                            itemGroupItemObsevableArray.push({
                                itemGroupItem1Id: itemGroupItem1Id,
                                itemGroupItem1: itemGroupItem1,
                                itemGroupItem2Id: itemGroupItem2Id,
                                itemGroupItem2: itemGroupItem2,
                                itemGroupItem3Id: itemGroupItem3Id,
                                itemGroupItem3: itemGroupItem3,
                                itemGroupItem4Id: itemGroupItem4Id,
                                itemGroupItem4: itemGroupItem4,
                                itemGroupItem5Id: itemGroupItem5Id,
                                itemGroupItem5: itemGroupItem5,
                                itemGroupItem6Id: itemGroupItem6Id,
                                itemGroupItem6: itemGroupItem6,
                            });

                            fixIndex += 6;
                        }
                    }
                }
                // (<HTMLButtonElement>document.getElementById("refresh-Item-group")).click();
                // (<HTMLButtonElement>document.getElementById("set-table-group-selectedValue")).click();
                // setTimeout(() => {
                //
                //     (<HTMLButtonElement>document.getElementById("load-table-data")).click();
                // }, 200);
            }
        );
        return itemGroupItemObsevableArray;
    }

    //MSTTABLE
    public getListItem(Id: number): wijmo.collections.ObservableArray {
        let tableObsevableArray = new wijmo.collections.ObservableArray();
        let url = "http://localhost:2558/api/table/list/" + Id;
        this.http.get(url, this.options).subscribe(
            response => {
                var results = response.json();
                if (results.length > 0) {

                    let tableNo1Id: String;
                    let tableNo1: String;

                    let tableNo2Id: String;
                    let tableNo2: String;

                    let tableNo3Id: String;
                    let tableNo3: String;

                    let tableNo4Id: String;
                    let tableNo4: String;

                    let tableNo5Id: String;
                    let tableNo5: String;

                    let tableNo6Id: String;
                    let tableNo6: String;

                    let length = (results.length - 1) + 5;
                    let fixIndex = 5;
                    let fixIndexValue = 5;

                    for (var i = 0; i <= (results.length - 1) + 5; i++) {
                        if (fixIndex == i) {
                            if ((i - fixIndexValue) + 5 <= length) {
                                tableNo1Id = results[i - fixIndexValue].Id;
                                tableNo1 = results[i - fixIndexValue].TableCode;
                            } else {
                                tableNo1Id = " ";
                                tableNo1 = " ";
                            }

                            if (((i + 1) - fixIndexValue) + 5 <= length) {
                                tableNo2Id = results[(i + 1) - fixIndexValue].Id;
                                tableNo2 = results[(i + 1) - fixIndexValue].TableCode;
                            } else {
                                tableNo2Id = " ";
                                tableNo2 = " ";
                            }

                            if (((i + 2) - fixIndexValue) + 5 <= length) {
                                tableNo3Id = results[(i + 2) - fixIndexValue].Id;
                                tableNo3 = results[(i + 2) - fixIndexValue].TableCode;
                            } else {
                                tableNo3Id = " ";
                                tableNo3 = " ";
                            }

                            if (((i + 3) - fixIndexValue) + 5 <= length) {
                                tableNo4Id = results[(i + 3) - fixIndexValue].Id;
                                tableNo4 = results[(i + 3) - fixIndexValue].TableCode;
                            } else {
                                tableNo4Id = " ";
                                tableNo4 = " ";
                            }

                            if (((i + 4) - fixIndexValue) + 5 <= length) {
                                tableNo5Id = results[(i + 4) - fixIndexValue].Id;
                                tableNo5 = results[(i + 4) - fixIndexValue].TableCode;
                            } else {
                                tableNo5Id = " ";
                                tableNo5 = " ";
                            }

                            if (((i + 5) - fixIndexValue) + 5 <= length) {
                                tableNo6Id = results[(i + 5) - fixIndexValue].Id;
                                tableNo6 = results[(i + 5) - fixIndexValue].TableCode;
                            } else {
                                tableNo6Id = " ";
                                tableNo6 = " ";
                            }

                            tableObsevableArray.push({
                                tableNo1Id: tableNo1Id,
                                tableNo1: tableNo1,
                                tableNo2Id: tableNo2Id,
                                tableNo2: tableNo2,
                                tableNo3Id: tableNo3Id,
                                tableNo3: tableNo3,
                                tableNo4Id: tableNo4Id,
                                tableNo4: tableNo4,
                                tableNo5Id: tableNo5Id,
                                tableNo5: tableNo5,
                                tableNo6Id: tableNo6Id,
                                tableNo6: tableNo6
                            });

                            fixIndex += 6;
                        } else {

                        }
                    }
                }
            }
        );

        return tableObsevableArray;
    }




    // public deleteItem(id: number, toastr: ToastsManager) {
    //     let url = "http://localhost:2558/api/item/delete/" + id;
    //     this.http.delete(url, this.options).subscribe(
    //         response => {
    //             this.toastr.info('', 'Successfully Deleted');
    //             setTimeout(() => {
    //                 (<HTMLButtonElement>document.getElementById("refreshGrid")).click();
    //             }, 1000)
    //         },
    //         error => {
    //             this.toastr.error(' ', 'Bad Request');
    //         }
    //     )
    // }





    //Trn Sales
    // public getListTableSale(salesId: String, userId: String, tableId: String): wijmo.collections.ObservableArray {
    //     let tableSaleObsevableArray = new wijmo.collections.ObservableArray();
    //     let url = "http://localhost:2558/api/sales/list/" + salesId + '/' + userId + '/' + tableId;
    //     this.http.get(url, this.options).subscribe(
    //         response => {
    //             var results = response.json();
    //             if (results.length > 0) {
    //                 for (var i = 0; i <= results.length - 1; i++) {
    //                     tableSaleObsevableArray.push({
    //                         Id: results[i].Id,
    //                         TableId: results[i].TableId,
    //                         AccountId: results[i].AccountId,
    //                         SalesNumber: results[i].SalesNumber,
    //                         Amount: results[i].Amount,
    //                         TableCode: results[i].TableCode,
    //                         AccountName: results[i].AccountName,
    //                     });
    //                 }
    //             }
    //         }
    //     );

    //     return tableSaleObsevableArray;
    // }

    //TABLE GROUP FOR WALKIN
    // public getListTableGroupWalkin(): wijmo.collections.ObservableArray {
    //     let tableGroupObsevableArray = new wijmo.collections.ObservableArray();
    //     let url = "http://localhost:2558/api/tableGroup/get";
    //     this.http.get(url, this.options).subscribe(
    //         response => {
    //             var results = response.json();
    //             if (results.length > 0) {
    //                 for (var i = 0; i <= results.length - 1; i++) {
    //                     tableGroupObsevableArray.push({
    //                         Id: results[i].Id,
    //                         EntryUserId: results[i].EntryUserId,
    //                         EntryDateTime: results[i].EntryDateTime,
    //                         TableGroup: results[i].TableGroup,
    //                         UpdateDateTime: results[i].UpdateDateTime,
    //                         UpdateUserId: results[i].UpdateUserId,
    //                         IsLocked: results[i].IsLocked,
    //                     });
    //                 }
    //             }
    //         }
    //     );

    //     return tableGroupObsevableArray;
    // }
}

