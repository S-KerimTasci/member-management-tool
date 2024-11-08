import { Routes } from '@angular/router';
import { MembersTableComponent } from './members-table/members-table.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { AddMemberComponent } from './add-member/add-member.component';

export const routes: Routes = [
    { path: 'members', component: MembersTableComponent },
  { path: 'members/:id', component: MemberDetailComponent },
  { path: 'add-member', component: AddMemberComponent },
  { path: '', redirectTo: '/members', pathMatch: 'full' }
];
