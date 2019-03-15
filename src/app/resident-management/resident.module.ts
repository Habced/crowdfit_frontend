import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommunityMemberManagementComponent } from '../community-member-management/community-member-management.component';
import { GeneralResidentManagementComponent } from '../general-resident-management/general-resident-management.component';
import { ResidentRoutingModule } from './resident-routing.module';


@NgModule({
  declarations: [
      CommunityMemberManagementComponent,
      GeneralResidentManagementComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ResidentRoutingModule,
  ],
  providers: [],
  bootstrap: [ResidentRoutingModule]
})
export class ClassModule { }
