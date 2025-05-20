import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaparelliPage } from './laparelli.page';

describe('LaparelliPage', () => {
  let component: LaparelliPage;
  let fixture: ComponentFixture<LaparelliPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LaparelliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
