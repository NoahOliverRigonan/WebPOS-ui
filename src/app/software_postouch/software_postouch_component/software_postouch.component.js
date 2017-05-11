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
var software_postouch_service_1 = require("../software_postouch_service/software_postouch.service");
var router_1 = require("@angular/router");
var Software_Postouch_Component = (function () {
    function Software_Postouch_Component(router, tableGroupService) {
        this.router = router;
        this.tableGroupService = tableGroupService;
        this.filterTableGroupSelectedValue = "1";
        this.isLoading = true;
        this.isFinishLoading = false;
        this.isTableGroupSelected = false;
    }
    Software_Postouch_Component.prototype.filterTableGroupSelectedIndexChanged = function () {
        if (this.isTableGroupSelected) {
            console.log(this.filterTableGroupSelectedValue);
        }
        else {
            this.isTableGroupSelected = true;
        }
    };
    Software_Postouch_Component.prototype.getTableGroup = function () {
        this.tableGroupList = this.tableGroupService.getListTableGroup();
    };
    Software_Postouch_Component.prototype.setTableGroupSelectedValue = function () {
        this.filterTableGroupSelectedValue = "1";
    };
    Software_Postouch_Component.prototype.loadTableGroupData = function () {
        this.isLoading = false;
        this.isFinishLoading = true;
    };
    Software_Postouch_Component.prototype.ngOnInit = function () {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['security_login']);
        }
        this.getTableGroup();
    };
    return Software_Postouch_Component;
}());
Software_Postouch_Component = __decorate([
    core_1.Component({
        selector: 'software_postouch',
        templateUrl: 'app/software_postouch/software_postouch_template/software_postouch.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        software_postouch_service_1.TableGroupService])
], Software_Postouch_Component);
exports.Software_Postouch_Component = Software_Postouch_Component;
//# sourceMappingURL=software_postouch.component.js.map