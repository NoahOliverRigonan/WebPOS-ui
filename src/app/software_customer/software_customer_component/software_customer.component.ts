import { Component, OnInit , ViewContainerRef} from '@angular/core';
import { Software_Customer_Service } from '../software_customer_service/software_customer.service'
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'software_customer',
    templateUrl: 'app/software_customer/software_customer_template/software_customer.html'
})

export class Software_Customer_Component implements OnInit {
    private listMstCustomer: wijmo.collections.CollectionView;

    constructor(
        private router: Router,
        private softwareCustomerService: Software_Customer_Service,
        private toastr: ToastsManager,
        private vcRef: ViewContainerRef,
    ) {
        this.toastr.setRootViewContainerRef(vcRef);
    }

    public getCustomer() {
        this.listMstCustomer = new wijmo.collections.CollectionView(this.softwareCustomerService.getCustomerList())
    }

    public btnAddCustomer(): void {
        this.softwareCustomerService.postCustomerData(null);
    }

    public btnDeleteCustomerModal() {
        (<HTMLButtonElement>document.getElementById("deleteItemModal")).click();
    }

    public btnDeleteCustomer() {
        let toastr: ToastsManager;
        let currentSelectedItem = this.listMstCustomer.currentItem;
        if (currentSelectedItem.IsLocked == true) {
            this.toastr.error('', 'You cant delete Lock Item');
        }
        else {
            this.softwareCustomerService.deleteCustomer(currentSelectedItem.Id, toastr)
        }
    }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.getCustomer();
    }
}