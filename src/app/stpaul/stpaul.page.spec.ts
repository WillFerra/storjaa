import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StpaulPage } from './stpaul.page';

describe('StpaulPage', () => {
  let component: StpaulPage;
  let fixture: ComponentFixture<StpaulPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StpaulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
