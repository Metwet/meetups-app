import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetupCardComponent } from './components/meetup-card/meetup-card.component';
import { MeetupListComponent } from './components/meetup-list/meetup-list.component';



@NgModule({
  declarations: [
    MeetupCardComponent,
    MeetupListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MeetupCardComponent,
    MeetupListComponent
  ]
})
export class MeetupsModule { }
