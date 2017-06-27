import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Software_TableGroup_Service } from '../software_table_service/software_table.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'software_table',
    templateUrl: 'app/software_table/software_table_template/software_table.html'
})

export class Software_Table_Component implements OnInit {
    private tableGroupCollectionView : wijmo.collections.CollectionView;
    
    constructor(
        private router: Router,
        private softwareTableGroupService : Software_TableGroup_Service,
        private toastr: ToastsManager
    ) { }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        console.log(this.getTableGroup());
    }

    public getTableGroup(){
        this.tableGroupCollectionView = new wijmo.collections.CollectionView(this.softwareTableGroupService.getTableGroup());
        this.tableGroupCollectionView.pageSize = 15;
    }
}