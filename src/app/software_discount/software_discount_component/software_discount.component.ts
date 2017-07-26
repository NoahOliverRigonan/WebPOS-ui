import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { Software_Discount_Service } from '../software_discount_service/software_discount.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'software_discount',
    templateUrl: 'app/software_discount/software_discount_template/software_discount.html'
})

export class Software_Discount_Component implements OnInit {
    private listDiscountCollectionView: wijmo.collections.CollectionView;
    //Other Method
    private lock: Boolean;

    constructor(
        private router: Router,
        private softwareDiscountService: Software_Discount_Service,
        private errorToastr: ToastsManager,
        private toastr: ToastsManager,
        private vcRef: ViewContainerRef
    ) {
        this.toastr.setRootViewContainerRef(vcRef);
    }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.getDiscount();
    }

    public btnAddDiscount(): void {
        if (this.lock != true) {
            this.softwareDiscountService.postDiscountData(null);
        }
    }

    public getDiscount() {
        this.listDiscountCollectionView = new wijmo.collections.CollectionView(this.softwareDiscountService.getListOfDiscount());
    }

    public deleteDiscountModal() {
        (<HTMLButtonElement>document.getElementById("delete-modal-warning-id")).click();
    }

    public deleteDiscount() {
        let errorToastr: ToastsManager;
        let toastr: ToastsManager;
        let currentDiscountItem = this.listDiscountCollectionView.currentItem;
        if (currentDiscountItem.IsLocked == true) {
            this.errorToastr.error('', 'You cant delete Lock Item');
        }
        else {
            this.softwareDiscountService.deleteDiscountItem(currentDiscountItem.Id, toastr)
        }
    }

    public btnEditItem() {
        let currentSelectedItem = this.listDiscountCollectionView.currentItem;
        this.router.navigate(['/discountdetail', currentSelectedItem.Id]);
    }
}