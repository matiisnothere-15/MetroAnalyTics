import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsertarFlujoPasPage } from './insertar-flujo-pas.page';

describe('InsertarFlujoPasPage', () => {
  let component: InsertarFlujoPasPage;
  let fixture: ComponentFixture<InsertarFlujoPasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InsertarFlujoPasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
