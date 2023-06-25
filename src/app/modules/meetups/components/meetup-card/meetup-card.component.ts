import { Component, Input } from '@angular/core';
import { Meetup } from 'src/app/models/meetup.model';

@Component({
  selector: 'app-meetup-card',
  templateUrl: './meetup-card.component.html',
  styleUrls: ['./meetup-card.component.scss']
})
export class MeetupCardComponent {
  constructor () {}

  @Input() meetup!: Meetup;
}
