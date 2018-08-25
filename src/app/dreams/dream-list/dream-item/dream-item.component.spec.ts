import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamItemComponent } from './dream-item.component';

describe('DreamItemComponent', () => {
  let component: DreamItemComponent;
  let fixture: ComponentFixture<DreamItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreamItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
