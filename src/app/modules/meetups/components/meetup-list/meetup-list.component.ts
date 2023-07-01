import { Component } from '@angular/core';
import { Meetup } from 'src/app/models/meetup.model';
import { MeetupService } from 'src/app/services/meetup.service';

@Component({
  selector: 'app-meetup-list',
  templateUrl: './meetup-list.component.html',
  styleUrls: ['./meetup-list.component.scss']
})
export class MeetupListComponent {
  meetups: Meetup[] = [];

  constructor(private meetupService: MeetupService) {}

  ngOnInit():void {
    this.meetupService.getMeetups().subscribe(
      (meetups: Meetup[])=>{
        console.log(meetups);
        this.meetups = meetups
      }
    );
  }
}
