import { Injectable } from '@angular/core';
import { Meetup } from '../models/meetup.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MeetupService {

  private baseUrl: string = `${environment.backendOrigin}`

  private meetups: Meetup[] = [];

  constructor(private http: HttpClient) {
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