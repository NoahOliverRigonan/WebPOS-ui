import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'software_disbursementreport',
    templateUrl: 'app/software_disbursementreport/software_disbursementreport_template/software_disbursementreport.html'
})

export class Software_Disbursementreport_Component implements OnInit {
    
    constructor(
        private router: Router
    ) { }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
    }
}