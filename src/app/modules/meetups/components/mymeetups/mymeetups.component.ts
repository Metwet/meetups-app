import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-mymeetups',
  templateUrl: './mymeetups.component.html',
  styleUrls: ['./mymeetups.component.scss']
})
export class MymeetupsComponent {
  constructor(private authService: AuthService){}

  public uderId:number = this.authService.getCurrentUser().id;

  ngOnInit(){
    console.log(this.authService.getCurrentUser().id);
  }
}
