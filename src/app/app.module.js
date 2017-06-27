"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var ng2_toastr_2 = require("ng2-toastr/ng2-toastr");
var ng2_toastr_3 = require("ng2-toastr/ng2-toastr");
var animations_1 = require("@angular/platform-browser/animations");
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
// import { MaterializeModule } from "angular2-materialize";
var wjFlexGrid = require("wijmo/wijmo.angular2.grid");
var wjInput = require("wijmo/wijmo.angular2.input");
// components
var app_component_1 = require("./app.component");
var security_login_component_1 = require("./security_login/security_login_component/security_login.component");
var shared_header_component_1 = require("./shared_header/shared_header_component/shared_header.component");
var shared_footer_component_1 = require("./shared_footer/shared_footer_component/shared_footer.component");
var landing_page_component_1 = require("./landing_page/landing_page_component/landing_page.component");
var software_dashboard_component_1 = require("./software_dashboard/software_dashboard_component/software_dashboard.component");
var software_postouch_component_1 = require("./software_postouch/software_postouch_component/software_postouch.component");
var software_pos_component_1 = require("./software_pos/software_pos_component/software_pos.component");
var software_item_component_1 = require("./software_item/software_item_component/software_item.component");
var software_discount_component_1 = require("./software_discount/software_discount_component/software_discount.component");
var software_customer_component_1 = require("./software_customer/software_customer_component/software_customer.component");
var software_supplier_component_1 = require("./software_supplier/software_supplier_component/software_supplier.component");
var software_systemtables_component_1 = require("./software_systemtables/software_systemtables_component/software_systemtables.component");
var software_user_component_1 = require("./software_user/software_user_component/software_user.component");
var software_collection_component_1 = require("./software_collection/software_collection_component/software_collection.component");
var software_purchase_component_1 = require("./software_purchase/software_purchase_component/software_purchase.component");
var software_disbursement_component_1 = require("./software_disbursement/software_disbursement_component/software_disbursement.component");
var software_stockin_component_1 = require("./software_stockin/software_stockin_component/software_stockin.component");
var software_stockout_component_1 = require("./software_stockout/software_stockout_component/software_stockout.component");
var software_itemgroup_component_1 = require("./software_itemgroup/software_itemgroup_component/software_itemgroup.component");
var software_itemcomponent_component_1 = require("./software_itemcomponent/software_itemcomponent_component/software_itemcomponent.component");
var software_table_component_1 = require("./software_table/software_table_component/software_table.component");
var software_inventory_component_1 = require("./software_inventory/software_inventory_component/software_inventory.component");
var software_stockcount_component_1 = require("./software_stockcount/software_stockcount_component/software_stockcount.component");
var software_salesreport_component_1 = require("./software_salesreport/software_salesreport_component/software_salesreport.component");
var software_collectionreport_component_1 = require("./software_collectionreport/software_collectionreport_component/software_collectionreport.component");
var software_accountreceivable_component_1 = require("./software_accountreceivable/software_accountreceivable_component/software_accountreceivable.component");
var software_debitcreditmemo_component_1 = require("./software_debitcreditmemo/software_debitcreditmemo_component/software_debitcreditmemo.component");
var software_disbursementreport_component_1 = require("./software_disbursementreport/software_disbursementreport_component/software_disbursementreport.component");
var software_accountingreport_component_1 = require("./software_accountingreport/software_accountingreport_component/software_accountingreport.component");
var software_settings_component_1 = require("./software_settings/software_settings_component/software_settings.component");
var software_posreport_component_1 = require("./software_posreport/software_posreport_component/software_posreport.component");
var software_80mmreport_component_1 = require("./software_80mmreport/software_80mmreport_component/software_80mmreport.component");
var software_utilities_component_1 = require("./software_utilities/software_utilities_component/software_utilities.component");
//SOFTWARE DETAIL
var software_itemdetail_component_1 = require("./software_itemdetail/software_itemdetail_component/software_itemdetail.component");
var software_discountdetail_component_1 = require("./software_discountdetail/software_discountdetail_component/software_discountdetail.component");
var software_postouchdetail_component_1 = require("./software_postouchdetail/software_postouchdetail_component/software_postouchdetail.component");
var software_supplierdetail_component_1 = require("./software_supplier_detail/software_supplierdetail_component/software_supplierdetail.component");
var software_userdetail_component_1 = require("./software_userdetail/software_userdetail_component/software_userdetail.component");
// SERVICES
var security_login_service_1 = require("./security_login/security_login_service/security_login.service");
var software_postouch_service_1 = require("./software_postouch/software_postouch_service/software_postouch.service");
var software_item_service_1 = require("./software_item/software_item_service/software_item.service");
var software_itemgroup_service_1 = require("./software_itemgroup/software_itemgroup_service/software_itemgroup.service");
var software_itemcomponent_service_1 = require("./software_itemcomponent/software_itemcomponent_service/software_itemcomponent.service");
var software_itemdetail_service_1 = require("./software_itemdetail/software_itemdetail_service/software_itemdetail.service");
var software_discount_service_1 = require("./software_discount/software_discount_service/software_discount.service");
var software_discountdetail_service_1 = require("./software_discountdetail/software_discountdetail_service/software_discountdetail.service");
var software_table_service_1 = require("./software_table/software_table_service/software_table.service");
var software_postouchdetail_service_1 = require("./software_postouchdetail/software_postouchdetail_service/software_postouchdetail.service");
var software_user_service_1 = require("./software_user/software_user_service/software_user.service");
var software_customer_service_1 = require("./software_customer/software_customer_service/software_customer.service");
var software_supplier_service_1 = require("./software_supplier/software_supplier_service/software_supplier.service");
var software_supplierdetail_service_1 = require("./software_supplier_detail/software_supplierdetail_service/software_supplierdetail.service");
var software_userdetail_service_1 = require("./software_userdetail/software_userdetail_service/software_userdetail.service");
// paths and Routes
var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'app', component: app_component_1.AppComponent },
    { path: 'security_login', component: security_login_component_1.Security_Login_Component },
    { path: 'home', component: landing_page_component_1.Landing_Page_Component },
    { path: 'dashboard', component: software_dashboard_component_1.Software_Dashboard_Component },
    { path: 'postouch', component: software_postouch_component_1.Software_Postouch_Component },
    { path: 'pos', component: software_pos_component_1.Software_Pos_Component },
    { path: 'item', component: software_item_component_1.Software_Item_Component },
    { path: 'discount', component: software_discount_component_1.Software_Discount_Component },
    { path: 'customer', component: software_customer_component_1.Software_Customer_Component },
    { path: 'supplier', component: software_supplier_component_1.Software_Supplier_Component },
    { path: 'systable', component: software_systemtables_component_1.Software_SystemTable_Component },
    { path: 'user', component: software_user_component_1.Software_User_Component },
    { path: 'collection', component: software_collection_component_1.Software_Collection_Component },
    { path: 'purchase', component: software_purchase_component_1.Software_Purchase_Component },
    { path: 'disbursement', component: software_disbursement_component_1.Software_Disbursement_Component },
    { path: 'stock-in', component: software_stockin_component_1.Software_Stockin_Component },
    { path: 'stock-out', component: software_stockout_component_1.Software_Stockout_Component },
    { path: 'itemgroup', component: software_itemgroup_component_1.Software_Itemgroup_Component },
    { path: 'itemcomponent', component: software_itemcomponent_component_1.Software_Itemcomponent_Component },
    { path: 'table', component: software_table_component_1.Software_Table_Component },
    { path: 'inventory', component: software_inventory_component_1.Software_Inventory_Component },
    { path: 'stock-count', component: software_stockcount_component_1.Software_Stockcount_Component },
    { path: 'salesreport', component: software_salesreport_component_1.Software_Salesreport_Component },
    { path: 'collectionreport', component: software_collectionreport_component_1.Software_Collectionreport_Component },
    { path: 'accountreceivable', component: software_accountreceivable_component_1.Software_Accountreceivable_Component },
    { path: 'debitcreditmemo', component: software_debitcreditmemo_component_1.Software_Debitcreditmemo_Component },
    { path: 'disbursementreport', component: software_disbursementreport_component_1.Software_Disbursementreport_Component },
    { path: 'accountingreport', component: software_accountingreport_component_1.Software_Accountingreport_Component },
    { path: 'settings', component: software_settings_component_1.Software_Settings_Component },
    { path: 'posreport', component: software_posreport_component_1.Software_Posreport_Component },
    { path: '80mmreport', component: software_80mmreport_component_1.Software_80mmreport_Component },
    { path: 'utilities', component: software_utilities_component_1.Software_Utilities_Component },
    //POS13 SOFTWARE DETAIL
    { path: 'itemdetail/:id', component: software_itemdetail_component_1.Software_Itemdetail_Component },
    { path: 'discountdetail/:id', component: software_discountdetail_component_1.Software_Discountdetail_Component },
    { path: 'postouchdetail/:id', component: software_postouchdetail_component_1.Software_PostouchDetail_Component },
    { path: 'supplierdetail/:id', component: software_supplierdetail_component_1.Software_SupplierDetail_Component },
    { path: 'userdetail/:id', component: software_userdetail_component_1.Software_UserDetail_Component },
];
// ng_modules
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(appRoutes),
            forms_1.FormsModule,
            http_1.HttpModule,
            ng2_toastr_2.ToastModule,
            animations_1.BrowserAnimationsModule,
            ng2_slim_loading_bar_1.SlimLoadingBarModule.forRoot(),
        ],
        declarations: [
            wjFlexGrid.WjFlexGrid,
            wjFlexGrid.WjFlexGridColumn,
            wjFlexGrid.WjFlexGridCellTemplate,
            wjInput.WjComboBox,
            wjInput.WjInputDate,
            app_component_1.AppComponent,
            security_login_component_1.Security_Login_Component,
            shared_header_component_1.Shared_Header_Component,
            shared_footer_component_1.Shared_Footer_Component,
            landing_page_component_1.Landing_Page_Component,
            software_dashboard_component_1.Software_Dashboard_Component,
            software_postouch_component_1.Software_Postouch_Component,
            software_pos_component_1.Software_Pos_Component,
            software_item_component_1.Software_Item_Component,
            software_discount_component_1.Software_Discount_Component,
            software_customer_component_1.Software_Customer_Component,
            software_supplier_component_1.Software_Supplier_Component,
            software_systemtables_component_1.Software_SystemTable_Component,
            software_user_component_1.Software_User_Component,
            software_collection_component_1.Software_Collection_Component,
            software_purchase_component_1.Software_Purchase_Component,
            software_disbursement_component_1.Software_Disbursement_Component,
            software_stockin_component_1.Software_Stockin_Component,
            software_stockout_component_1.Software_Stockout_Component,
            software_itemgroup_component_1.Software_Itemgroup_Component,
            software_itemcomponent_component_1.Software_Itemcomponent_Component,
            software_table_component_1.Software_Table_Component,
            software_inventory_component_1.Software_Inventory_Component,
            software_stockcount_component_1.Software_Stockcount_Component,
            software_salesreport_component_1.Software_Salesreport_Component,
            software_collectionreport_component_1.Software_Collectionreport_Component,
            software_accountreceivable_component_1.Software_Accountreceivable_Component,
            software_debitcreditmemo_component_1.Software_Debitcreditmemo_Component,
            software_disbursementreport_component_1.Software_Disbursementreport_Component,
            software_accountingreport_component_1.Software_Accountingreport_Component,
            software_settings_component_1.Software_Settings_Component,
            software_posreport_component_1.Software_Posreport_Component,
            software_80mmreport_component_1.Software_80mmreport_Component,
            software_utilities_component_1.Software_Utilities_Component,
            // SOFTWARE DETAIL 
            software_itemdetail_component_1.Software_Itemdetail_Component,
            software_discountdetail_component_1.Software_Discountdetail_Component,
            software_postouchdetail_component_1.Software_PostouchDetail_Component,
            software_supplierdetail_component_1.Software_SupplierDetail_Component,
            software_userdetail_component_1.Software_UserDetail_Component,
        ],
        providers: [
            security_login_service_1.Security_Login_Service,
            software_postouch_service_1.Software_Postouch_Service,
            software_item_service_1.Software_Item_Service,
            software_itemgroup_service_1.Software_ItemGroup_Service,
            software_discount_service_1.Software_Discount_Service,
            software_table_service_1.Software_TableGroup_Service,
            software_itemcomponent_service_1.Software_ItemComponent_Service,
            software_user_service_1.Software_User_Service,
            software_customer_service_1.Software_Customer_Service,
            software_supplier_service_1.Software_Supplier_Service,
            software_userdetail_service_1.Software_UserDetail_Service,
            //Other
            ng2_toastr_1.ToastsManager,
            ng2_toastr_3.ToastOptions,
            //SOFTWARE DETAIL SERVICE PROVIDERS
            software_itemdetail_service_1.Software_Itemdetail_Service,
            software_postouchdetail_service_1.Software_PostouchDetail_Service,
            software_discountdetail_service_1.Software_Discountdetail_Service,
            software_supplierdetail_service_1.Software_SupplierDetail_Service,
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
// Bootstrap application with hash style navigation and global services.
core_1.enableProdMode();
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=app.module.js.map