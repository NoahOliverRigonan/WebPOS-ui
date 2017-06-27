import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Software_Item_Service } from '../software_item_service/software_item.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
    selector: 'software_item',
    templateUrl: 'app/software_item/software_item_template/software_item.html',
})

export class Software_Item_Component implements OnInit {
    private itemCollectionView: wijmo.collections.CollectionView;
    private indexItem: String;
    private itemId: number;
    private lock: Boolean;

    constructor(
        private router: Router,
        private softwareItemService: Software_Item_Service,
        private errorToastr: ToastsManager,
        private toastr: ToastsManager,
        private vcRef: ViewContainerRef,
        private slimLoadingBarService: SlimLoadingBarService
    ) {
        this.toastr.setRootViewContainerRef(vcRef);
    }

    // start loading
    public startLoading() {
        this.slimLoadingBarService.progress = 30;
        this.slimLoadingBarService.start();
    }

    // complete loading
    public completeLoading() {
        this.slimLoadingBarService.complete();
    }

    public btnAddItem(): void {
        if (this.lock != true) {
            this.softwareItemService.postItemData(null, this.toastr);
        }
    }

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

    public btnEditItem() {
        let currentSelectedItem = this.itemCollectionView.currentItem;
        this.router.navigate(['/itemdetail', currentSelectedItem.Id]);
    }

    //
    //DELETE ITEM AND DELETE ITEM MODAL
    //
    public btnDeleteItemModal() {
        let toastr: ToastsManager;
        let currentSelectedItem = this.itemCollectionView.currentItem;
        if (currentSelectedItem.Id) {
            (<HTMLButtonElement>document.getElementById("deleteItemModal")).click();
        }
        else {
            this.softwareItemService.deleteItem(currentSelectedItem.Id, toastr);
        }

    }

    public btnDeleteItem() {
        let errorToastr: ToastsManager;
        let toastr: ToastsManager;
        let currentSelectedItem = this.itemCollectionView.currentItem;
        if (currentSelectedItem.IsLocked == true) {
            this.errorToastr.error('', 'You cant delete Lock Item');
        }
        else {
            (<HTMLButtonElement>document.getElementById("btn-hidden-start-loading")).click();
            this.softwareItemService.deleteItem(currentSelectedItem.Id, toastr);
        }
    }
    
    // activity delete confirmation click
    // public btnActivityDeleteConfirmationClick() {
    //     this.startLoading();
    //     let toastr: ToastsManager;
    //     (<HTMLButtonElement>document.getElementById("btnActivityDeleteConfirmation")).innerHTML = "<i class='fa fa-spinner fa-spin fa-fw'></i> Deleting";
    //     (<HTMLButtonElement>document.getElementById("btnActivityDeleteConfirmation")).disabled = true;
    //     (<HTMLButtonElement>document.getElementById("btnActivityCloseDeleteConfirmation")).disabled = true;
    //     this.activityService.deleteActivityData(this.activityId, toastr);
    // }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.getListItem();
    }

}