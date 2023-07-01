import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { MeetupListComponent } from './modules/meetups/components/meetup-list/meetup-list.component';
import { LabComponent } from './modules/lab/lab.component';
import { UsersComponent } from './modules/admin/users/users.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'main', component: MeetupListComponent},
  { path: 'lab', component: LabComponent, canActivate: [AuthGuard]},
  { path: 'users', component: UsersComponent},
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: '**', redirectTo: 'main'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
