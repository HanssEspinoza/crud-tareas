import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasPageComponent } from './tareas-page.component';

describe('TareasPageComponent', () => {
  let component: TareasPageComponent;
  let fixture: ComponentFixture<TareasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
