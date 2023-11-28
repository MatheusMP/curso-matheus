import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRoupaComponent } from './create-roupa.component';

describe('CreateRoupaComponent', () => {
  let component: CreateRoupaComponent;
  let fixture: ComponentFixture<CreateRoupaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateRoupaComponent]
    });
    fixture = TestBed.createComponent(CreateRoupaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
