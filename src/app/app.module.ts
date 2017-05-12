import { NgModule, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import * as wjFlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjInput from 'wijmo/wijmo.angular2.input';

// components
import { AppComponent } from './app.component';
import { Security_Login_Component } from './security_login/security_login_component/security_login.component';
import { Shared_Header_Component } from './shared_header/shared_header_component/shared_header.component';
import { Shared_Footer_Component } from './shared_footer/shared_footer_component/shared_footer.component';
import { Landing_Page_Component } from './landing_page/landing_page_component/landing_page.component';
import { Software_Dashboard_Component } from './software_dashboard/software_dashboard_component/software_dashboard.component';
import { Software_Postouch_Component } from './software_postouch/software_postouch_component/software_postouch.component';
import { Software_Pos_Component } from './software_pos/software_pos_component/software_pos.component';
import { Software_Item_Component } from './software_item/software_item_component/software_item.component';
import { Software_Discount_Component } from './software_discount/software_discount_component/software_discount.component';
import { Software_Customer_Component } from './software_customer/software_customer_component/software_customer.component';
import { Software_Supplier_Component } from './software_supplier/software_supplier_component/software_supplier.component';
import { Software_SystemTable_Component } from './software_systemtables/software_systemtables_component/software_systemtables.component';
import { Software_User_Component } from './software_user/software_user_component/software_user.component';
import { Software_Collection_Component } from './software_collection/software_collection_component/software_collection.component';
import { Software_Purchase_Component } from './software_purchase/software_purchase_component/software_purchase.component';
import { Software_Disbursement_Component } from './software_disbursement/software_disbursement_component/software_disbursement.component';
import { Software_Stockin_Component } from './software_stockin/software_stockin_component/software_stockin.component';
import { Software_Stockout_Component } from './software_stockout/software_stockout_component/software_stockout.component';
import { Software_Itemgroup_Component } from './software_itemgroup/software_itemgroup_component/software_itemgroup.component';
import { Software_Itemcomponent_Component } from './software_itemcomponent/software_itemcomponent_component/software_itemcomponent.component';
import { Software_Table_Component } from './software_table/software_table_component/software_table.component';
import { Software_Inventory_Component } from './software_inventory/software_inventory_component/software_inventory.component';
import { Software_Stockcount_Component } from './software_stockcount/software_stockcount_component/software_stockcount.component';
import { Software_Salesreport_Component } from './software_salesreport/software_salesreport_component/software_salesreport.component';
import { Software_Collectionreport_Component } from './software_collectionreport/software_collectionreport_component/software_collectionreport.component';
import { Software_Accountreceivable_Component } from './software_accountreceivable/software_accountreceivable_component/software_accountreceivable.component';
import { Software_Debitcreditmemo_Component } from './software_debitcreditmemo/software_debitcreditmemo_component/software_debitcreditmemo.component';
import { Software_Disbursementreport_Component } from './software_disbursementreport/software_disbursementreport_component/software_disbursementreport.component';
import { Software_Accountingreport_Component } from './software_accountingreport/software_accountingreport_component/software_accountingreport.component';
import { Software_Settings_Component } from './software_settings/software_settings_component/software_settings.component';
import { Software_Posreport_Component } from './software_posreport/software_posreport_component/software_posreport.component';
import { Software_80mmreport_Component } from './software_80mmreport/software_80mmreport_component/software_80mmreport.component';
import { Software_Utilities_Component } from './software_utilities/software_utilities_component/software_utilities.component';

// services
import { Security_Login_Service } from './security_login/security_login_service/security_login.service';
import { Software_Postouch_Service } from './software_postouch/software_postouch_service/software_postouch.service';

// paths and Routes
const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'app', component: AppComponent },
  { path: 'security_login', component: Security_Login_Component },
  { path: 'home', component: Landing_Page_Component },
  { path: 'dashboard', component: Software_Dashboard_Component },
  { path: 'postouch', component: Software_Postouch_Component },
  { path: 'pos', component: Software_Pos_Component },
  { path: 'item', component: Software_Item_Component },
  { path: 'discount', component: Software_Discount_Component },
  { path: 'customer', component: Software_Customer_Component },
  { path: 'supplier', component: Software_Supplier_Component },
  { path: 'systable', component: Software_SystemTable_Component },
  { path: 'user', component: Software_User_Component },
  { path: 'collection', component: Software_Collection_Component },
  { path: 'purchase', component: Software_Purchase_Component },
  { path: 'disbursement', component: Software_Disbursement_Component },
  { path: 'stock-in', component: Software_Stockin_Component },
  { path: 'stock-out', component: Software_Stockout_Component },
  { path: 'itemgroup', component: Software_Itemgroup_Component },
  { path: 'itemcomponent', component: Software_Itemcomponent_Component },
  { path: 'table', component: Software_Table_Component },
  { path: 'inventory', component: Software_Inventory_Component },
  { path: 'stock-count', component: Software_Stockcount_Component },
  { path: 'salesreport', component: Software_Salesreport_Component },
  { path: 'collectionreport', component: Software_Collectionreport_Component },
  { path: 'accountreceivable', component: Software_Accountreceivable_Component },
  { path: 'debitcreditmemo', component: Software_Debitcreditmemo_Component },
  { path: 'disbursementreport', component: Software_Disbursementreport_Component },
  { path: 'accountingreport', component: Software_Accountingreport_Component },
  { path: 'settings', component: Software_Settings_Component },
  { path: 'posreport', component: Software_Posreport_Component },
  { path: '80mmreport', component: Software_80mmreport_Component },
  { path: 'utilities', component: Software_Utilities_Component },
];

// ng_modules
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  declarations: [
    wjFlexGrid.WjFlexGrid,
    wjFlexGrid.WjFlexGridColumn,
    wjFlexGrid.WjFlexGridCellTemplate,
    wjInput.WjComboBox,
    wjInput.WjInputDate,
    AppComponent,
    Security_Login_Component,
    Shared_Header_Component,
    Shared_Footer_Component,
    Landing_Page_Component,
    Software_Dashboard_Component,
    Software_Postouch_Component,
    Software_Pos_Component,
    Software_Item_Component,
    Software_Discount_Component,
    Software_Customer_Component,
    Software_Supplier_Component,
    Software_SystemTable_Component,
    Software_User_Component,
    Software_Collection_Component,
    Software_Purchase_Component,
    Software_Disbursement_Component,
    Software_Stockin_Component,
    Software_Stockout_Component,
    Software_Itemgroup_Component,
    Software_Itemcomponent_Component,
    Software_Table_Component,
    Software_Inventory_Component,
    Software_Stockcount_Component,
    Software_Salesreport_Component,
    Software_Collectionreport_Component,
    Software_Accountreceivable_Component,
    Software_Debitcreditmemo_Component,
    Software_Disbursementreport_Component,
    Software_Accountingreport_Component,
    Software_Settings_Component,
    Software_Posreport_Component,
    Software_80mmreport_Component,
    Software_Utilities_Component
  ],
  providers: [
    Security_Login_Service,
    Software_Postouch_Service
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }

// Bootstrap application with hash style navigation and global services.
enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
