import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private loginRole: LoginService) {}

  ngOnInit(): void {}

  hasData: boolean = false;
  hasContent(e: any) {
    if (e) this.hasData = true;
    else this.hasData = false;
  }

  login(e, p) {
    localStorage.clear();
    let x;
    let ahmed = { email: e.value, password: p.value };
    this.loginRole.postLogin(ahmed).subscribe(
      (data) => {
        x = data;
        console.log(data);
        this.loginRole.login_info = x;
        localStorage.setItem('token', x.token);
        localStorage.setItem('specialist', x.role_name);
        localStorage.setItem('idUser', x.id);
        localStorage.setItem('role', x.role_id);
        localStorage.setItem('college_id', x.college_id);

        switch (this.loginRole.login_info.role_id) {
          case 1:
            localStorage.setItem('hidden_admin', 'true');
            this.router.navigate(['admin/admin-news']);
            break;
          case 2:
            localStorage.setItem('hidden_instructor', 'true');
            this.router.navigate(['admin/admin-main']);
            break;
          case 5:
            localStorage.setItem('hidden_mediacenter_university', 'true'); // media center university
            this.router.navigate(['admin/admin-main']);
            break;
          case 6:
            localStorage.setItem('hidden_mediacenter_university', 'true'); // media center computer
            this.router.navigate(['admin/admin-main']);
            break;
          case 7:
            localStorage.setItem('hidden_mediacenter_university', 'true'); // media center arts
            this.router.navigate(['admin/admin-main']);
            break;
          case 8:
            localStorage.setItem('hidden_mediacenter_university', 'true'); // media center archaeology
            this.router.navigate(['admin/admin-main']);
            break;
          case 9:
            localStorage.setItem('hidden_mediacenter_university', 'true'); // media center alson
            this.router.navigate(['admin/admin-main']);
            break;
          case 10:
            localStorage.setItem('hidden_mediacenter_university', 'true'); // media center hotels
            this.router.navigate(['admin/admin-main']);
            break;
          case 11:
            localStorage.setItem('hidden_support_university', 'true'); // support university
            this.router.navigate(['admin/admin-main']);
            break;
          case 12:
            localStorage.setItem('hidden_support_university', 'true'); // support computer
            this.router.navigate(['admin/admin-main']);
            break;
          case 13:
            localStorage.setItem('hidden_support_university', 'true'); // support arts
            this.router.navigate(['admin/admin-main']);
            break;
          case 14:
            localStorage.setItem('hidden_support_university', 'true'); // support archaeology
            this.router.navigate(['admin/admin-main']);
            break;
          case 15:
            localStorage.setItem('hidden_support_university', 'true'); // support alson
            this.router.navigate(['admin/admin-main']);
            break;
          case 16:
            localStorage.setItem('hidden_support_university', 'true'); // support hotels
            this.router.navigate(['admin/admin-main']);
            break;
          default:
            break;
        }
      },
      (err) => console.log(err)
    );
  }
}
