import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaugPage } from './staug.page';

describe('StaugPage', () => {
  let component: StaugPage;
  let fixture: ComponentFixture<StaugPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StaugPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
