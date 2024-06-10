import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID, Renderer2, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const formRegister = this.el.nativeElement.querySelector('#registrationForm') as HTMLFormElement;

      if (formRegister) {
        this.renderer.listen(formRegister, 'submit', (event: Event) => {
          event.preventDefault();
          event.stopPropagation();

        const nombre = (this.el.nativeElement.querySelector('#txtNombre') as HTMLInputElement).value;
        const apellidoPaterno = (this.el.nativeElement.querySelector('#txtApellidoPaterno') as HTMLInputElement).value;
        const apellidoMaterno = (this.el.nativeElement.querySelector('#txtApellidoMaterno') as HTMLInputElement).value;
        const direccion = (this.el.nativeElement.querySelector('#txtDireccion') as HTMLInputElement).value;
        const fechaNacimiento = (this.el.nativeElement.querySelector('#dtFechaNacimiento') as HTMLInputElement).value;
        const usuario = (this.el.nativeElement.querySelector('#txtUsuario') as HTMLInputElement).value;
        const email = (this.el.nativeElement.querySelector('#txtEmail') as HTMLInputElement).value;
        const contrasena = (this.el.nativeElement.querySelector('#txtContrasena') as HTMLInputElement).value;
        const repetirContrasena = (this.el.nativeElement.querySelector('#txtRepetirContrasena') as HTMLInputElement).value;
        const perfil = 'Cliente';

        const isValid = formRegister.checkValidity();
        formRegister.classList.add('was-validated');
    
        if (!isValid) {
          return;
        }

        //Valida contraseña
        if (!/[A-Z]/.test(contrasena)) {
          alert('La contraseña debe contener al menos una letra mayúscula.');
          return;
        }

        if (!/\d/.test(contrasena)) {
          alert('La contraseña debe contener al menos un número.');
          return;
        }

        if (contrasena !== repetirContrasena) {
          alert('Las contraseñas no coinciden.');
          return;
        }

        //Valida edad
        const dtFechaNacimiento = new Date(fechaNacimiento);
        const edadMinima = 13;
        const fechaHoy = new Date();
        let edad = fechaHoy.getFullYear() - dtFechaNacimiento.getFullYear();
        const mes = fechaHoy.getMonth() - dtFechaNacimiento.getMonth();
        if (mes < 0 || (mes === 0 && fechaHoy.getDate() < dtFechaNacimiento.getDate())) {
          edad--;
        }
        if (edad < edadMinima) {
          alert('Debes ser mayor de 13 años para registrarte.');
          return;
        }


        });
      }

    }
  }
}
