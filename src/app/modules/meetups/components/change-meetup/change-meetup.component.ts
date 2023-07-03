import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meetup } from 'src/app/models/meetup.model';
import { MeetupService } from 'src/app/services/meetup.service';

@Component({
  selector: 'app-change-meetup',
  templateUrl: './change-meetup.component.html',
  styleUrls: ['./change-meetup.component.scss']
})
export class ChangeMeetupComponent {
  meetup: Meetup = {} as Meetup;

  meetupData = {
    name: '',
    description: '',
    time: '',
    duration: 90,
    location: '',
    target_audience: '',
    need_to_know: '',
    will_happen: '',
    reason_to_come: ''
  };
  

  constructor(private meetupService:MeetupService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.meetup = history.state.meetup;
    console.log(this.meetup);
    this.meetupData = {
      name: this.meetup.name,
      description: this.meetup.description,
      time: this.meetup.time,
      duration: this.meetup.duration,
      location: this.meetup.location,
      target_audience: this.meetup.target_audience,
      need_to_know: this.meetup.need_to_know,
      will_happen: this.meetup.will_happen,
      reason_to_come: this.meetup.reason_to_come
    };
    console.log(this.meetupData);
  }

  updateMeetup(){
    this.meetupService.updateMeetup(this.meetupData, this.meetup.id).subscribe(
      (res)=>{
        console.log('Митап успешно изменен:', res);
        this.router.navigate(['/mymeetups']);
      }
    )
  }
}
