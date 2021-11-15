import { Login } from './../../interface/login/login';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginData } from 'src/app/interface/loginModel/login-data';
import { Observable } from 'rxjs';

import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  login_info: LoginData;
  hidden_admin: boolean;
  hidden_instructor: boolean;
  hidden_mediacenter_university: boolean;
  hidden_support_university: boolean;
  constructor(private http: HttpClient) {}

  postLogin(data: Login): Observable<Login> {

    let url = `${env.urlAPI}/login?email=${data.email}&password=${data.password}`;
    return this.http.post<Login>(url, null);
  }
}
