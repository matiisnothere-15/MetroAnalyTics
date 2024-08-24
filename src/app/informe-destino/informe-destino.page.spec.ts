import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformeDestinoPage } from './informe-destino.page';

describe('InformeDestinoPage', () => {
  let component: InformeDestinoPage;
  let fixture: ComponentFixture<InformeDestinoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InformeDestinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
