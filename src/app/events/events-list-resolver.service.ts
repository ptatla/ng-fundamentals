import { Injectable, Inject, forwardRef } from '@angular/core'
import { Resolve } from '@angular/router'
import { EventService } from './shared/event.service'
import { map } from 'rxjs/operators'
 
@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(@Inject(forwardRef(() => EventService)) private eventService:EventService) {

  }

  resolve() {
    return this.eventService.getEvents().pipe(map(events => events))
  }
}