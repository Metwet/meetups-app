import { Injectable } from '@angular/core';
import { Meetup } from '../models/meetup.model';

@Injectable({
  providedIn: 'root'
})
export class MeetupService {

  private meetups: Meetup[] = [];

  constructor() {
    this.addMeetup({title: `Meeting about Angular`, description: `Angular is cool!`});
    this.addMeetup({title: `Meeting about React`, description: `React is cool too!`});
  }

  getMeetups(): Meetup[] {
    return this.meetups;
  }

  addMeetup(meetup: Meetup):void {
    this.meetups.push(meetup);
  }

  updateMeetup(meetup: Meetup):void {

  }

  deleteMeetup(meetup: Meetup): void {
    const index = this.meetups.indexOf(meetup);
    if(index > -1){
      this.meetups.splice(index, 1);
    }
  }
}