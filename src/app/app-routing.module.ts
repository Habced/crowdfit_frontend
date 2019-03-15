import { AccountingManagementComponent } from './accounting-management/accounting-management.component';
import { AttendenceManagementComponent } from './attendence-management/attendence-management.component';
import { BulletinBoardManagementComponent } from './bulletin-board-management/bulletin-board-management.component';
import { ClassManagementComponent } from './class-management/class-management.component';
import { CommunityComponent } from './community/community.component';
import { CostNoticeManagementComponent } from './cost-notice-management/cost-notice-management.component';
import { CultureCourseComponent } from './culture-course/culture-course.component';
import { DanjiManagementComponent } from './danji-management/danji-management.component';
import { GxManagementComponent } from './gx-management/gx-management.component';
import { LessonManagementComponent } from './lesson-management/lesson-management.component';
import { LockerManagementComponent } from './locker-management/locker-management.component';
import { MenuManagementComponent } from './menu-management/menu-management.component';
import { NgModule } from '@angular/core';
import { PermissionSettingsComponent } from './permission-settings/permission-settings.component';
import { ResidentManagementComponent } from './resident-management/resident-management.component';
import { Routes, RouterModule } from '@angular/router';
import { SalesManagementComponent } from './sales-management/sales-management.component';
import { ServiceCenterComponent } from './service-center/service-center.component';
import { StaffManagementComponent } from './staff-management/staff-management.component';
import { StoreManagementComponent } from './store-management/store-management.component';
import { WageManagementComponent } from './wage-management/wage-management.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'menu', component: MenuManagementComponent, children: [
    { path: '', redirectTo: 'bulletinboard', pathMatch: 'full' },
    { path: 'bulletinboard', component: BulletinBoardManagementComponent},
    { path: 'danji', component: DanjiManagementComponent},
    { path: 'community', component: CommunityComponent},
    { path: 'culturecourse', component: CultureCourseComponent},
    ]},
  { path: 'resident', component: ResidentManagementComponent},
  { path: 'staff', component: StaffManagementComponent},
  { path: 'accounting', component: AccountingManagementComponent, children: [
    { path: '', redirectTo: 'wage', pathMatch: 'full' },
    { path: 'wage', component: WageManagementComponent},
    { path: 'sales', component: SalesManagementComponent},
    { path: 'cost-notice', component: CostNoticeManagementComponent},
    ]},
  { path: 'store', component: StoreManagementComponent},
  { path: 'locker', component: LockerManagementComponent},
  { path: 'class', component: ClassManagementComponent, children: [
    { path: '', redirectTo: 'gx', pathMatch: 'full' },
    { path: 'gx', component: GxManagementComponent},
    { path: 'lesson', component: LessonManagementComponent}
    ]},
  { path: 'attendence', component: AttendenceManagementComponent},
  { path: 'service-center', component: ServiceCenterComponent},
  { path: 'settings', component: PermissionSettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
