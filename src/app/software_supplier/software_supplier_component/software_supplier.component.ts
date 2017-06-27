import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Software_Supplier_Service } from '../software_supplier_service/software_supplier.service'
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
    selector: 'software_supplier',
    templateUrl: 'app/software_supplier/software_supplier_template/software_supplier.html'
})

export class Software_Supplier_Component implements OnInit {
    private listMstSupplier: wijmo.collections.CollectionView;
    private lock: Boolean;

    constructor(
        private router: Router,
        private softwareSupplierService: Software_Supplier_Service,
        private toastr: ToastsManager,
        private errorToastr: ToastsManager,
        private vcRef: ViewContainerRef
    ) {
        this.toastr.setRootViewContainerRef(vcRef);
    }

    public getSupplier() {
        this.listMstSupplier = new wijmo.collections.CollectionView(this.softwareSupplierService.getSupplierList());
    }

    public btnAddSupplier(): void {
        if (this.lock != true) {
            this.softwareSupplierService.postSupplierData(null, this.toastr);
        }
    }

    public btnEditItem() {
        let currentSelectedItem = this.listMstSupplier.currentItem;
        this.router.navigate(['/supplierdetail', currentSelectedItem.Id]);
    }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.getSupplier();
    }

    public btnDeleteItemModal() {
        let toastr: ToastsManager;
        let currentSelectedItem = this.listMstSupplier.currentItem;
        if (currentSelectedItem.Id) {
            (<HTMLButtonElement>document.getElementById("deleteItemModal")).click();
        }
        else {
            this.softwareSupplierService.deleteItem(currentSelectedItem.Id, toastr);
        }

    }

    public btnDeleteItem() {
        let errorToastr: ToastsManager;
        let toastr: ToastsManager;
        let currentSelectedItem = this.listMstSupplier.currentItem;
        if (currentSelectedItem.IsLocked == true) {
            this.errorToastr.error('', 'You cant delete Lock Item');
        }
        else {
            // (<HTMLButtonElement>document.getElementById("btn-hidden-start-loading")).click();
            this.softwareSupplierService.deleteItem(currentSelectedItem.Id, toastr);
        }
    }
}