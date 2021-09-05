import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppConfigModule } from 'src/app/app-config/app-config.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastrModule } from 'ngx-toastr';
import { JwtInterceptorService } from 'src/app/services/jwt-interceptor.service';
import { ErrorInterceptorService } from 'src/app/services/error-interceptor.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { UserService } from 'src/app/services/user.service';
import { AlertService } from 'src/app/services/alert.service';
import { HeaderComponent } from 'src/app/layouts/header/header.component';
import { FooterComponent } from 'src/app/layouts/footer/footer.component';
import { SideNavComponent } from 'src/app/layouts/side-nav/side-nav.component';
import { FullComponent } from 'src/app/layouts/full/full.component';
import { RegisterComponent } from 'src/app/register/register.component';
import { LoginComponent } from 'src/app/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoaderModule } from 'src/app/shared/loader/loader.module';
import { DashboardModule } from 'src/app/modules/dashboard/dashboard.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    FullComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    HttpClientModule,
    AppConfigModule,
    NgxDatatableModule,
    ToastrModule.forRoot({
      positionClass :'toast-bottom-center'
    }),
    SharedModule,
    LoaderModule,
    DashboardModule
  ],
  providers: [
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
    JwtInterceptorService,
    ErrorInterceptorService,
    AuthenticationService,
    AuthGuardService,
    UserService,
    AlertService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
