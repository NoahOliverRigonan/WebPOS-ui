import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Software_ItemGroup_Service } from '../software_itemgroup_service/software_itemgroup.service';

@Component({
    selector: 'software_itemgroup',
    templateUrl: 'app/software_itemgroup/software_itemgroup_template/software_itemgroup.html'
})

export class Software_Itemgroup_Component implements OnInit {
        private listOfItemGroup : wijmo.collections.CollectionView;
        
    constructor(
        private router: Router,
        private softwareItemGroupService: Software_ItemGroup_Service
    ) { }

    public getItemGroupList() : void {
        this.listOfItemGroup = new wijmo.collections.CollectionView(this.softwareItemGroupService.getListOfItem());
        this.listOfItemGroup.pageSize = 15;
        this.listOfItemGroup.trackChanges = true;
    }   

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.getItemGroupList();
    }
}