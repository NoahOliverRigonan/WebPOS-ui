import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'software_disbursement',
    templateUrl: 'app/software_disbursement/software_disbursement_template/software_disbursement.html'
})

export class Software_Disbursement_Component implements OnInit {
    
    constructor(
        private router: Router
    ) { }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
    }
}