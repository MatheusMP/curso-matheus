import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoupaComponent } from './roupa.component';

describe('RoupaComponent', () => {
  let component: RoupaComponent;
  let fixture: ComponentFixture<RoupaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoupaComponent]
    });
    fixture = TestBed.createComponent(RoupaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
