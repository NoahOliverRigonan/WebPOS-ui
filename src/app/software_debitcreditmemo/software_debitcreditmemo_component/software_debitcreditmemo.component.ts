import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'software_debitcreditmemo',
    templateUrl: 'app/software_debitcreditmemo/software_debitcreditmemo_template/software_debitcreditmemo.html'
})

export class Software_Debitcreditmemo_Component implements OnInit {
    constructor(
        private router: Router
    ) { }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
    }
}