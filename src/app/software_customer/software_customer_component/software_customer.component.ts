import { Component, OnInit } from '@angular/core';
import {Software_Customer_Service } from '../software_customer_service/software_customer.service'
import { Router } from '@angular/router';

@Component({
    selector: 'software_customer',
    templateUrl: 'app/software_customer/software_customer_template/software_customer.html'
})

export class Software_Customer_Component implements OnInit {
    private listMstCustomer : wijmo.collections.CollectionView;

    constructor(
        private router: Router,
        private softwareCustomerService : Software_Customer_Service
    ) { }

    public getCustomer(){
        this.listMstCustomer = new wijmo.collections.CollectionView(this.softwareCustomerService.getCustomerList())
    }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.getCustomer();
    }
}