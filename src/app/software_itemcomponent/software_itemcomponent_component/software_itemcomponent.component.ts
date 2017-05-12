import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'software_itemcomponent',
    templateUrl: 'app/software_itemcomponent/software_itemcomponent_template/software_itemcomponent.html'
})

export class Software_Itemcomponent_Component implements OnInit {
    
    constructor(
        private router: Router
    ) { }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
    }
}