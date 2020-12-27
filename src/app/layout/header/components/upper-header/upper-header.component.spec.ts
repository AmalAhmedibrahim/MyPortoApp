import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UpperHeaderComponent } from './upper-header.component';

describe('UpperHeaderComponent', () => {
  let component: UpperHeaderComponent;
  let fixture: ComponentFixture<UpperHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpperHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
