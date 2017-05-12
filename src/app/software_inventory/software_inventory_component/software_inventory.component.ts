import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'software_inventory',
    templateUrl: 'app/software_inventory/software_inventory_template/software_inventory.html'
})

export class Software_Inventory_Component implements OnInit {
    
    constructor(
        private router: Router
    ) { }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
    }
}