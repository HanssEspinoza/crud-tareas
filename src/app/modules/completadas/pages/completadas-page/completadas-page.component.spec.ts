import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletadasPageComponent } from './completadas-page.component';

describe('CompletadasPageComponent', () => {
  let component: CompletadasPageComponent;
  let fixture: ComponentFixture<CompletadasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletadasPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletadasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
