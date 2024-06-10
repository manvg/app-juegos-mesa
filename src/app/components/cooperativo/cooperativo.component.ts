import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cooperativo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cooperativo.component.html',
  styleUrl: './cooperativo.component.scss'
})
export class CooperativoComponent {
  productos = [
    {
      imagen: 'assets/images/cooperativo_1.png',
      titulo: 'Robin Hood Y Sus Alegres Compañeros',
      descripcion: 'Estilo eurogame y semicooperativo. Está preparado para 1 a 5 jugadores. Incluye variante en solitario y totalmente cooperativa.',
      precio: '50.000',
      precioOferta: null
    },
    {
      imagen: 'assets/images/cooperativo_2.png',
      titulo: 'Exit: La Mansión Siniestra',
      descripcion: 'Experiencia de las “escape room” en tu propia casa. Atrévete a entrar en la Mansión Siniestra y descubre todos los misterios y acertijos que en ella encontraras.',
      precio: '12.990',
      precioOferta: null
    },
    {
      imagen: 'assets/images/cooperativo_3.png',
      titulo: 'Magic Maze: Seguridad Máxima',
      descripcion: 'Da vida a los guardias del centro comercial de Magic Maze, y también tiene nuevos módulos que brindan nuevas experiencia.',
      precio: '11.990',
      precioOferta: '17.990'
    }
  ];
}
