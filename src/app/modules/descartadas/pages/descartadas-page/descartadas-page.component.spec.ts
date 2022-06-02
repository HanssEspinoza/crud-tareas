import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescartadasPageComponent } from './descartadas-page.component';

describe('DescartadasPageComponent', () => {
  let component: DescartadasPageComponent;
  let fixture: ComponentFixture<DescartadasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescartadasPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescartadasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
