"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
// components
var app_component_1 = require("./app.component");
var security_login_component_1 = require("./security_login/security_login_component/security_login.component");
var shared_header_component_1 = require("./shared_header/shared_header_component/shared_header.component");
var shared_footer_component_1 = require("./shared_footer/shared_footer_component/shared_footer.component");
var landing_page_component_1 = require("./landing_page/landing_page_component/landing_page.component");
// services
var security_login_service_1 = require("./security_login/security_login_service/security_login.service");
// paths and Routes
var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'app', component: app_component_1.AppComponent },
    { path: 'security_login', component: security_login_component_1.Security_Login_Component },
    { path: 'home', component: landing_page_component_1.Landing_Page_Component }
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
        ],
        declarations: [
            app_component_1.AppComponent,
            security_login_component_1.Security_Login_Component,
            shared_header_component_1.Shared_Header_Component,
            shared_footer_component_1.Shared_Footer_Component,
            landing_page_component_1.Landing_Page_Component
        ],
        providers: [
            security_login_service_1.Security_Login_Service
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map