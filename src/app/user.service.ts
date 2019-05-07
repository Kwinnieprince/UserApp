import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable()
export class UserService {

  private userUrl = 'http://localhost:8080/web_war_exploded/Controller';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl, {params : new HttpParams().set('action', 'GetUsersAngular')});
  }

}
