import { A11yModule } from '@angular/cdk/a11y';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';


import { AccountingManagementComponent } from './accounting-management/accounting-management.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AttendenceManagementComponent } from './attendence-management/attendence-management.component';
import { BulletinBoardManagementComponent } from './bulletin-board-management/bulletin-board-management.component';
import { ClassManagementComponent } from './class-management/class-management.component';
import { CommunityComponent } from './community/community.component';
import { CostNoticeManagementComponent } from './cost-notice-management/cost-notice-management.component';
import { CultureCourseComponent } from './culture-course/culture-course.component';
import { DanjiManagementComponent } from './danji-management/danji-management.component';
import { FooterComponent } from './components/footer/footer.component';
import { GxManagementComponent } from './gx-management/gx-management.component';
import { HeaderComponent } from './components/header/header.component';
import { LessonManagementComponent } from './lesson-management/lesson-management.component';
import { LockerManagementComponent } from './locker-management/locker-management.component';
import { MenuManagementComponent } from './menu-management/menu-management.component';
import { PermissionSettingsComponent } from './permission-settings/permission-settings.component';
import { ResidentManagementComponent } from './resident-management/resident-management.component';
import { SalesManagementComponent } from './sales-management/sales-management.component';
import { ServiceCenterComponent } from './service-center/service-center.component';
import { StaffManagementComponent } from './staff-management/staff-management.component';
import { StoreManagementComponent } from './store-management/store-management.component';
import { WageManagementComponent } from './wage-management/wage-management.component';


@NgModule({
  declarations: [
    AccountingManagementComponent,
    AppComponent,
    AttendenceManagementComponent,
    BulletinBoardManagementComponent,
    ClassManagementComponent,
    CommunityComponent,
    CostNoticeManagementComponent,
    CultureCourseComponent,
    DanjiManagementComponent,
    FooterComponent,
    GxManagementComponent,
    HeaderComponent,
    LessonManagementComponent,
    LockerManagementComponent,
    MenuManagementComponent,
    PermissionSettingsComponent,
    ResidentManagementComponent,
    SalesManagementComponent,
    ServiceCenterComponent,
    StaffManagementComponent,
    StoreManagementComponent,
    WageManagementComponent,
  ],
  imports: [
    A11yModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
