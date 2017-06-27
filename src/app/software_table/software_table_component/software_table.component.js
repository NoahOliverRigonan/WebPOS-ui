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
var software_table_service_1 = require("../software_table_service/software_table.service");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var Software_Table_Component = (function () {
    function Software_Table_Component(router, softwareTableGroupService, toastr) {
        this.router = router;
        this.softwareTableGroupService = softwareTableGroupService;
        this.toastr = toastr;
    }
    Software_Table_Component.prototype.ngOnInit = function () {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        console.log(this.getTableGroup());
    };
    Software_Table_Component.prototype.getTableGroup = function () {
        this.tableGroupCollectionView = new wijmo.collections.CollectionView(this.softwareTableGroupService.getTableGroup());
        this.tableGroupCollectionView.pageSize = 15;
    };
    return Software_Table_Component;
}());
Software_Table_Component = __decorate([
    core_1.Component({
        selector: 'software_table',
        templateUrl: 'app/software_table/software_table_template/software_table.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        software_table_service_1.Software_TableGroup_Service,
        ng2_toastr_1.ToastsManager])
], Software_Table_Component);
exports.Software_Table_Component = Software_Table_Component;
//# sourceMappingURL=software_table.component.js.map