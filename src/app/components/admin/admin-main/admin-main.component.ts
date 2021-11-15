import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/users/user';
import { LoginService } from 'src/app/services/login/login.service';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css'],
})
export class AdminMainComponent implements OnInit {
  defualtImage: string;

  OneUsers: User;

  constructor(
    private loginRole: LoginService,
    private router: Router,
    private user: UserService
  ) {
    if (Boolean(localStorage.getItem('hidden_admin'))) {
      router.navigate(['/academic-affairs/login']);
    }
    this.defualtImage = 'https://via.placeholder.com/100';
  }

  ngOnInit(): void {
    this.user
      .getOneUser(
        localStorage.getItem('token'),
        Number(localStorage.getItem('idUser'))
      )
      .subscribe((data) => {
        this.OneUsers = data.user;
        this.nameing = this.OneUsers.name;

        if ((this.OneUsers.photo! = null))
          this.fileImg =
            'https://universityqwer.000webhostapp.com/images/' +
            this.OneUsers.photo;
        else this.fileImg = this.OneUsers.photo;

        this.contenting = this.OneUsers.info;
        this.titleing = this.getRoleName(this.OneUsers.role_id);
      });
  }

  getRoleName(id: number) {
    switch (id) {
      case 1:
        return (this.titleing = 'admin');
      case 2:
        return (this.titleing = 'instructor');
      case 3:
        return (this.titleing = 'employee');
      case 4:
        return (this.titleing = 'mediacenter university');
      case 5:
        return (this.titleing = 'mediacenter computer');
      case 6:
        return (this.titleing = 'mediacenter arts');
      case 7:
        return (this.titleing = 'mediacenter archaeology');
      case 8:
        return (this.titleing = 'support university');
      case 9:
        return (this.titleing = 'support computer');
      case 10:
        return (this.titleing = 'support arts');
      case 11:
        return (this.titleing = 'support archaeology');
      default:
        break;
    }
  }

  show: boolean = false;

  showPopup(name, desc, photo) {
    this.show = true;
    this.fileImg = photo;
    this.nameing = name.textContent;
    this.contenting = desc.textContent;
  }

  titleing: string = '';
  nameing: string = '';
  contenting: string = '';
  fileImg: string = '';
  idOfUser = localStorage.getItem('idUser');

  close_popup() {
    this.show = false;
  }

  file: File;
  getimg(file, fileInfo) {
    let index_of_name_imge = file.value.lastIndexOf('\\') + 1;
    this.fileImg =
      '../../../assets/photo/' + file.value.slice(index_of_name_imge);
    this.file = fileInfo.target.files[0];
  }

  edit(nameOfPerson, informtion) {
    let user = {
      name: nameOfPerson.value,
      content: informtion.value,
      image: this.file,
    };

    this.user
      .editOneUser(
        user,
        Number(localStorage.getItem('idUser')),
        localStorage.getItem('token')
      )
      .subscribe((data) => {
        location.reload();
      });

    this.show = false;
  }
}
