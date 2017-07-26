import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Software_StockIn_Service } from '../software_stockin_service/software_stockin.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
    selector: 'software_stockin',
    templateUrl: 'app/software_stockin/software_stockin_template/software_stockin.html',
})

export class Software_StockIn_Component implements OnInit {
    private itemCollectionView: wijmo.collections.CollectionView;
    private indexItem: String;
    private itemId: number;
    private lock: Boolean;

    constructor(
        private router: Router,
        private softwareStockInService: Software_StockIn_Service,
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
            this.softwareStockInService.postStockInData(null, this.toastr);
        }
    }

    public getStockIn(): void {
        this.itemCollectionView = new wijmo.collections.CollectionView(this.softwareStockInService.getStockInList());
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
        this.router.navigate(['/stockindetail', currentSelectedItem.Id]);
    }

    //DELETE STOCKIN AND DELETE STOCKIN MODAL
    
    public btnDeleteStockInModal() {
            (<HTMLButtonElement>document.getElementById("deleteStockInModal")).click();
    }

    public btnDeleteStockIn() {
        let toastr: ToastsManager;
        let currentSelectedItem = this.itemCollectionView.currentItem;
        if (currentSelectedItem.IsLocked == true) {
            this.toastr.error('', 'You cant delete Lock Item');
        }
        else {
            (<HTMLButtonElement>document.getElementById("btn-hidden-start-loading")).click();
            this.softwareStockInService.deleteStockInList(currentSelectedItem.Id, toastr);
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
        this.getStockIn();
    }
}