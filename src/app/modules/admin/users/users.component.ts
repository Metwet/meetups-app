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

  updateUser(user: User): void {
    alert(`Возможность изменения данных пользователей ограничена в демонстрационной версии`)
    // const updatedUser = {
    //   email: user.email,
    //   password: user.password,
    //   fio: user.fio
    // };
    // this.userService.updateUser(user.id, updatedUser).subscribe(
    //   (res: any) => {
    //     console.log('Пользователь успешно обновлен:', res);
    //   }
    // );
  }

  updateRole(user: User): void {
    alert(`Возможность изменения ролей пользователей ограничена в демонстрационной версии`)
    // const selectedRole = user.roles[0].name === 'ADMIN' ? ['ADMIN'] : ['USER'];
    // const roleData = {
    //   names: selectedRole,
    //   userId: user.id
    // };    
    // this.userService.updateUserRole(roleData).subscribe(
    //   (res: any) => {
    //     console.log('Роль пользователя обновлена:', res); 
    //   }
    // );
  }

  deleteUser(userId: number): void {
    alert(`Возможность удаления пользователей ограничена в демонстрационной версии`)
    // this.userService.deleteUser(userId).subscribe(
    //   (res) => {
    //     console.log('Пользователь удален:', res)
    //     this.loadUsers();
    //   }
    // );
  }
}
