import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { timer } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // users: User[] = [{
  //   userId: 'bib@ucll.be',
  //   password: 't',
  //   salt: 't',
  //   firstName: 'Bib',
  //   lastName: 'Leothekaris',
  //   role: 'admin',
  //   status: 'Online',
  //   gender: 'Book',
  //   birthday: '07-05-1029'
  // },
  // {
  //   userId: 'an@ucll.be',
  //   password: 't',
  //   salt: 't',
  //   firstName: 'An',
  //   lastName: 'Nemman',
  //   role: 'admin',
  //   status: 'Online',
  //   gender: 'Vrouw',
  //   birthday: '07-05-1989'
  // },
  // {
  //   userId: 'jan@ucll.be',
  //   password: 't',
  //   salt: 't',
  //   firstName: 'Jan',
  //   lastName: 'De Kan',
  //   role: 'admin',
  //   status: 'Offline',
  //   gender: 'Man',
  //   birthday: '07-05-1988'
  // }];
  users: User[];

  selectedUser: User;

  constructor(private userService: UserService) { }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  getUsers(): void {
    timer(0, 2000).subscribe( () => {
      this.userService.getUsers().subscribe(data => this.users = data);
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  setStatus() {
    this.userService.updateStatus(this.selectedUser);
  }

}
