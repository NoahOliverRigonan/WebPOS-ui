import { Component, OnInit } from '@angular/core';
import { TableGroupService } from '../software_postouch_service/software_postouch.service';
import { Router } from '@angular/router';

@Component({
    selector: 'software_postouch',
    templateUrl: 'app/software_postouch/software_postouch_template/software_postouch.html'
})

export class Software_Postouch_Component implements OnInit {

    private tableGroupList: wijmo.collections.ObservableArray;
    private filterTableGroupSelectedValue: String = "1";
    private isLoading: Boolean = true;
    private isFinishLoading: Boolean = false;
    private isTableGroupSelected: Boolean = false;

    constructor(
        private router: Router,
        private tableGroupService: TableGroupService
    ) { }

    public filterTableGroupSelectedIndexChanged(): void {
        if (this.isTableGroupSelected) {
            console.log(this.filterTableGroupSelectedValue);
        } else {
            this.isTableGroupSelected = true;
        }
    }

    public getTableGroup(): void {
        this.tableGroupList = this.tableGroupService.getListTableGroup();
    }

    public setTableGroupSelectedValue(): void {
        this.filterTableGroupSelectedValue = "1";
    }

    public loadTableGroupData() {
        this.isLoading = false;
        this.isFinishLoading = true;
    }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }

        this.getTableGroup();
    }
}