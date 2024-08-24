import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsertarEstorigen } from './insertar-est-origen.page';

describe('InsertarTiempotras', () => {
  let component: InsertarEstorigen;
  let fixture: ComponentFixture<InsertarEstorigen>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InsertarEstorigen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
