import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  show:boolean=false

  showPopup(name,title,desc,photo){
    this.show=true
    this.fileImg=photo.src
    this.nameing=name.textContent
    this.titleing=title.textContent
    this.contenting=desc.textContent
  }

  titleing:string="الوظية"
  nameing:string=" احمد منصور محمد "
  contenting:string="يسبوة يسبةمنتةيل يسةمةيلس يلسزوةكمليةيسل يسلي "
  fileImg:string="../../../../assets/photo/alex-knight-2EJCSULRwC8-unsplash.jpg"

  close_popup(){
    this.show=false
  }

  getimg(file){
    let index_of_name_imge=file.value.lastIndexOf("\\")+1
    this.fileImg="../../../../assets/photo/" + file.value.slice(index_of_name_imge)
  }

  edit(nameOfPerson,titleOfPerson,informtion){
    this.nameing=nameOfPerson.value
    this.titleing=titleOfPerson.value
    this.contenting=informtion
    this.show=false
  }

}
