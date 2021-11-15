import { element } from 'protractor';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-admin-employees',
  templateUrl: './admin-employees.component.html',
  styleUrls: ['./admin-employees.component.css'],
})
export class AdminEmployeesComponent implements OnInit {
  allUsers: any;
  constructor(
    private loginRole: LoginService,
    private user: UserService,
    private router: Router
  ) {
    if (
      Boolean(localStorage.getItem('hidden_instructor')) ||
      Boolean(localStorage.getItem('hidden_mediacenter_university')) ||
      Boolean(localStorage.getItem('hidden_support_university'))
    ) {
      router.navigate(['/academic-affairs/login']);
    }
  }

  ngOnInit(): void {
    this.user.getUser(localStorage.getItem('token')).subscribe((data) => {
      this.allUsers = data.users;
      this.allUsers = this.allUsers.reverse();
      this.lenthOfEmployess = this.allUsers.length;
      console.log(data.users);

      this.num_of_page_start = this.allUsers.length / 10 - 1;
      this.num_of_page_end = this.allUsers.length / 10;
      this.next();
      this.prev();

      this.allUsers = this.allUsers.filter(element => {
        return element.role_id != 4
      });

      this.allUsers.forEach((element) => {
        switch (element.role_id) {
          case 1:
            element.role_id = 'admin';
            break;
          case 2:
            element.role_id = 'instructor';
            break;
          case 3:
            element.role_id = 'employee';
            break;
          case 5: // media center university
            element.role_id = 'media center university';
            break;
          case 6:
            element.role_id = 'media center computer';
            break;
          case 7:
            element.role_id = 'media center arts';
            break;
          case 8:
            element.role_id = 'media center archaeology';
            break;
          case 9:
            element.role_id = 'media center alson';
            break;
          case 10:
            element.role_id = 'media center hotel';
            break;
          case 11:
            element.role_id = 'support university';
            break;
          case 12:
            element.role_id = 'support computer';
            break;
          case 13:
            element.role_id = 'support arts';
            break;
          case 14:
            element.role_id = 'support archaeology';
            break;
          case 15:
            element.role_id = 'support alson';
            break;
          case 16:
            element.role_id = 'support hotels';
            break;

          default:
            break;
        }
      });

    });
  }

  lenthOfEmployess: number;

  num_of_page_start: number = 1;
  num_of_page_defualt: number = 0;
  num_of_page_end: number = 10;

  // limit of for dispaly allUsers
  start: number = 0;
  end: number = 10;

  //go to page
  go_page(e) {
    this.start = (e.textContent - 1) * 10;
    this.end = e.textContent * 10;
    if (this.allUsers.length <= this.end) {
      this.next_isdisable = true;
    } else {
      this.next_isdisable = false;
    }
    if (this.start > 0) {
      this.prev_able = false;
    } else {
      this.prev_able = true;
    }
  }

  // make this list is disable
  next_isdisable = false;

  // make this list is able
  prev_able = true;

  // go the next page
  next() {
    this.start += 10;
    this.end += 10;
    if (this.allUsers.length <= this.end) {
      this.next_isdisable = true;
    } else {
      this.next_isdisable = false;
    }

    if (this.start > 0) {
      this.prev_able = false;
    } else {
      this.prev_able = true;
    }
  }

  // go the perv page
  prev() {
    this.start -= 10;
    this.end -= 10;
    if (this.start > 0) {
      this.prev_able = false;
    } else {
      this.prev_able = true;
    }

    if (this.allUsers.length <= this.end) {
      this.next_isdisable = true;
    } else {
      this.next_isdisable = false;
    }
  }

  show: boolean = false;

  name: string = '';
  role: string = '';
  email: string = '';
  phone: string = '';
  id_user: number = 0;
  passwordUser: string = '';
  infoUser: string = '';
  ssdUser: number = 0;

  showPopupAdd() {
    this.show = true;
  }

  showPopup(
    nameing: string,
    roleing: string,
    emailing: string,
    phoneing: string,
    password: string,
    info: string,
    ssd: number,
    id: number
  ) {
    this.show = true;
    this.name = nameing;
    this.role = roleing;
    this.email = emailing;
    this.phone = phoneing;
    this.passwordUser = password;
    this.infoUser = info;
    this.ssdUser = ssd;
    this.id_user = id;
  }

  close_popup() {
    this.show = false;
  }

  create_user(name, collage, role, email, phone,ssd,passowrd) {
    switch (collage.value) {
      case 'FCI_Luxor':
        collage = 2;
        break;
      case 'university_Luxor':
        collage = 1;
        break;
      case 'Arts_Luxor':
        collage = 3;
        break;
      case 'Archaeology_luxor':
        collage = 4;
        break;
        case 'alson_Luxor':
        collage = 5;
        break;
      case 'hotels_luxor':
        collage = 6;
        break;
      default:
        break;
    }
    switch (role.value) {
      case 'admin':
        role = 1;
        break;
      case 'instructor':
        role = 2;
        break;
      case 'employee':
        role = 3;
        break;
      case 'mediacenter university':
        role = 5;
        break;
      case 'mediacenter computer':
        role = 6;
        break;
      case 'mediacenter arts':
        role = 7;
        break;
      case 'mediacenter archaeology':
        role = 8;
      case 'mediacenter alson':
        role = 9;
        break;
      case 'mediacenter hotels':
        role = 10;
        break;
      case 'support university':
        role = 11;
        break;
      case 'support computer':
        role = 12;
        break;
      case 'support arts':
        role = 13;
        break;
      case 'support archaeology':
        role = 14;
      case 'support lason':
        role = 15;
        break;
      case 'support hotels':
        role = 16;
        break;
      default:
        break;
    }

    let create_user = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      role_id: role,
      collage: collage,
      ssd:ssd.value,
      init_password:passowrd.value
    };
    let token = localStorage.getItem('token');
    this.user.createUser(create_user, token).subscribe((data) => {
      location.reload();
    });
  }

  edit(name, phone, passwordUser, infoUser, ssdUser) {
    let update_user = {
      name: name.value,
      password: passwordUser.value,
      phone: phone.value,
      info: infoUser.value,
      ssd: ssdUser.value,
    };
    let token = localStorage.getItem('token');
    let id = this.id_user;
    this.user.editUser(update_user, token, id).subscribe((data) => {
      location.reload();
    });
  }

  delete_user() {
    let token = localStorage.getItem('token');
    let id = this.id_user;
    this.user.deleteUser(token, id).subscribe((data) => {
      location.reload();
    });
  }

  track(item, index: number) {
    return item.index;
  }
}
