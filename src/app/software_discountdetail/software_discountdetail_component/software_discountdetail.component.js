"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var software_discountdetail_service_1 = require("../software_discountdetail_service/software_discountdetail.service");
var software_discountdetail_service_2 = require("../software_discountdetail_service/software_discountdetail.service");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var Software_Discountdetail_Component = (function () {
    function Software_Discountdetail_Component(router, softwareDiscountDetailService, softwareDiscountItemService, activatedRoute, toastr, vcRef) {
        this.router = router;
        this.softwareDiscountDetailService = softwareDiscountDetailService;
        this.softwareDiscountItemService = softwareDiscountItemService;
        this.activatedRoute = activatedRoute;
        this.toastr = toastr;
        this.vcRef = vcRef;
        this.toastr.setRootViewContainerRef(vcRef);
    }
    Software_Discountdetail_Component.prototype.getIdUrlParameter = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.discountId = params['id'];
        });
        return this.discountId;
    };
    Software_Discountdetail_Component.prototype.getDiscountItem = function () {
        this.itemDiscountCollectionView = new wijmo.collections.CollectionView(this.softwareDiscountItemService.getItemDiscountDetail(this.getIdUrlParameter()));
        this.itemDiscountCollectionView.pageSize = 15;
    };
    Software_Discountdetail_Component.prototype.setFieldValuesItemDiscount = function () {
        if (this.DiscountCollectionView.items.length > 0) {
            document.getElementById("Discount").value = this.DiscountCollectionView.items[0].Discount;
            document.getElementById("DiscountRate").value = this.DiscountCollectionView.items[0].DiscountRate;
            document.getElementById("IsVatExempt").checked = this.DiscountCollectionView.items[0].IsVatExempt;
            document.getElementById("IsDateScheduled").checked = this.DiscountCollectionView.items[0].IsDateScheduled;
            this.DateStart = this.DiscountCollectionView.items[0].DateStart;
            this.DateEnd = this.DiscountCollectionView.items[0].DateEnd;
            document.getElementById("IsDayScheduled").checked = this.DiscountCollectionView.items[0].IsDayScheduled;
            document.getElementById("DayMon").checked = this.DiscountCollectionView.items[0].DayMon;
            document.getElementById("DayTue").checked = this.DiscountCollectionView.items[0].DayTue;
            document.getElementById("DayWed").checked = this.DiscountCollectionView.items[0].DayWed;
            document.getElementById("DayThu").checked = this.DiscountCollectionView.items[0].DayThu;
            document.getElementById("DayFri").checked = this.DiscountCollectionView.items[0].DayFri;
            document.getElementById("DaySat").checked = this.DiscountCollectionView.items[0].DaySat;
            document.getElementById("DaySun").checked = this.DiscountCollectionView.items[0].DaySun;
            document.getElementById("IsTimeScheduled").checked = this.DiscountCollectionView.items[0].IsTimeScheduled;
            document.getElementById("TimeStart").valueAsDate = this.DiscountCollectionView.items[0].TimeStart;
            document.getElementById("TimeEnd").valueAsDate = this.DiscountCollectionView.items[0].TimeEnd;
            this.listOfItemCodeObservableArray = this.DiscountCollectionView.items[0].listOfItemCode;
            this.listOfItemCodeCollectionView = new wijmo.collections.CollectionView(this.listOfItemCodeObservableArray);
            this.listOfItemCodeCollectionView.items[0].listOfItemCode = this.DiscountCollectionView.items[0].listOfItemCode;
            this.listOfItemDescriptionObservableArray = this.DiscountCollectionView.items[0].listOfItemDescription;
            this.listOfItemDescriptionCollectionView = new wijmo.collections.CollectionView(this.listOfItemDescriptionObservableArray);
            this.listOfItemDescriptionCollectionView.items[0].listOfItemDescription = this.DiscountCollectionView.items[0].listOfItemDescription;
        }
    };
    Software_Discountdetail_Component.prototype.cboItemCodeSelectedIndex = function () {
        this.DiscountCollectionView.items[0].listOfItemCode[this.itemCodeSelectedIndex].Id;
        console.log(this.listOfItemCodeCollectionView.items[0].listOfItemCode[this.itemCodeSelectedIndex].Id);
    };
    Software_Discountdetail_Component.prototype.cboItemDescriptionSelectedIndex = function () {
        this.DiscountCollectionView.items[0].listOfItemDescription[this.itemDescriptionSelectedIndex].Id;
        console.log(this.listOfItemDescriptionCollectionView.items[0].listOfItemDescription[this.itemDescriptionSelectedIndex].Id);
    };
    Software_Discountdetail_Component.prototype.deleteDiscountItems = function () {
        var toastr;
        var currentDiscountSelectedItem = this.DiscountCollectionView.currentItem;
        this.softwareDiscountItemService.deleteDiscountItem(currentDiscountSelectedItem.Id, toastr);
    };
    Software_Discountdetail_Component.prototype.addItemModal = function () {
        document.getElementById("btn-hidden-add-detail-modal").click();
    };
    //value 
    Software_Discountdetail_Component.prototype.startDateChangeValue = function () {
    };
    Software_Discountdetail_Component.prototype.endDateChangeValue = function () {
    };
    //SET 
    Software_Discountdetail_Component.prototype.setDateRanged = function () {
        this.DateStart = new Date();
        this.DateEnd = new Date();
    };
    //DROPDOWN
    Software_Discountdetail_Component.prototype.setDropDownFields = function () {
        this.DateStart = new Date(document.getElementById("dateStart").value.toString());
        this.DateEnd = new Date(document.getElementById("dateEnd").value.toString());
    };
    Software_Discountdetail_Component.prototype.getDiscountObject = function () {
        var dataObject = {
            Discount: document.getElementById("Discount").value,
            DiscountRate: document.getElementById("DiscountRate").value,
            IsVatExempt: document.getElementById("IsVatExempt").checked,
            IsDateScheduled: document.getElementById("IsDateScheduled").checked,
            DateStart: this.DateStart,
            DateEnd: this.DateEnd,
            IsTimeScheduled: document.getElementById("IsTimeScheduled").checked,
            TimeStart: document.getElementById("TimeStart").value,
            TimeEnd: document.getElementById("TimeEnd").value,
            IsDayScheduled: document.getElementById("IsDateScheduled").checked,
            DayMon: document.getElementById("DayMon").checked,
            DayTue: document.getElementById("DayTue").checked,
            DayWed: document.getElementById("DayWed").checked,
            DayThu: document.getElementById("DayThu").checked,
            DayFri: document.getElementById("DayFri").checked,
            DaySat: document.getElementById("DaySat").checked,
            DaySun: document.getElementById("DaySun").checked,
            EntryUserId: this.DiscountCollectionView.items[0].EntryUserId,
            EntryDateTime: this.DiscountCollectionView.items[0].EntryDateTime,
            UpdateUserId: this.DiscountCollectionView.items[0].UpdateUserId,
            UpdateDateTime: this.DiscountCollectionView.items[0].UpdateDateTime,
            IsLocked: this.DiscountCollectionView.items[0].IsLocked,
        };
        return dataObject;
    };
    Software_Discountdetail_Component.prototype.btnSaveEdit = function () {
        var toastr;
        this.softwareDiscountDetailService.putDiscountData(this.getIdUrlParameter(), this.getDiscountObject(), toastr);
    };
    //
    //FOR DISCOUNT ITEM 
    //
    Software_Discountdetail_Component.prototype.getDiscountItemObject = function () {
        var dataObject = {
            DiscountId: this.getIdUrlParameter(),
            ItemId: this.DiscountCollectionView.items[0].listOfItemCode[this.itemCodeSelectedIndex].Id,
        };
        return dataObject;
    };
    Software_Discountdetail_Component.prototype.addItemDiscount = function () {
        var toastr;
        this.softwareDiscountItemService.postDiscountItem(this.getDiscountItemObject(), toastr);
        console.log(this.getDiscountItemObject());
    };
    Software_Discountdetail_Component.prototype.deleteDiscountModal = function () {
        document.getElementById("deleteModal").click();
    };
    Software_Discountdetail_Component.prototype.deleteDiscount = function () {
        var toastr;
        var currentDiscountItem = this.itemDiscountCollectionView.currentItem;
        this.softwareDiscountItemService.deleteDiscountItem(currentDiscountItem.Id, toastr);
    };
    Software_Discountdetail_Component.prototype.ngOnInit = function () {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.DiscountCollectionView = new wijmo.collections.CollectionView(this.softwareDiscountDetailService.getDiscountDetail(this.getIdUrlParameter()));
        this.getDiscountItem();
    };
    return Software_Discountdetail_Component;
}());
Software_Discountdetail_Component = __decorate([
    core_1.Component({
        selector: 'software_discountdetail',
        templateUrl: 'app/software_discountdetail/software_discountdetail_template/software_discountdetail.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        software_discountdetail_service_1.Software_Discountdetail_Service,
        software_discountdetail_service_2.Software_DiscountItem_Service,
        router_1.ActivatedRoute,
        ng2_toastr_1.ToastsManager,
        core_1.ViewContainerRef])
], Software_Discountdetail_Component);
exports.Software_Discountdetail_Component = Software_Discountdetail_Component;
//# sourceMappingURL=software_discountdetail.component.js.map