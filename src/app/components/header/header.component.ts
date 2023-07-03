import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private authService: AuthService){}

  ngOnInit(){
    this.checkAdminStatus()
  }

  checkAdminStatus() {
    return this.authService.checkAdminStatus();
  }

  isLoggedIn():boolean {
    return this.authService.isAuthenticated();
  }

  logout():void {
    this.authService.logout();
  }
}
