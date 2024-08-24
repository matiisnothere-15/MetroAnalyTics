import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformeTiempoPage } from './informe-tiempo.page';

describe('InformeTiempoPage', () => {
  let component: InformeTiempoPage;
  let fixture: ComponentFixture<InformeTiempoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InformeTiempoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
