import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciasesionComponent } from './iniciasesion.component';

describe('IniciasesionComponent', () => {
  let component: IniciasesionComponent;
  let fixture: ComponentFixture<IniciasesionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciasesionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciasesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
