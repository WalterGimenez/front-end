import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaErroneaComponent } from './pagina-erronea.component';

describe('PaginaErroneaComponent', () => {
  let component: PaginaErroneaComponent;
  let fixture: ComponentFixture<PaginaErroneaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaErroneaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaErroneaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
