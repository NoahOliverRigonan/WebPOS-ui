import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'software_collectionreport',
    templateUrl: 'app/software_collectionreport/software_collectionreport_template/software_collectionreport.html'
})

export class Software_Collectionreport_Component implements OnInit {
    
    constructor(
        private router: Router
    ) { }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
    }
}