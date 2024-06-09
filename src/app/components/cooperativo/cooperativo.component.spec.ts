import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperativoComponent } from './cooperativo.component';

describe('CooperativoComponent', () => {
  let component: CooperativoComponent;
  let fixture: ComponentFixture<CooperativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CooperativoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CooperativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
