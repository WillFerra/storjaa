import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GilormuPage } from './gilormu.page';

describe('GilormuPage', () => {
  let component: GilormuPage;
  let fixture: ComponentFixture<GilormuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GilormuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
