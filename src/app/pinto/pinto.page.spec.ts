import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PintoPage } from './pinto.page';

describe('PintoPage', () => {
  let component: PintoPage;
  let fixture: ComponentFixture<PintoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PintoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
