import { Component, Input } from '@angular/core';
import { Meetup } from 'src/app/models/meetup.model';
import { MeetupService } from 'src/app/services/meetup.service';

@Component({
  selector: 'app-meetup-list',
  templateUrl: './meetup-list.component.html',
  styleUrls: ['./meetup-list.component.scss']
})
export class MeetupListComponent {
  @Input() filterUserId: number | null = null;
  meetups: Meetup[] = [];
  originalMeetups: Meetup[] = [];
  searchQuery: string = '';

  constructor(private meetupService: MeetupService) {}

  ngOnInit():void {
    this.meetupService.getMeetups().subscribe(
      (meetups: Meetup[])=>{
        
        if(this.filterUserId){
          this.meetups = meetups.filter((meetup)=>meetup.owner.id === this.filterUserId)
          console.log(this.meetups);
        } else {
          this.originalMeetups = meetups;
          this.searchMeetups();
          this.meetups = meetups;
        }
      }
    );
  }

  searchMeetups(): void {
    if (this.searchQuery.trim() === '') {
      this.meetups = this.originalMeetups;
    } else {
      this.meetups = this.originalMeetups.filter(
        (meetup) =>
          meetup.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
  
}
