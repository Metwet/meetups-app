import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { MeetupListComponent } from './modules/meetups/components/meetup-list/meetup-list.component';
import { LabComponent } from './modules/lab/lab.component';
import { UsersComponent } from './modules/admin/users/users.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { MymeetupsComponent } from './modules/meetups/components/mymeetups/mymeetups.component';
import { CreateMeetupComponent } from './modules/meetups/components/create-meetup/create-meetup.component';
import { ChangeMeetupComponent } from './modules/meetups/components/change-meetup/change-meetup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'main', component: MeetupListComponent, canActivate: [AuthGuard]},
  { path: 'mymeetups', component: MymeetupsComponent, canActivate: [AuthGuard]},
  { path: 'createmeetup', component: CreateMeetupComponent, canActivate: [AuthGuard]},
  { path: 'changemeetup/:id', component: ChangeMeetupComponent, data: {meetup: 'meetupData'}, canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent, canActivate: [AdminGuard]},
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: '**', redirectTo: 'main'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
