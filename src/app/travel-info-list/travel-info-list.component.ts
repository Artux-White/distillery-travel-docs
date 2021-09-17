import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TravelInfo } from '../travel-info/models/travel-info.model';
import { getAllTravelDocs, State } from '../travel-info/state';
import { TravelInfoPageActions } from '../travel-info/state/actions';

@Component({
  selector: 'app-travel-info-list',
  templateUrl: './travel-info-list.component.html',
  styleUrls: ['./travel-info-list.component.scss'],
})
export class TravelInfoListComponent implements OnInit {
  travelDocs: TravelInfo[] = [];
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(TravelInfoPageActions.loadTravelInfoDocs());
    this.store.select(getAllTravelDocs).subscribe((res) => {
      this.travelDocs = res;
    });
  }
}
