import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'software_80mmreport',
    templateUrl: 'app/software_80mmreport/software_80mmreport_template/software_80mmreport.html'
})

export class Software_80mmreport_Component implements OnInit {
    
    constructor(
        private router: Router
    ) { }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
    }
}