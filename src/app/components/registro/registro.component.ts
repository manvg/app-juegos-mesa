import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
  mensajeExito = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formRegistro = this.fb.group({
      nombre: ['', Validators.required],
      segundoNombre: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
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
      this.mensajeExito = 'Usuario agregado con éxito';

      this.formRegistro.reset();
      this.enviado = false;
      alert('OK');
    }
  }

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
}
