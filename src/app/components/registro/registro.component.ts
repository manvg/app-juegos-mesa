import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  formRegistro!: FormGroup;
  arrayUsuarios: any[] = [];
  enviado = false;

  constructor(private fb: FormBuilder,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.formRegistro = this.fb.group({
      nombre: ['', Validators.required],
      segundoNombre: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      fechaNacimiento: ['', [Validators.required, this.validarEdad(13)]],
      direccion: [''],
      usuario: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, this.validarContraseña()]],
      confirmarContrasena: ['', Validators.required]
    }, { validators: this.validarIgualdadContraseña });
  }

  formularioRegistro() {
    this.enviado = true;
    if (this.formRegistro.valid) {
      const nuevoUsuario = {
        nombre: this.formRegistro.get('nombre')!.value,
        segundoNombre: this.formRegistro.get('segundoNombre')!.value,
        apellidoPaterno: this.formRegistro.get('apellidoPaterno')!.value,
        apellidoMaterno: this.formRegistro.get('apellidoMaterno')!.value,
        direccion: this.formRegistro.get('direccion')!.value,
        fechaNacimiento: this.formRegistro.get('fechaNacimiento')!.value,
        usuario: this.formRegistro.get('usuario')!.value,
        correo: this.formRegistro.get('correo')!.value,
        contrasena: this.formRegistro.get('contrasena')!.value
      };

      this.arrayUsuarios.push(nuevoUsuario);
      this.formRegistro.reset();
      this.enviado = false;

      this.snackBar.open('Se guardó correctamente el usuario', 'Cerrar', {
        duration: 3000,
      });
    }
  }

  limpiarFormulario() {
    this.formRegistro.patchValue({
      nombre: '',
      segundoNombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      direccion: '',
      fechaNacimiento: '',
      usuario: '',
      correo: '',
      contrasena: '',
      confirmarContrasena: ''
    });
  }

  //#region Validación contraseña
  validarIgualdadContraseña(form: FormGroup): ValidationErrors | null {
    const contrasena = form.get('contrasena')!.value;
    const confirmarContrasena = form.get('confirmarContrasena')!.value;

    if (contrasena && confirmarContrasena && contrasena !== confirmarContrasena) {
      return { contrasenasDistintas: true };
    }
    return null;
  }

  validarContraseña(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const contrasena = control.value;

      if (!contrasena) {
        return null; // Si no hay contraseña, no validar
      }

      const errors: ValidationErrors = {};

      if (contrasena.length < 6 || contrasena.length > 18) {
        errors['length'] = 'Largo entre 6 y 18 caracteres';
      }
      if (!/[A-Z]/.test(contrasena)) {
        errors['uppercase'] = 'Debe contener al menos una letra mayúscula';
      }
      if (!/\d/.test(contrasena)) {
        errors['number'] = 'Debe contener al menos un número';
      }

      return Object.keys(errors).length ? errors : null;
    };
  }
  //#endregion

  //#region Validación edad
  calcularEdad(fechaNacimiento: Date): number {
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }
    return edad;
  }

  validarEdad(edadMinima: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const fechaNacimiento = control.value;
      if (!fechaNacimiento) {
        return null;
      }

      const edad = this.calcularEdad(new Date(fechaNacimiento));
      if (edad < edadMinima) {
        return { menorEdad: { edadRequerida: edadMinima, edadActual: edad } };
      }
      return null;
    };
  }
  //#endregion

  //#region Validaciones ingreso de texto y números
  soloLetrasValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s-]+$/;
      if (control.value && !regex.test(control.value)) {
        return { soloLetras: 'Sólo se permiten letras' };
      }
      return null;
    };
  }

  alphanumericoValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const regex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ\s-]+$/;
      if (control.value && !regex.test(control.value)) {
        return { alphanumerico: 'Sólo se permiten caracteres alfanuméricos' };
      }
      return null;
    };
  }

  soloNumerosValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const regex = /^[0-9]+$/;
      if (control.value && !regex.test(control.value)) {
        return { soloNumeros: 'Sólo se permiten números' };
      }
      return null;
    };
  }
  //#endregion
}
