import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetupCardComponent } from './components/meetup-card/meetup-card.component';
import { MeetupListComponent } from './components/meetup-list/meetup-list.component';
import { MymeetupsComponent } from './components/mymeetups/mymeetups.component';
import { CreateMeetupComponent } from './components/create-meetup/create-meetup.component';



@NgModule({
  declarations: [
    MeetupCardComponent,
    MeetupListComponent,
    MymeetupsComponent,
    CreateMeetupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MeetupCardComponent,
    MeetupListComponent,
    MymeetupsComponent
  ]
})
export class MeetupsModule { }
