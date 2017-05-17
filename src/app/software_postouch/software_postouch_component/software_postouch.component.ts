import { Component, OnInit } from '@angular/core';
import { Software_Postouch_Service } from '../software_postouch_service/software_postouch.service';
import { Router } from '@angular/router';

@Component({
    selector: 'software_postouch',
    templateUrl: 'app/software_postouch/software_postouch_template/software_postouch.html'
})

export class Software_Postouch_Component implements OnInit {
    private tablePostouchSaleCollectionView: wijmo.collections.CollectionView;
    private tableGroupCollectionView: wijmo.collections.CollectionView;
    private tableGroupList: wijmo.collections.CollectionView;
    private filterTableSaleNoGroupSelectedValue: String = "1";
    private filterTableUserGroupSelectedValue: String = "1";
    private filterTableCodeSelectedValue: String = "1";
    private filterTableGroupSelectedValue: String = "1";
    private isLoading: Boolean = true;
    private isFinishLoading: Boolean = false;
    private isTableGroupSelected: Boolean = false;
    private tableIndex: String = " ";
    private tableGroupIndex: String = " ";

    constructor(
        private router: Router,
        private softwarePostouchService: Software_Postouch_Service
    ) { }

    public filterTableGroupSelectedIndexChanged(): void {
        if (this.isTableGroupSelected) {
            // this.getTable();
        } else {
            this.isTableGroupSelected = true;
        }
    }

    public getTableGroup(): void {
        this.tableGroupList = new wijmo.collections.CollectionView(this.softwarePostouchService.getListTableGroup());
        this.tableGroupList.pageSize = 1;
        this.tableGroupList.trackChanges = true;
        setTimeout(() => {
            this.tableGroupIndex = (this.tableGroupList.pageIndex + 1) + " / " + this.tableGroupList.pageCount;
        }, 200);
    }
    
    public tableGroupMoveToFirstPage(): void {
        this.tableGroupList.moveToFirstPage();
        this.tableGroupIndex = (this.tableGroupList.pageIndex + 1) + " / " + this.tableGroupList.pageCount;
    }

    public tableGroupMoveToPreviousPage(): void {
        this.tableGroupList.moveToPreviousPage();
        this.tableGroupIndex = (this.tableGroupList.pageIndex + 1) + " / " + this.tableGroupList.pageCount;
    }

    public tableGroupMoveToNextPage(): void {
        this.tableGroupList.moveToNextPage();
        this.tableGroupIndex = (this.tableGroupList.pageIndex + 1) + " / " + this.tableGroupList.pageCount;
    }

    public tableGroupMoveToLastPage(): void {
        this.tableGroupList.moveToLastPage();
        this.tableGroupIndex = (this.tableGroupList.pageIndex + 1) + " / " + this.tableGroupList.pageCount;
    }

    public setTableGroupSelectedValue(): void {
        this.filterTableGroupSelectedValue = "1";
    }

    public loadTableGroupData() {
        this.isLoading = false;
        this.isFinishLoading = true;
    }
    //Table Postouch For Sale Collection View
    public getTableSale(): void {
        this.tablePostouchSaleCollectionView = new wijmo.collections.CollectionView(this.softwarePostouchService.getListTableSale(this.filterTableSaleNoGroupSelectedValue,this.filterTableUserGroupSelectedValue,this.filterTableCodeSelectedValue));
        this.tablePostouchSaleCollectionView.pageSize = 5;
        this.tablePostouchSaleCollectionView.trackChanges = true;
        // setTimeout(() => {
        //     this.tableIndex = (this.tableGroupCollectionView.pageIndex + 1) + " / " + this.tableGroupCollectionView.pageCount;
        // }, 200);
    }
    //Table Group Collection View
    public getTable(tableGroupId: String): void {
        this.tableGroupCollectionView = new wijmo.collections.CollectionView(this.softwarePostouchService.getListTable(tableGroupId));
        this.tableGroupCollectionView.pageSize = 10;
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
        // this.getTableSale();
        this.getTableGroup();
    }

    public btnTableGroup1Click() {
        var currentId = this.tableGroupList.currentItem;
        this.loadTableGroupData();
        this.getTable(currentId.tableGroup1Id);
    }
    
    public btnTableGroup2Click() {
        var currentId = this.tableGroupList.currentItem;
        this.loadTableGroupData();
        this.getTable(currentId.tableGroup2Id);
    }
    
    public btnTableGroup3Click() {
        var currentId = this.tableGroupList.currentItem;
        this.loadTableGroupData();
        this.getTable(currentId.tableGroup3Id);
    }
    
    public btnTableGroup4Click() {
        var currentId = this.tableGroupList.currentItem;
        this.loadTableGroupData();
        this.getTable(currentId.tableGroup4Id);
    }
    
    public btnTableGroup5Click() {
        var currentId = this.tableGroupList.currentItem;
        this.loadTableGroupData();
        this.getTable(currentId.tableGroup5Id);
    }
    
    public btnTableGroup6Click() {
        var currentId = this.tableGroupList.currentItem;
        this.loadTableGroupData();
        this.getTable(currentId.tableGroup6Id);
    }
}