import { Event } from './../../interface/events/event';
import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/events/event.service';
import { CounterService } from 'src/app/services/counters/counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    items:Array<any>

    defualtImage:string
    islong:boolean=false

  constructor(private allEvent:EventService,private Count:CounterService) {
    this.defualtImage='https://via.placeholder.com/100'
  }

  student_num:number
  employee_num:number
  instructors_num:number

  ngOnInit(): void {

    this.allEvent.getEvents().subscribe(data=>{
      this.items=data
      for (let index = 0; index < this.items.length; index++) {
        if (this.items[index].image.length > 0) {
          this.items[index].image =
          'https://universityqwer.000webhostapp.com/images/' +
          this.items[index].image;
      }
    }
    })

    this.Count.getCounter().subscribe(data=>{
      this.student_num = data.student_num
      this.employee_num = data.employee_num
      this.instructors_num = data.instructors_num
      console.log(data)
    })
  }

  arr:any[]

  track(item,index :number){
    return item.index
  }

  getID(i){
    this.allEvent.getOneEvent(i)
  }

}
