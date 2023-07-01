import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email!: string;
  password!: string;

  constructor(private authService: AuthService, private routers: Router){

  }

  login(email: string, password: string):void {
    this.authService.login(email, password).subscribe(()=>{
    this.routers.navigate([`/main`])
    })
  }
}
