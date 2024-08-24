import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformeOrigenPage } from './informe-origen.page';

describe('InformeOrigenPage', () => {
  let component: InformeOrigenPage;
  let fixture: ComponentFixture<InformeOrigenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InformeOrigenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
