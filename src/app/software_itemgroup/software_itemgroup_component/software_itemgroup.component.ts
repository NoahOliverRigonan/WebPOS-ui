import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'software_itemgroup',
    templateUrl: 'app/software_itemgroup/software_itemgroup_template/software_itemgroup.html'
})

export class Software_Itemgroup_Component implements OnInit {
    
    constructor(
        private router: Router
    ) { }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
    }
}