import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MeetupService } from 'src/app/services/meetup.service';

@Component({
  selector: 'app-create-meetup',
  templateUrl: './create-meetup.component.html',
  styleUrls: ['./create-meetup.component.scss']
})
export class CreateMeetupComponent {
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

  errorMessage:boolean = false;

  constructor(private meetupService: MeetupService, private router: Router) {}

  createMeetup(){
    this.meetupService.addMeetup(this.meetupData).subscribe(
      (res)=>{
        console.log('Митап успешно создан:', res);
        this.router.navigate(['/mymeetups']);
      }
    )
  }

  onSubmit(){
    if( this.meetupData.name && this.meetupData.time && this.meetupData.duration && this.meetupData.location && this.meetupData.description){
      this.createMeetup()
      this.errorMessage = false;
    } else {
      this.errorMessage = true;
    }
  }
}
