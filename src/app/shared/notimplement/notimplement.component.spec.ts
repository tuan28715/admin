import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotimplementComponent } from './notimplement.component';

describe('NotimplementComponent', () => {
  let component: NotimplementComponent;
  let fixture: ComponentFixture<NotimplementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotimplementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotimplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
