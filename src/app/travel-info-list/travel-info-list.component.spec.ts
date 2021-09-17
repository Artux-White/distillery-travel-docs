import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelInfoListComponent } from './travel-info-list.component';

describe('TravelInfoListComponent', () => {
  let component: TravelInfoListComponent;
  let fixture: ComponentFixture<TravelInfoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelInfoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
