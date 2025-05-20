import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VilhenaPage } from './vilhena.page';

describe('VilhenaPage', () => {
  let component: VilhenaPage;
  let fixture: ComponentFixture<VilhenaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VilhenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
