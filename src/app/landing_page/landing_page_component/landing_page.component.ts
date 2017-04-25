import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'landing_page',
    templateUrl: 'app/landing_page/landing_page_template/landing_page.html'
})

export class Landing_Page_Component implements OnInit {
    public ngOnInit(): any {
        console.log(localStorage.getItem('access_token'));
        console.log(localStorage.getItem('expires_in'));
        console.log(localStorage.getItem('token_type'));
        console.log(localStorage.getItem('userName'));
    }
}