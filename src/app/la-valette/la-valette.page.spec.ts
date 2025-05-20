import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaValettePage } from './la-valette.page';

describe('LaValettePage', () => {
  let component: LaValettePage;
  let fixture: ComponentFixture<LaValettePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LaValettePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
