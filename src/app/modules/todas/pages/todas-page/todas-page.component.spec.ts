import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodasPageComponent } from './todas-page.component';

describe('TodasPageComponent', () => {
  let component: TodasPageComponent;
  let fixture: ComponentFixture<TodasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodasPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
