import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuBtnComponent } from './nav-menu-btn.component';

describe('NavMenuBtnComponent', () => {
  let component: NavMenuBtnComponent;
  let fixture: ComponentFixture<NavMenuBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavMenuBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavMenuBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
