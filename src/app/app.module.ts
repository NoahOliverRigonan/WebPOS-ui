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
  { path: 'pos', component: Software_Pos_Component }
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
    Software_Pos_Component
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
