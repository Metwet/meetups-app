import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Meetup } from 'src/app/models/meetup.model';
import { AuthService } from 'src/app/services/auth.service';
import { MeetupService } from 'src/app/services/meetup.service';

@Component({
  selector: 'app-meetup-card',
  templateUrl: './meetup-card.component.html',
  styleUrls: ['./meetup-card.component.scss']
})
export class MeetupCardComponent {

  constructor (private authService: AuthService, private meetupService: MeetupService, private router: Router) {}
  isBlockVisible = false;
  isSubscribed:boolean = false;
  isCardFather:boolean = false;

  @Input() meetup!: Meetup;

  ngOnInit(){
    this.isSubscribed = this.meetup.users.some((user) => user.id === this.authService.getCurrentUser().id);
    this.isCardFather = this.meetup.createdBy === this.authService.getCurrentUser().id;
  }

  editMeetup(){
    this.router.navigate(['/changemeetup', this.meetup.id], { state: { meetup: this.meetup } });
    //this.router.navigateByUrl(`/changemeetup/${this.meetup.id}`)
  }

  toggleBlockVisibility():void {
    this.isBlockVisible = !this.isBlockVisible;
  }

  toggleSubscription():void {
    const meetupId = this.meetup.id;
    const userId = this.authService.getCurrentUser().id;

    if(this.isSubscribed){
      this.meetupService.unsubscribeToMeetup(meetupId, userId).subscribe(
        (res)=>{
          console.log(res);          
          this.isSubscribed = false;
          this.meetup.users = this.meetup.users.filter(user => user.id !== userId);
        }
      )
    } else {
      this.meetupService.subscribeToMeetup(meetupId, userId).subscribe(
        (res: Meetup)=>{
          console.log(res);
          this.isSubscribed = true;
          this.meetup = res;
        }
      )
    }
  }

  
}
