import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Software_ItemComponent_Service } from '../software_itemcomponent_service/software_itemcomponent.service';

@Component({
    selector: 'software_itemcomponent',
    templateUrl: 'app/software_itemcomponent/software_itemcomponent_template/software_itemcomponent.html'
})

export class Software_Itemcomponent_Component implements OnInit {
    private listItemComponent: wijmo.collections.CollectionView;
    
    constructor(
        private router: Router,
        private softwareItemComponentService : Software_ItemComponent_Service
    ) { }
    public getItemComponentList(): void {
        this.listItemComponent = new wijmo.collections.CollectionView(this.softwareItemComponentService.getListOfItem());
    }
    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.getItemComponentList();
    }
}