import { EventService } from '../../services/events/event.service';
import { Component, OnInit } from '@angular/core';
import { Event } from './../../interface/events/event';

@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.css'],
})
export class SingleEventComponent implements OnInit {
  defualtImage: string;
  items: Array<Event>;
  constructor(private singleEvent: EventService) {
    this.defualtImage = 'https://via.placeholder.com/100';
  }

  photo: string = '';
  time: string = '';
  des: string = '';

  ngOnInit(): void {

    this.singleEvent.getEvents().subscribe(data=>{
      this.items=data
      this.photo = this.items[this.singleEvent.idOfEvent].image;
      this.time = this.items[this.singleEvent.idOfEvent].created_at;
      this.des = this.items[this.singleEvent.idOfEvent].description;
    })
  }
}
