import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QueenvicPage } from './queenvic.page';

describe('QueenvicPage', () => {
  let component: QueenvicPage;
  let fixture: ComponentFixture<QueenvicPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QueenvicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
