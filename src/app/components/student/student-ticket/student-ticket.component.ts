import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-ticket',
  templateUrl: './student-ticket.component.html',
  styleUrls: ['./student-ticket.component.css']
})
export class StudentTicketComponent implements OnInit {


  fileImg:string = ""
  content:string = ""

  constructor() { }

  ngOnInit(): void {
  }

  show:boolean=false

  showPopup(){
    this.show=true
    this.content=""
    this.fileImg=""
  }

  close_popup(){
    this.show=false
    this.content=""
    this.fileImg=""
  }



  getimg(file){
    let index_of_name_imge=file.value.lastIndexOf("\\")+1
    this.fileImg="../../../assets/photo/" + file.value.slice(index_of_name_imge)
  }

  send(conten){
    this.content = conten.value
  }

}

