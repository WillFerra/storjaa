import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MadonnaPage } from './madonna.page';

describe('MadonnaPage', () => {
  let component: MadonnaPage;
  let fixture: ComponentFixture<MadonnaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MadonnaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
