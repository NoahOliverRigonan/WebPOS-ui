import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';


@Injectable()
export class TableGroupService {
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
                }, 200);
            }
        );

        return tableGroupObsevableArray;
    }
}
