import { Component, OnInit } from '@angular/core';
import { Software_Postouch_Service } from '../software_postouch_service/software_postouch.service';
import { Router } from '@angular/router';

@Component({
    selector: 'software_postouch',
    templateUrl: 'app/software_postouch/software_postouch_template/software_postouch.html'
})

export class Software_Postouch_Component implements OnInit {
    private tableGroupCollectionView: wijmo.collections.CollectionView;
    private tableGroupList: wijmo.collections.ObservableArray;
    private filterTableGroupSelectedValue: String = "1";
    private isLoading: Boolean = true;
    private isFinishLoading: Boolean = false;
    private isTableGroupSelected: Boolean = false;
    private tableIndex: String = " ";

    constructor(
        private router: Router,
        private softwarePostouchService: Software_Postouch_Service
    ) { }

    public filterTableGroupSelectedIndexChanged(): void {
        if (this.isTableGroupSelected) {
            this.getTable();
        } else {
            this.isTableGroupSelected = true;
        }
    }


    public getTableGroup(): void {
        this.tableGroupList = this.softwarePostouchService.getListTableGroup();
    }

    public setTableGroupSelectedValue(): void {
        this.filterTableGroupSelectedValue = "1";
    }

    public loadTableGroupData() {
        this.isLoading = false;
        this.isFinishLoading = true;
    }

    public getTable(): void {
        this.tableGroupCollectionView = new wijmo.collections.CollectionView(this.softwarePostouchService.getListTable(this.filterTableGroupSelectedValue));
        this.tableGroupCollectionView.pageSize = 15;
        this.tableGroupCollectionView.trackChanges = true;
        setTimeout(() => {
            this.tableIndex = (this.tableGroupCollectionView.pageIndex + 1) + " / " + this.tableGroupCollectionView.pageCount;
        }, 200);
    }

    public tableMoveToFirstPage(): void {
        this.tableGroupCollectionView.moveToFirstPage();
        this.tableIndex = (this.tableGroupCollectionView.pageIndex + 1) + " / " + this.tableGroupCollectionView.pageCount;
    }

    public tableMoveToPreviousPage(): void {
        this.tableGroupCollectionView.moveToPreviousPage();
        this.tableIndex = (this.tableGroupCollectionView.pageIndex + 1) + " / " + this.tableGroupCollectionView.pageCount;
    }

    public tableMoveToNextPage(): void {
        this.tableGroupCollectionView.moveToNextPage();
        this.tableIndex = (this.tableGroupCollectionView.pageIndex + 1) + " / " + this.tableGroupCollectionView.pageCount;
    }

    public tableMoveToLastPage(): void {
        this.tableGroupCollectionView.moveToLastPage();
        this.tableIndex = (this.tableGroupCollectionView.pageIndex + 1) + " / " + this.tableGroupCollectionView.pageCount;
    }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }

        this.getTableGroup();
    }
}