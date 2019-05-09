import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable()
export class UserService {

  private userUrl = 'http://localhost:8080/web_war_exploded/Controller';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl, {params : new HttpParams().set('action', 'GetUsersAngular')});
  }

  updateStatus(user: User): void {
    let body = new HttpParams().append('state', user.status).append('userId', user.userId);

    const header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    // tslint:disable-next-line:max-line-length
    this.http.post<any>(this.userUrl + '?action=Status&status=' + user.status + '&userId=' + user.userId , body, {headers: header}).subscribe(
      (res) => console.log(res),
      (err) => console.log(err));
  }

}
