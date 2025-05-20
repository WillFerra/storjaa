import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DominicPage } from './dominic.page';

describe('DominicPage', () => {
  let component: DominicPage;
  let fixture: ComponentFixture<DominicPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DominicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
