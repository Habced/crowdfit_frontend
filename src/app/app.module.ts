import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuManagementComponent } from './menu-management/menu-management.component';
import { ResidentManagementComponent } from './resident-management/resident-management.component';
import { StaffManagementComponent } from './staff-management/staff-management.component';
import { AccountingManagementComponent } from './accounting-management/accounting-management.component';
import { StoreManagementComponent } from './store-management/store-management.component';
import { LockerManagementComponent } from './locker-management/locker-management.component';
import { ClassManagementComponent } from './class-management/class-management.component';
import { AttendenceManagementComponent } from './attendence-management/attendence-management.component';
import { ServiceCenterComponent } from './service-center/service-center.component';
import { PermissionSettingsComponent } from './permission-settings/permission-settings.component';
import { HomeComponent } from './home/home.component';
import { BulletinBoardManagementComponent } from './bulletin-board-management/bulletin-board-management.component';
import { DanjiManagementComponent } from './danji-management/danji-management.component';
import { CommunityComponent } from './community/community.component';
import { CultureCourseComponent } from './culture-course/culture-course.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuManagementComponent,
    ResidentManagementComponent,
    StaffManagementComponent,
    AccountingManagementComponent,
    StoreManagementComponent,
    LockerManagementComponent,
    ClassManagementComponent,
    AttendenceManagementComponent,
    ServiceCenterComponent,
    PermissionSettingsComponent,
    HomeComponent,
    BulletinBoardManagementComponent,
    DanjiManagementComponent,
    CommunityComponent,
    CultureCourseComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
