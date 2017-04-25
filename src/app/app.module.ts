import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

// components
import { AppComponent } from './app.component';
import { Security_Login_Component } from './security_login/security_login_component/security_login.component';
import { Shared_Header_Component } from './shared_header/shared_header_component/shared_header.component';
import { Shared_Footer_Component } from './shared_footer/shared_footer_component/shared_footer.component';
import { Landing_Page_Component } from './landing_page/landing_page_component/landing_page.component';

// services
import { Security_Login_Service } from './security_login/security_login_service/security_login.service';

// paths and Routes
const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'app', component: AppComponent },
  { path: 'security_login', component: Security_Login_Component },
  { path: 'home', component: Landing_Page_Component}
];

// ng_modules
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AppComponent,
    Security_Login_Component,
    Shared_Header_Component,
    Shared_Footer_Component,
    Landing_Page_Component
  ],
  providers: [
    Security_Login_Service
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
