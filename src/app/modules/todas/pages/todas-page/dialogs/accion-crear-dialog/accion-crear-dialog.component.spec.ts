import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionCrearDialogComponent } from './accion-crear-dialog.component';

describe('AccionCrearDialogComponent', () => {
  let component: AccionCrearDialogComponent;
  let fixture: ComponentFixture<AccionCrearDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccionCrearDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccionCrearDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
