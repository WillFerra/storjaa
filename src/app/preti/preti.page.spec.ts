import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PretiPage } from './preti.page';

describe('PretiPage', () => {
  let component: PretiPage;
  let fixture: ComponentFixture<PretiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PretiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
