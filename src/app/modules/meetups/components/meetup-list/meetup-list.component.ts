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

  constructor(private meetupService: MeetupService) {}

  ngOnInit():void {
    this.meetupService.getMeetups().subscribe(
      (meetups: Meetup[])=>{
        
        if(this.filterUserId){
          this.meetups = meetups.filter((meetup)=>meetup.owner.id === this.filterUserId)
          console.log(this.meetups);
        } else {
          this.meetups = meetups;
        }
      }
    );
  }
}
