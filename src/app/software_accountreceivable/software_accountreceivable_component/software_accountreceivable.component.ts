import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'software_accountreceivable',
    templateUrl: 'app/software_accountreceivable/software_accountreceivable_template/software_accountreceivable.html'
})

export class Software_Accountreceivable_Component implements OnInit {
    
    constructor(
        private router: Router
    ) { }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
    }
}