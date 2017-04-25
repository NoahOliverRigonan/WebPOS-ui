import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'software_dashboard',
    templateUrl: 'app/software_dashboard/software_dashboard_template/software_dashboard.html'
})

export class Software_Dashboard_Component implements OnInit {
    constructor(
        private router: Router
    ) { }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
    }
}