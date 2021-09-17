import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { TravelInfo } from './models/travel-info.model';

/* NgRx */
import { Store } from '@ngrx/store';
import { State, getAllTravelDocs, getMyProfile } from './state';

import { TravelInfoPageActions } from './state/actions';
import { TravelInfoService } from './travel-info.service';

@Component({
  selector: 'app-travel-info',
  templateUrl: './travel-info.component.html',
  styleUrls: ['./travel-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TravelInfoComponent implements OnInit, OnDestroy {
  travelForm = this.fb.group({
    name: [null, Validators.required],
    country: [null, Validators.required],
    province: [null, Validators.required],
    availableToTravel: [null, Validators.required],
    travelTime: null,
    timeUnit: 'days',

    passport: null,
    passportExpireDate: null,

    usVisa: null,
    usVisaExpireDate: null,

    schengenVisa: null,
    schengenVisaExpireDate: null,

    additionalComments: null
  });
  travelInfoDoc$!: Subscription;

  constructor(private fb: FormBuilder, private store: Store<State>) {}

  ngOnInit(){
    this.travelInfoDoc$ = this.store.select(getMyProfile).subscribe((res) => {
      if(res) {
        this.updateForm(res)
      }
    });
  }

  ngOnDestroy(){
    this.travelInfoDoc$.unsubscribe();
  }

  onSubmit(): void {
    this.store.dispatch(TravelInfoPageActions.saveMyProfile({travelInfo: this.travelForm.getRawValue()}));
    alert('Thanks!');
  }

  updateForm(profile: TravelInfo){
    this.travelForm.patchValue({
      name: profile.name || null,
      country: profile.country || null,
      province: profile.province || null,
      availableToTravel: profile.availableToTravel,
      travelTime: profile.travelTime || null,
      timeUnit: profile.timeUnit || null,

      passport: profile.passport,
      passportExpireDate: profile.passportExpireDate?.toDate() || null,

      usVisa: profile.usVisa,
      usVisaExpireDate: profile.usVisaExpireDate?.toDate() || null,

      schengenVisa: profile.schengenVisa,
      schengenVisaExpireDate: profile.schengenVisaExpireDate?.toDate() || null,

      additionalComments: profile.additionalComments || null
    })
  }

}
