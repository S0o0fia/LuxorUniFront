import { OneUser } from './../../interface/users/one-user';
import { DataUsers } from './../../interface/users/users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment as env } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(token) {
    return this.http.get<DataUsers>(`${env.urlAPI}/adminUsers?token=${token}`);
  }

  editUser(user, token, id_user) {
    let user_one = `name=${user.name}&init_password=${user.password}&phone=${user.phone}&info=${user.info}&ssd=${user.ssd}`;

    let url =
      `${env.urlAPI}/adminUpdateUser/${id_user}?${user_one}` +
      '&token=' +
      token;
    return this.http.post<any>(url, null);
  }

  deleteUser(token, id_user) {
    let url = `${env.urlAPI}/adminDeleteUser/${id_user}?token=` + token;
    return this.http.get<any>(url);
  }

  createUser(user, token) {
    let user_one = `name=${user.name}&email=${user.email}&college_id=${user.collage}
      &init_password=${user.init_password}&ssd=${user.ssd}&role_id=${user.role_id}`;
    let url = `${env.urlAPI}/addUser?${user_one}&token=` + token;
    return this.http.post<any>(url, null);
  }

  getOneUser(token, idUser) {
    return this.http.get<OneUser>(
      `${env.urlAPI}/user/${idUser}?token=${token}`
    );
  }

  editOneUser(user, id_User, token) {
    const fData = new FormData();
    fData.append('name', user.name);
    fData.append('photo', user.image);
    fData.append('info', user.content);

    let url = `${env.urlAPI}/updateUser/${id_User}?token=${token}`;
    return this.http.post<any>(url, fData);
  }
}
