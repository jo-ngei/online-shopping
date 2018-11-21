import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestsComponent } from './latests.component';

describe('LatestsComponent', () => {
  let component: LatestsComponent;
  let fixture: ComponentFixture<LatestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
