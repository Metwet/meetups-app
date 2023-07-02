import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users: User[] = [];

  constructor(private userService:UserService){}

  ngOnInit(){
    this.loadUsers();
  }

  loadUsers():void {
    this.userService.getUsers().subscribe(
      (users:User[])=>{

        console.log(users);
        
        this.users = users;
      }
    )
  }
}
