import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DragutPage } from './dragut.page';

describe('DragutPage', () => {
  let component: DragutPage;
  let fixture: ComponentFixture<DragutPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DragutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
