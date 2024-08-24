import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarFlujoPasPage } from './eliminar-flujo-pas.page';

describe('EliminarFlujoPasPage', () => {
  let component: EliminarFlujoPasPage;
  let fixture: ComponentFixture<EliminarFlujoPasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EliminarFlujoPasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
