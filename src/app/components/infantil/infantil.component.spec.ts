import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfantilComponent } from './infantil.component';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('InfantilComponent', () => {
  let component: InfantilComponent;
  let fixture: ComponentFixture<InfantilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterModule, InfantilComponent],
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

    fixture = TestBed.createComponent(InfantilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente INFANTIL se crea correctamente', () => {
    expect(component).toBeTruthy();
  });
});
