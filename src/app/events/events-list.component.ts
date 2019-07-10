import { Component, Inject, forwardRef} from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>Upppppppcoming Angular Events</h1>
    <hr/>
    <div class="row">
    <div *ngFor="let event of events" class="col-md-5">
      <event-thumbnail [event]="event"></event-thumbnail>
    </div>
  </div>
  `
})
export class EventsListComponent {
  
  events:any[]

  
  constructor(@Inject(forwardRef(() => EventService)) private eventService: EventService) {
    //this.eventSerivce = eventService;
    this.events = this.eventService.getEvents();
  }
}