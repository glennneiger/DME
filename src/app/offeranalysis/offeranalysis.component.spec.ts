import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferanalysisComponent } from './offeranalysis.component';

describe('OfferanalysisComponent', () => {
  let component: OfferanalysisComponent;
  let fixture: ComponentFixture<OfferanalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferanalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
