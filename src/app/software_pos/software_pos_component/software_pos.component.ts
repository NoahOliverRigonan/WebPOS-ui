import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'software_pos',
    templateUrl: 'app/software_pos/software_pos_template/software_pos.html'
})

export class Software_Pos_Component implements OnInit {
    constructor(
        private router: Router
    ) { }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
    }
}