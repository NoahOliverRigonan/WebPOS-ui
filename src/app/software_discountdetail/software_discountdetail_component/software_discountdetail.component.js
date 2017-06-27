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
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var Software_Discountdetail_Component = (function () {
    function Software_Discountdetail_Component(router, softwareDiscountItemService, activatedRoute, toastr) {
        this.router = router;
        this.softwareDiscountItemService = softwareDiscountItemService;
        this.activatedRoute = activatedRoute;
        this.toastr = toastr;
    }
    Software_Discountdetail_Component.prototype.getIdUrlParameter = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.discountId = params['id'];
        });
        return this.discountId;
    };
    Software_Discountdetail_Component.prototype.ngOnInit = function () {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.itemDiscountCollectionView = new wijmo.collections.CollectionView(this.softwareDiscountItemService.getItemDiscountDetail());
        this.DiscountCollectionView = new wijmo.collections.CollectionView(this.softwareDiscountItemService.getDiscountDetail(this.getIdUrlParameter()));
    };
    Software_Discountdetail_Component.prototype.setFieldValuesItemDiscount = function () {
        if (this.itemDiscountCollectionView.items.length > 0) {
            this.listOfItemCodeObservableArray = this.itemDiscountCollectionView.items[0].listOfItemCode;
            this.listOfItemCodeCollectionView = new wijmo.collections.CollectionView(this.listOfItemCodeObservableArray);
            if (this.itemDiscountCollectionView.items.length > 0) {
                this.listOfItemCodeCollectionView.items[0].listOfItemCode = this.itemDiscountCollectionView.items[0].listOfItemCode;
            }
            this.listOfItemDescriptionObservableArray = this.itemDiscountCollectionView.items[0].listOfItemDescription;
            this.listOfItemDescriptionCollectionView = new wijmo.collections.CollectionView(this.listOfItemDescriptionObservableArray);
            if (this.itemDiscountCollectionView.items.length > 0) {
                this.listOfItemDescriptionCollectionView.items[0].listOfItemDescription = this.itemDiscountCollectionView.items[0].listOfItemDescription;
            }
        }
    };
    Software_Discountdetail_Component.prototype.setFieldValuesDiscount = function () {
        if (this.DiscountCollectionView.items.length > 0) {
            document.getElementById("Discount").value = this.DiscountCollectionView.items[0].Discount;
            document.getElementById("DiscountRate").value = this.DiscountCollectionView.items[0].DiscountRate;
            document.getElementById("VatExempt").checked = this.DiscountCollectionView.items[0].IsVatExempt;
            document.getElementById("DateSchedule").checked = this.DiscountCollectionView.items[0].IsDateScheduled;
            this.DateStart = this.DiscountCollectionView.items[0].DateStart;
            this.DateEnd = this.DiscountCollectionView.items[0].DateEnd;
            document.getElementById("DayScheduled").checked = this.DiscountCollectionView.items[0].IsDayScheduled;
            document.getElementById("Mon").checked = this.DiscountCollectionView.items[0].DayMon;
            document.getElementById("Tue").checked = this.DiscountCollectionView.items[0].DayTue;
            document.getElementById("Wed").checked = this.DiscountCollectionView.items[0].DayWed;
            document.getElementById("Thu").checked = this.DiscountCollectionView.items[0].DayThu;
            document.getElementById("Fri").checked = this.DiscountCollectionView.items[0].DayFri;
            document.getElementById("Sat").checked = this.DiscountCollectionView.items[0].DaySat;
            document.getElementById("Sun").checked = this.DiscountCollectionView.items[0].DaySun;
            document.getElementById("TimeScheduled").checked = this.DiscountCollectionView.items[0].IsTimeScheduled;
            document.getElementById("TimeStart").value = this.DiscountCollectionView.items[0].TimeStart;
            document.getElementById("TimeEnd").value = this.DiscountCollectionView.items[0].TimeEnd;
        }
        else {
        }
    };
    Software_Discountdetail_Component.prototype.cboItemCodeSelectedIndex = function () {
        this.itemDiscountCollectionView.items[0].listOfItemCode[this.itemCodeSelectedIndex].Id;
        console.log(this.listOfItemCodeCollectionView.items[0].listOfItemCode[this.itemCodeSelectedIndex].Id);
    };
    Software_Discountdetail_Component.prototype.cboItemDescriptionSelectedIndex = function () {
        this.itemDiscountCollectionView.items[0].listOfItemDescription[this.itemDescriptionSelectedIndex].Id;
        console.log(this.listOfItemDescriptionCollectionView.items[0].listOfItemDescription[this.itemDescriptionSelectedIndex].Id);
    };
    Software_Discountdetail_Component.prototype.deleteDiscountItems = function () {
        var toastr;
        var currentDiscountSelectedItem = this.itemDiscountCollectionView.currentItem;
        if (currentDiscountSelectedItem.Discount == "n/a" || currentDiscountSelectedItem.DiscountRate == 0 || currentDiscountSelectedItem.IsVatExempt == false) {
            this.softwareDiscountItemService.deleteDiscountItem(currentDiscountSelectedItem.Id, toastr);
        }
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
    return Software_Discountdetail_Component;
}());
Software_Discountdetail_Component = __decorate([
    core_1.Component({
        selector: 'software_discountdetail',
        templateUrl: 'app/software_discountdetail/software_discountdetail_template/software_discountdetail.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        software_discountdetail_service_1.Software_Discountdetail_Service,
        router_1.ActivatedRoute,
        ng2_toastr_1.ToastsManager])
], Software_Discountdetail_Component);
exports.Software_Discountdetail_Component = Software_Discountdetail_Component;
//# sourceMappingURL=software_discountdetail.component.js.map