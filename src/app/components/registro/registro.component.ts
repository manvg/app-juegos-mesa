import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {
  usuario = {
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
  };

  arrayUsuarios: any[] = [];
  mensajeExito = '';

  registrarse(form: NgForm) {
    if (this.usuario.contrasena !== this.usuario.confirmarContrasena) {
      alert('Las contraseñas no coinciden');
      return;
    }
    let usuarioNuevo = {
      nombre: this.usuario.nombre,
      segundoNombre: this.usuario.segundoNombre,
      apellidoPaterno: this.usuario.apellidoPaterno,
      apellidoMaterno: this.usuario.apellidoMaterno,
      direccion: this.usuario.direccion,
      fechaNacimiento: this.usuario.fechaNacimiento,
      usuario: this.usuario.usuario,
      correo: this.usuario.correo,
      contrasena: this.usuario.contrasena
    }
    this.arrayUsuarios.push(usuarioNuevo);

    this.mensajeExito = 'Usuario registrado exitosamente';

    this.limpiarFormulario(form);

    setTimeout(() => {
      this.mensajeExito = '';
    }, 3000);

    console.log('Formulario de registro enviado:', this.usuario);
    console.log('Usuarios:', this.arrayUsuarios);
  }

  limpiarFormulario(form: NgForm) {
    form.resetForm();
    this.usuario = {
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
    };
  }
}
