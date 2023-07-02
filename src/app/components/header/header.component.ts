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

  //isAdmin:boolean = false;

  ngOnInit(){
    this.checkAdminStatus()
  }

  checkAdminStatus() {
    return this.authService.checkAdminStatus();
  }

  // checkAdminStatus() {
  //   this.authService.isAdmin().subscribe((isAdmin: boolean) => {
  //     this.isAdmin = isAdmin;
  //   });
  // }

  isLoggedIn():boolean {
    return this.authService.isAuthenticated();
  }

  logout():void {
    this.authService.logout();
  }
}
