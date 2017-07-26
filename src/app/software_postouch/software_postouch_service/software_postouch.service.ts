import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Injectable()
export class Software_Postouch_Service {
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

    public getListTableGroup(): wijmo.collections.ObservableArray {
        let tableGroupObsevableArray = new wijmo.collections.ObservableArray();
        let url = "http://localhost:2558/api/tableGroup/list";
        this.http.get(url, this.options).subscribe(
            response => {
                var results = response.json();
                if (results.length > 0) {
                    let tableGroup1Id: String;
                    let tableGroup1: String;

                    let tableGroup2Id: String;
                    let tableGroup2: String;

                    let tableGroup3Id: String;
                    let tableGroup3: String;

                    let tableGroup4Id: String;
                    let tableGroup4: String;

                    let tableGroup5Id: String;
                    let tableGroup5: String;

                    let tableGroup6Id: String;
                    let tableGroup6: String;

                    let length = (results.length - 1) + 5;
                    let fixIndex = 5;
                    let fixIndexValue = 5;

                    let tableGroudIdDineIn = results[0].Id;
                    let tableGroudIdDineTableGroup = results[0].TableGroup;

                    for (var i = 0; i <= (results.length - 1) + 5; i++) {
                        if (fixIndex == i) {
                            if ((i - fixIndexValue) + 5 <= length) {
                                tableGroup1Id = results[i - fixIndexValue].Id;
                                tableGroup1 = results[i - fixIndexValue].TableGroup;
                            } else {
                                tableGroup1Id = " ";
                                tableGroup1 = " ";
                            }

                            if (((i + 1) - fixIndexValue) + 5 <= length) {
                                tableGroup2Id = results[(i + 1) - fixIndexValue].Id;
                                tableGroup2 = results[(i + 1) - fixIndexValue].TableGroup;
                            } else {
                                tableGroup2Id = " ";
                                tableGroup2 = " ";
                            }

                            if (((i + 2) - fixIndexValue) + 5 <= length) {
                                tableGroup3Id = results[(i + 2) - fixIndexValue].Id;
                                tableGroup3 = results[(i + 2) - fixIndexValue].TableGroup;
                            } else {
                                tableGroup3Id = " ";
                                tableGroup3 = " ";
                            }

                            if (((i + 3) - fixIndexValue) + 5 <= length) {
                                tableGroup4Id = results[(i + 3) - fixIndexValue].Id;
                                tableGroup4 = results[(i + 3) - fixIndexValue].TableGroup;
                            } else {
                                tableGroup4Id = " ";
                                tableGroup4 = " ";
                            }

                            if (((i + 4) - fixIndexValue) + 5 <= length) {
                                tableGroup5Id = results[(i + 4) - fixIndexValue].Id;
                                tableGroup5 = results[(i + 4) - fixIndexValue].TableGroup;
                            } else {
                                tableGroup5Id = " ";
                                tableGroup5 = " ";
                            }

                            if (((i + 5) - fixIndexValue) + 5 <= length) {
                                tableGroup6Id = results[(i + 5) - fixIndexValue].Id;
                                tableGroup6 = results[(i + 5) - fixIndexValue].TableGroup;
                            } else {
                                tableGroup6Id = " ";
                                tableGroup6 = " ";
                            }

                            tableGroupObsevableArray.push({
                                tableGroup1Id: tableGroup1Id,
                                tableGroup1: tableGroup1,
                                tableGroup2Id: tableGroup2Id,
                                tableGroup2: tableGroup2,
                                tableGroup3Id: tableGroup3Id,
                                tableGroup3: tableGroup3,
                                tableGroup4Id: tableGroup4Id,
                                tableGroup4: tableGroup4,
                                tableGroup5Id: tableGroup5Id,
                                tableGroup5: tableGroup5,
                                tableGroup6Id: tableGroup6Id,
                                tableGroup6: tableGroup6,
                            });
                            fixIndex += 6;
                        }
                    }
                }
                (<HTMLButtonElement>document.getElementById("set-table-group-selectedValue")).click();
                // setTimeout(() => {
                //     
                //     (<HTMLButtonElement>document.getElementById("load-table-data")).click();
                // }, 200);
            }
        );

        return tableGroupObsevableArray;
    }

    //MSTTABLE
    public getListTable(tableId: number): wijmo.collections.ObservableArray {
        let tableObsevableArray = new wijmo.collections.ObservableArray();
        let url = "http://localhost:2558/api/table/list/" + tableId;
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

                    (<HTMLButtonElement>document.getElementById("refresh-table-group")).click();
                }
            }
        );

        return tableObsevableArray;
    }


    //Trn Sales
    public getListTableSaleOpen(): wijmo.collections.ObservableArray {
        let tableSaleObsevableArray = new wijmo.collections.ObservableArray();
        let url = "http://localhost:2558/api/sales/listOpen";
        this.http.get(url, this.options).subscribe(
            response => {
                var results = response.json();
                if (results.length > 0) {
                    for (var i = 0; i < results.length; i++) {
                        tableSaleObsevableArray.push({
                            Id: results[i].Id,
                            PeriodId: results[i].TableId,
                            SalesDate: results[i].SalesDate,
                            SalesNumber: results[i].SalesNumber,
                            ManualInvoiceNumber: results[i].ManualInvoiceNumber,
                            Amount: results[i].Amount,
                            TableId: results[i].TableId,
                            TableCode: results[i].TableCode,
                            CustomerId: results[i].CustomerId,
                            AccountId: results[i].AccountId,
                            AccountName: results[i].AccountName,
                            TermId: results[i].TermId,
                            DiscountId: results[i].DiscountId,
                            SeniorCitizenId: results[i].SeniorCitizenId,
                            SeniorCitizenName: results[i].SeniorCitizenName,
                            SeniorCitizenAge: results[i].SeniorCitizenAge,
                            Remarks: results[i].Remarks,
                            SalesAgent: results[i].SalesAgent,
                            SalesAgentName: results[i].SalesAgentName,
                            TerminalId: results[i].TerminalId,
                            PreparedBy: results[i].PreparedBy,
                            CheckedBy: results[i].CheckedBy,
                            ApprovedBy: results[i].ApprovedBy,
                            IsLocked: results[i].IsLocked,
                            IsCancelled: results[i].IsCancelled,
                            PaidAmount: results[i].PaidAmount,
                            CreditAmount: results[i].CreditAmount,
                            DebitAmount: results[i].DebitAmount,
                            BalanceAmount: results[i].BalanceAmount,
                            EntryUserId: results[i].EntryUserId,
                            EntryDateTime: results[i].EntryDateTime,
                            UpdateUserId: results[i].UpdateUserId,
                            UpdateDateTime: results[i].UpdateDateTime,
                            Pax: results[i].Pax,
                            TableStatus: results[i].TableStatus,
                        });
                    }
                    // (<HTMLButtonElement>document.getElementById("refreshGrid")).click();
                }
            }
        );
        return tableSaleObsevableArray;
    }

    //TABLE GROUP FOR WALKIN
    public getListTableGroupWalkin(): wijmo.collections.ObservableArray {
        let tableGroupObsevableArray = new wijmo.collections.ObservableArray();
        let url = "http://localhost:2558/api/tableGroup/get";
        this.http.get(url, this.options).subscribe(
            response => {
                var results = response.json();
                if (results.length > 0) {
                    for (var i = 0; i <= results.length - 1; i++) {
                        tableGroupObsevableArray.push({
                            Id: results[i].Id,
                            EntryUserId: results[i].EntryUserId,
                            EntryDateTime: results[i].EntryDateTime,
                            TableGroup: results[i].TableGroup,
                            UpdateDateTime: results[i].UpdateDateTime,
                            UpdateUserId: results[i].UpdateUserId,
                            IsLocked: results[i].IsLocked,
                        });
                    }

                }
            }
        );

        return tableGroupObsevableArray;
    }


    public postSalesData(salesObject: Object, toastr: ToastsManager) {
        let url = "http://localhost:2558/api/sales/post";
        this.http.post(url, JSON.stringify(salesObject), this.options).subscribe(
            response => {
                var results = response.json();
                if (results > 0) {
                    this.router.navigate(['/postouchdetail', results]);
                } else {
                    this.toastr.error('', 'Bad Request');
                    this.router.navigate(['/postouch']);
                }
            },
            error => {
                this.toastr.error('', 'Bad Request');
                console.log(error);
            },
        )
    }
}
