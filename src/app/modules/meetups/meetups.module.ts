import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MeetupCardComponent } from './components/meetup-card/meetup-card.component';
import { MeetupListComponent } from './components/meetup-list/meetup-list.component';
import { MymeetupsComponent } from './components/mymeetups/mymeetups.component';
import { CreateMeetupComponent } from './components/create-meetup/create-meetup.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChangeMeetupComponent } from './components/change-meetup/change-meetup.component';



@NgModule({
  declarations: [
    MeetupCardComponent,
    MeetupListComponent,
    MymeetupsComponent,
    CreateMeetupComponent,
    ChangeMeetupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    MeetupCardComponent,
    MeetupListComponent,
    MymeetupsComponent
  ],
  providers: [DatePipe]
})
export class MeetupsModule { }
