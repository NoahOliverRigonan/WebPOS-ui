import { Component, OnInit, Attribute } from '@angular/core';
import { Software_Postouch_Service } from '../software_postouch_service/software_postouch.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DateFormatPipe } from 'angular2-moment';

@Component({
    selector: 'software_postouch',
    templateUrl: 'app/software_postouch/software_postouch_template/software_postouch.html',
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
    private postouchDetailId: number;
    private itemFormatter: any;

    constructor(
        private router: Router,
        private softwarePostouchService: Software_Postouch_Service,
        private activatedRoute: ActivatedRoute
    ) { }

    public filterTableGroupSelectedIndexChanged(): void {
        if (this.isTableGroupSelected) {
            // this.getTable();
        } else {
            this.isTableGroupSelected = true;
        }
    }
    public getIdUrlParameter() {
        this.activatedRoute.params.subscribe(params => {
            this.postouchDetailId = params['id'];
        });
        return this.postouchDetailId;
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
        this.tablePostouchSaleCollectionView = new wijmo.collections.CollectionView(this.softwarePostouchService.getListTableSale(this.filterTableSaleNoGroupSelectedValue, this.filterTableUserGroupSelectedValue, this.filterTableCodeSelectedValue));
        this.tablePostouchSaleCollectionView.pageSize = 5;
        this.tablePostouchSaleCollectionView.trackChanges = true;
        // setTimeout(() => {
        //     this.tableIndex = (this.tableGroupCollectionView.pageIndex + 1) + " / " + this.tableGroupCollectionView.pageCount;
        // }, 200);
    }
    //Table Group Collection View
    public getTable(tableGroupId: number): void {
        this.tableGroupCollectionView = new wijmo.collections.CollectionView(this.softwarePostouchService.getListTable(tableGroupId));
        this.tableGroupCollectionView.pageSize = 5;
        this.tableGroupCollectionView.trackChanges = true;
        setTimeout(() => {
            this.tableIndex = (this.tableGroupCollectionView.pageIndex + 1) + " / " + this.tableGroupCollectionView.pageCount;
        }, 200);

    }

    //NAVIGATE TO POSTOUCH DETAIL ROW : 1
    public btnTableList1() {
        let currentSelectedItem = this.tableGroupCollectionView.currentItem;
        this.router.navigate(['/postouchdetail', currentSelectedItem.tableNo1Id]);
    }

    //NAVIGATE TO POSTOUCH DETAIL ROW : 2
    public btnTableList2() {
        let currentSelectedItem = this.tableGroupCollectionView.currentItem;
        this.router.navigate(['/postouchdetail', currentSelectedItem.tableNo2Id]);
    }

    //NAVIGATE TO POSTOUCH DETAIL ROW : 3
    public btnTableList3() {
        let currentSelectedItem = this.tableGroupCollectionView.currentItem;
        this.router.navigate(['/postouchdetail', currentSelectedItem.tableNo3Id]);
    }

    //NAVIGATE TO POSTOUCH DETAIL ROW : 4
    public btnTableLis4() {
        let currentSelectedItem = this.tableGroupCollectionView.currentItem;
        this.router.navigate(['/postouchdetail', currentSelectedItem.tableNo4Id]);
    }

    //NAVIGATE TO POSTOUCH DETAIL ROW : 5
    public btnTableLis5() {
        let currentSelectedItem = this.tableGroupCollectionView.currentItem;
        this.router.navigate(['/postouchdetail', currentSelectedItem.tableNo5Id]);
    }

    //NAVIGATE TO POSTOUCH DETAIL ROW : 6
    public btnTableLis6() {
        let currentSelectedItem = this.tableGroupCollectionView.currentItem;
        this.router.navigate(['/postouchdetail', currentSelectedItem.tableNo6Id]);
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

    public setCurrentDate(): Date {
        return new Date();
    }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        // this.getTableSale();
        // this.gridItemFormatter();
        this.getTableGroup();
        this.setTime();
    }   

    //TIME 
    public setTime(): void {
        // setInterval(() => {
        //    (<HTMLButtonElement>document.getElementById("currentDateTime")).innerHTML = this.setCurrentDate().toDateString() + " || " + this.setCurrentDate().toLocaleTimeString();
        // }, 1000)
    }

    public refreshTableGroup() {
        setTimeout(() => {
            this.tableGroupList.refresh();
        }, 50);
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

    public btnModalForDelivery() {
        (<HTMLButtonElement>document.getElementById("delivery")).click();
    }

    // public gridItemFormatter() {
    //     this.itemFormatter = function (panel: any, r: any, c: any, cell: any) {
    //         if (panel.cellType == wijmo.grid.CellType.Cell) {
    //             var flex = panel.grid;
    //             // flex.rows[r].height = 160;
    //             // flex.rows[0].allowMerging = true;
    //             flex.columns[0].allowMerging = true;

    //             for (var row = 0; row <= 4; row++) {
    //                 flex.setCellData(row, 0, 'row span 2');
    //             }
    //         }
    //         // for (var col = 1; col <= 4; col++) {
    //         //     flex.setCellData(0, col, 'col span 4');
    //         // }
    //     }
    // }
}   