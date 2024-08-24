import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsertarEstdestino } from './insertar-est-destino.page';

describe('InsertarTiempotras', () => {
  let component: InsertarEstdestino;
  let fixture: ComponentFixture<InsertarEstdestino>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InsertarEstdestino);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
