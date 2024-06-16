import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FamiliarComponent } from './familiar.component';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('FamiliarComponent', () => {
  let component: FamiliarComponent;
  let fixture: ComponentFixture<FamiliarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterModule, FamiliarComponent],
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

    fixture = TestBed.createComponent(FamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente FAMILIAR se crea correctamente', () => {
    expect(component).toBeTruthy();
  });
});
