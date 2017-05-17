import { Component, OnInit } from '@angular/core';
import { Software_Item_Service } from '../software_item_service/software_item.service';
import { Router } from '@angular/router';

@Component({
    selector: 'software_item',
    templateUrl: 'app/software_item/software_item_template/software_item.html'
})

export class Software_Item_Component implements OnInit {
    private itemCollectionView: wijmo.collections.CollectionView;
    private indexItem : String;
    
    constructor(
        private router: Router,
        private softwareItemService: Software_Item_Service
    ) { }


    public getListItem(): void {
        this.itemCollectionView = new wijmo.collections.CollectionView(this.softwareItemService.getListOfItem());
        this.itemCollectionView.pageSize = 15;
        this.itemCollectionView.trackChanges = true;
        // setTimeout(() => {
        //     this.tableIndex = (this.tableGroupCollectionView.pageIndex + 1) + " / " + this.tableGroupCollectionView.pageCount;
        // }, 200);
    }

     public moveItemToFirstPage(): void {
        this.itemCollectionView.moveToFirstPage();
        this.indexItem = (this.itemCollectionView.pageIndex + 1) + " / " + this.itemCollectionView.pageCount;
    }

    public moveItemToPreviousPage(): void {
        this.itemCollectionView.moveToPreviousPage();
        this.indexItem = (this.itemCollectionView.pageIndex + 1) + " / " + this.itemCollectionView.pageCount;
    }

    public moveItemToNextPage(): void {
        this.itemCollectionView.moveToNextPage();
        this.indexItem = (this.itemCollectionView.pageIndex + 1) + " / " + this.itemCollectionView.pageCount;
    }

    public moveItemToLastPage(): void {
        this.itemCollectionView.moveToLastPage();
        this.indexItem = (this.itemCollectionView.pageIndex + 1) + " / " + this.itemCollectionView.pageCount;
    }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.getListItem();
    }
}