import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamDetailComponent } from './dream-detail.component';

describe('DreamDetailComponent', () => {
  let component: DreamDetailComponent;
  let fixture: ComponentFixture<DreamDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreamDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
