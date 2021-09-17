import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Activity, TravelInfoService } from '../travel-info/travel-info.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  activities$: Observable<Activity> | undefined;

  constructor(private travelInfoService: TravelInfoService) { }

  ngOnInit(): void {
    this.activities$ = this.travelInfoService.lastestUpdates;
  }

}
