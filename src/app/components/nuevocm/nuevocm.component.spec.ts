import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevocmComponent } from './nuevocm.component';

describe('NuevocmComponent', () => {
  let component: NuevocmComponent;
  let fixture: ComponentFixture<NuevocmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevocmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevocmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
