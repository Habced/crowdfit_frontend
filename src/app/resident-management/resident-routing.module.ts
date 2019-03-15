import { CommunityMemberManagementComponent } from '../community-member-management/community-member-management.component';
import { GeneralResidentManagementComponent } from '../general-resident-management/general-resident-management.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'gx', pathMatch: 'full' },
  { path: 'community-member', component: CommunityMemberManagementComponent},
  { path: 'general-management', component: GeneralResidentManagementComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ResidentRoutingModule { }
