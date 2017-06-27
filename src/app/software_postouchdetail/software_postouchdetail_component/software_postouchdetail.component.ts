import { Component, OnInit, Attribute, ViewContainerRef } from '@angular/core';
import { Software_PostouchDetail_Service } from '../software_postouchdetail_service/software_postouchdetail.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DateFormatPipe } from 'angular2-moment';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'software_postouchdetail',
    templateUrl: 'app/software_postouchdetail/software_postouchdetail_template/software_postouchdetail.html',
})


export class Software_PostouchDetail_Component implements OnInit {
    private postouchDetailCollectionView: wijmo.collections.CollectionView;
    private postouchDetailList: wijmo.collections.CollectionView;
    private postouchDetailListGroup: wijmo.collections.CollectionView;
    //Other Method
    private postouchDetailId: number;
    private filterItemGroupSelectedValue: String = "1";
    private itemGroupIndex: String = " ";
    private isLoading: Boolean = true;
    private isFinishLoading: Boolean = false;
    // Array of Number
    constructor(
        private router: Router,
        private softwarePostouchDetailService: Software_PostouchDetail_Service,
        private toastr: ToastsManager,
        private vcRef: ViewContainerRef,
        private activatedRoute: ActivatedRoute,
    ) {
        this.toastr.setRootViewContainerRef(vcRef);
    }

    private num1 = "1";
    private num2 = "2";
    private num3 = "3";
    private num4 = "4";
    private num5 = "5";
    private num6 = "6";
    private num7 = "7";
    private num8 = "8";
    private num9 = "9";
    private num0 = "0";
    private log: string = '';

    private logText(value: string): void {
        this.log += `${value}`
    }


    // removeNumbers(removeNumberByOne: any) {
    //     let index = this.keypadNumber.indexOf(removeNumberByOne);
    //     this.keypadNumber.splice(index, 1);
    // }

    // removeAllNumbers(removeNumber: any) {
    //     let index = this.keypadNumber.indexOf(removeNumber);
    //     this.keypadNumber.splice(index);
    // }


    public getIdUrlParameter() {
        this.activatedRoute.params.subscribe(params => {
            this.postouchDetailId = params['id'];
        });
        return this.postouchDetailId;
    }

    public ngOnInit(): any {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.postouchDetailCollectionView = new wijmo.collections.CollectionView(this.softwarePostouchDetailService.getListItem(this.getIdUrlParameter()));
        this.getItemGroup();
    }

    public loadItemGroupData() {
        this.isLoading = false;
        this.isFinishLoading = true;
    }

    //
    //MST ITEM GROUp
    //

    public getItemGroup(): void {
        this.postouchDetailList = new wijmo.collections.CollectionView(this.softwarePostouchDetailService.getListItemGroup());
        this.postouchDetailList.pageSize = 1;
        this.postouchDetailList.trackChanges = true;
    }


    public setItemGroupSelectedValue(): void {
        this.filterItemGroupSelectedValue = "1";
    }


    public itemGroupMoveToNextPage(): void {
        this.postouchDetailList.moveToNextPage();
        this.itemGroupIndex = (this.postouchDetailList.pageIndex + 1) + " / " + this.postouchDetailList.pageCount;
    }

    public itemGroupMoveToPreviousPage(): void {
        this.postouchDetailList.moveToPreviousPage();
        this.itemGroupIndex = (this.postouchDetailList.pageIndex + 1) + " / " + this.postouchDetailList.pageCount;
    }

    public btnItemGroup1Click() {
        var currentId = this.postouchDetailList.currentItem;
        this.loadItemGroupData();
        this.getItemGroupItem(currentId.itemGroup1Id);
    }

    public btnItemGroup2Click() {
        var currentId = this.postouchDetailList.currentItem;
        this.loadItemGroupData();
        this.getItemGroupItem(currentId.itemGroup2Id);
    }

    public btnItemGroup3Click() {
        var currentId = this.postouchDetailList.currentItem;
        this.loadItemGroupData();
        this.getItemGroupItem(currentId.itemGroup3Id);
    }

    public btnItemGroup4Click() {
        var currentId = this.postouchDetailList.currentItem;
        this.loadItemGroupData();
        this.getItemGroupItem(currentId.itemGroup4Id);
    }

    public btnItemGroup5Click() {
        var currentId = this.postouchDetailList.currentItem;
        this.loadItemGroupData();
        this.getItemGroupItem(currentId.itemGroup5Id);
    }

    public btnItemGroup6Click() {
        var currentId = this.postouchDetailList.currentItem;
        this.loadItemGroupData();
        this.getItemGroupItem(currentId.itemGroup6Id);
    }

    //
    //MST ITEM GROUP ITEM
    // 

    public getItemGroupItem(itemGroupId: number): void {
        this.postouchDetailListGroup = new wijmo.collections.CollectionView(this.softwarePostouchDetailService.getListItemGroupItem(itemGroupId));
        this.postouchDetailListGroup.pageSize = 5;
        this.postouchDetailListGroup.trackChanges = true;
    }


    public keypadModal() {
        (<HTMLButtonElement>document.getElementById("keypadModal")).click();
    }



}

