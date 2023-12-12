import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandasComponent } from './comandas.component';

describe('ComandasComponent', () => {
  let component: ComandasComponent;
  let fixture: ComponentFixture<ComandasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComandasComponent]
    });
    fixture = TestBed.createComponent(ComandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
