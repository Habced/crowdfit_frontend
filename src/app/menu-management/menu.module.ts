import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BulletinBoardManagementComponent } from '../bulletin-board-management/bulletin-board-management.component';
import { CommunityComponent } from '../community/community.component';
import { CultureCourseComponent } from '../culture-course/culture-course.component';
import { DanjiManagementComponent } from '../danji-management/danji-management.component';
import { MenuManagementComponent } from './menu-management.component';
import { MenuRoutingModule } from './menu-routing.module';

@NgModule({
  declarations: [
    BulletinBoardManagementComponent,
    CommunityComponent,
    CultureCourseComponent,
    DanjiManagementComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MenuRoutingModule,
  ],
  providers: [],
  bootstrap: [MenuManagementComponent]
})
export class MenuModule { }
