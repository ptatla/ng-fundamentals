import { Router, ActivatedRouteSnapshot, CanActivate } from "@angular/router"
import { Injectable, Inject, forwardRef } from "@angular/core"
import { EventService } from '../shared/event.service'

@Injectable()
export class EventRouteActivator implements CanActivate { 
  constructor(@Inject(forwardRef(() => EventService)) private eventService:EventService, private router:Router) {

  }

  canActivate(route:ActivatedRouteSnapshot) {
    const eventExists = !!this.eventService.getEvent(+route.params['id'])

    if (!eventExists)
      this.router.navigate(['/404'])
    return eventExists
  }
}