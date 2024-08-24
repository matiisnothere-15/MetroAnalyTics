import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsertarTiempotras } from './insertar-tiempo-tras.page';

describe('InsertarTiempotras', () => {
  let component: InsertarTiempotras;
  let fixture: ComponentFixture<InsertarTiempotras>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InsertarTiempotras);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
