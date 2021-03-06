import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Software_User_Service } from '../software_user_service/software_user.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'software_user',
    templateUrl: 'app/software_user/software_user_template/software_user.html'
})

export class Software_User_Component implements OnInit {
    private listMstUser: wijmo.collections.CollectionView;


    //Other Method
    private lock: Boolean;
    constructor(
        private router: Router,
        private softwareUserService: Software_User_Service,
        private toastr: ToastsManager,
        private vcRef: ViewContainerRef,
        private errorToastr: ToastsManager
    ) {
        this.toastr.setRootViewContainerRef(vcRef);
    }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.getUserList();
    }

    public getUserList(): void {
        this.listMstUser = new wijmo.collections.CollectionView(this.softwareUserService.getUser());
        this.listMstUser.pageSize = 15;
    }

    public refreshGrid(): void {
        this.listMstUser.refresh();
    }

    public btnEditItem() {
        let currentSelectedItem = this.listMstUser.currentItem;
        this.router.navigate(['/userdetail', currentSelectedItem.Id]);
    }


    public btnAddUser(): void {
            this.softwareUserService.postUserData(null, this.toastr);
    }

    public btnDeleteItemModal() {
            (<HTMLButtonElement>document.getElementById("deleteUserModal")).click();
    }

    public btnDeleteItem() {
        let errorToastr: ToastsManager;
        let toastr: ToastsManager;
        let currentSelectedItem = this.listMstUser.currentItem;
        if (currentSelectedItem.IsLocked == true) {
            this.errorToastr.error('', 'You cant delete Lock Item');
        }
        else {
            // (<HTMLButtonElement>document.getElementById("btn-hidden-start-loading")).click();
            this.softwareUserService.deleteUserData(currentSelectedItem.Id, toastr);
        }
    }
}