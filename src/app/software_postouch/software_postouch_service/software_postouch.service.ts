import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';


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
    ) { }

    public getListTableGroup(): wijmo.collections.ObservableArray {
        let tableGroupObsevableArray = new wijmo.collections.ObservableArray();
        let url = "http://localhost:2558/api/tableGroup/list";
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
                            UpdateUserId: results[i].UpdateUserId
                        });
                    }
                }

                (<HTMLButtonElement>document.getElementById("set-table-group-selectedValue")).click();
                setTimeout(() => {
                    (<HTMLButtonElement>document.getElementById("load-table-group-data")).click();
                    (<HTMLButtonElement>document.getElementById("load-table-data")).click();
                }, 200);
            }
        );

        return tableGroupObsevableArray;
    }

    //MSTTABLE
    public getListTable(tableId: String): wijmo.collections.ObservableArray {
        let tableObsevableArray = new wijmo.collections.ObservableArray();
        let url = "http://localhost:2558/api/table/list/" + tableId;
        this.http.get(url, this.options).subscribe(
            response => {
                var results = response.json();
                if (results.length > 0) {
                    for (var i = 0; i <= results.length - 1; i++) {
                        tableObsevableArray.push({
                            Id: results[i].Id,
                            TableCode: results[i].TableCode,
                            TableGroupId: results[i].TableGroupId,
                            TopLocation: results[i].TopLocation,
                            LeftLocation: results[i].LeftLocation
                        });
                    }
                }
            }
        );

        return tableObsevableArray;
    }
}
