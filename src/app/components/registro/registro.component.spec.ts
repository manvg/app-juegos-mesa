import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroComponent } from './registro.component';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterModule, RegistroComponent],
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

    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente REGISTRO se crea correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('Creación del formulario con 10 campos', () => {
    expect(component.formRegistro.contains('nombre')).toBeTruthy();
    expect(component.formRegistro.contains('segundoNombre')).toBeTruthy();
    expect(component.formRegistro.contains('apellidoPaterno')).toBeTruthy();
    expect(component.formRegistro.contains('apellidoMaterno')).toBeTruthy();
    expect(component.formRegistro.contains('fechaNacimiento')).toBeTruthy();
    expect(component.formRegistro.contains('direccion')).toBeTruthy();
    expect(component.formRegistro.contains('usuario')).toBeTruthy();
    expect(component.formRegistro.contains('correo')).toBeTruthy();
    expect(component.formRegistro.contains('contrasena')).toBeTruthy();
    expect(component.formRegistro.contains('confirmarContrasena')).toBeTruthy();
  });

  it('Se valida que el campo "Correo" sea obligatorio y su formato sea correcto', () => {
    let control = component.formRegistro.get('correo');
    control!.setValue('');
    expect(control!.valid).toBeFalsy();

    control!.setValue('mvaldes@gmail.com');
    expect(control!.valid).toBeTruthy();

    control!.setValue('mavaldes.123');
    expect(control!.valid).toBeFalsy();
  });

  it('Si el formulario es válido, guardar usuario', () => {
    spyOn(component, 'formularioRegistro').and.callThrough();

    component.formRegistro.get('nombre')!.setValue('Manuel');
    component.formRegistro.get('segundoNombre')!.setValue('Alfredo');
    component.formRegistro.get('apellidoPaterno')!.setValue('Valdés');
    component.formRegistro.get('apellidoMaterno')!.setValue('Guerra');
    component.formRegistro.get('fechaNacimiento')!.setValue('1999-01-01');
    component.formRegistro.get('direccion')!.setValue('Dirección de prueba');
    component.formRegistro.get('usuario')!.setValue('mvaldes');
    component.formRegistro.get('correo')!.setValue('mvaldes@gmail.com');
    component.formRegistro.get('contrasena')!.setValue('Manuel123');
    component.formRegistro.get('confirmarContrasena')!.setValue('Manuel123');

    fixture.nativeElement.querySelector('button[type="submit"]').click();

    expect(component.formularioRegistro).toHaveBeenCalled();
    expect(component.arrayUsuarios.length).toBe(1);
    expect(component.mensajeExito).toBe('Usuario agregado con éxito');
  });
});
