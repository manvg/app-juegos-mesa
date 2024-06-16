import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CooperativoComponent } from './cooperativo.component';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('CooperativoComponent', () => {
  let component: CooperativoComponent;
  let fixture: ComponentFixture<CooperativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterModule, CooperativoComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),
            snapshot: {
              paramMap: {
                get: () => null
              }
            }
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CooperativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente COOPERATIVO se crea correctamente', () => {
    expect(component).toBeTruthy();
  });
});
