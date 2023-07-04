import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  constructor(private authService: AuthService, private router:Router){}

  userData = {
    fio: '',
    email: '',
    password: ''
  }

  addUser(){

    this.authService.regUser(this.userData.email, this.userData.password, this.userData.fio).subscribe(
      () => {
        console.log('Пользователь создан');
        this.router.navigate([`/users`])
      }
    );
  }
}
