import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerintakeComponent } from './sellerintake.component';

describe('SellerintakeComponent', () => {
  let component: SellerintakeComponent;
  let fixture: ComponentFixture<SellerintakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerintakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerintakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
