import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuManagementComponent } from './menu-management.component';
import { BulletinBoardManagementComponent } from '../bulletin-board-management/bulletin-board-management.component';
import { DanjiManagementComponent } from '../danji-management/danji-management.component';
import { CommunityComponent } from '../community/community.component';
import { CultureCourseComponent } from '../culture-course/culture-course.component';

@NgModule({
  declarations: [
    BulletinBoardManagementComponent,
    DanjiManagementComponent,
    CommunityComponent,
    CultureCourseComponent
  ],
  imports: [
    MenuRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [MenuManagementComponent]
})
export class MenuModule { }
