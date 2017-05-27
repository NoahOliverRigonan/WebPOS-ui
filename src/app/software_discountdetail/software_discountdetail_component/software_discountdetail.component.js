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
var Software_Discountdetail_Component = (function () {
    function Software_Discountdetail_Component(router, softwareDiscountItemService) {
        this.router = router;
        this.softwareDiscountItemService = softwareDiscountItemService;
    }
    Software_Discountdetail_Component.prototype.ngOnInit = function () {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.itemDiscountCollectionView = new wijmo.collections.CollectionView(this.softwareDiscountItemService.getItemDiscountDetail());
    };
    Software_Discountdetail_Component.prototype.setFieldValues = function () {
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
            this.DateStart = this.itemCollectionView.items[0].DateStart;
            this.DateEnd = this.itemCollectionView.items[0].DateEnd;
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
    Software_Discountdetail_Component.prototype.addItemModal = function () {
        document.getElementById("btn-hidden-add-detail-modal").click();
    };
    Software_Discountdetail_Component.prototype.getDiscountItemObjecet = function () {
        var dataObject = {
            Discount: DiscountRate,
            IsVatExempt: IsDateScheduled,
            DateStart: DateEnd,
            IsTimeScheduled: TimeStart,
            TimeEnd: IsDayScheduled,
            DayMon: DayTue,
            DayWed: DayThu,
            DayFri: DaySat,
            DaySun: EntryUserId,
            EntryDateTime: UpdateUserId,
            UpdateDateTime: IsLocked
        };
    };
    return Software_Discountdetail_Component;
}());
Software_Discountdetail_Component = __decorate([
    core_1.Component({
        selector: 'software_discountdetail',
        templateUrl: 'app/software_discountdetail/software_discountdetail_template/software_discountdetail.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        software_discountdetail_service_1.Software_Discountdetail_Service])
], Software_Discountdetail_Component);
exports.Software_Discountdetail_Component = Software_Discountdetail_Component;
//# sourceMappingURL=software_discountdetail.component.js.map