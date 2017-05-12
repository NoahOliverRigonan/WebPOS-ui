import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'software_collection',
    templateUrl: 'app/software_collection/software_collection_template/software_collection.html'
})

export class Software_Collection_Component implements OnInit {
    
    constructor(
        private router: Router
    ) { }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
    }
}