import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffergeneratorComponent } from './offergenerator.component';

describe('OffergeneratorComponent', () => {
  let component: OffergeneratorComponent;
  let fixture: ComponentFixture<OffergeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffergeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffergeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
