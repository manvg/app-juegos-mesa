import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-familiar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './familiar.component.html',
  styleUrl: './familiar.component.scss'
})
export class FamiliarComponent {
  productos = [
    {
      imagen: 'assets/images/familiar_1.png',
      titulo: 'Exit Kids: Acertijos en la Jungla',
      descripcion: 'Juego de escape cooperativo',
      precio: '15.000',
      precioOferta: null
    },
    {
      imagen: 'assets/images/familiar_2.png',
      titulo: 'Fantasma Blitz',
      descripcion: '5 piezas, 60 cartas con ilustraciones.',
      precio: '12.990',
      precioOferta: '24.990'
    },
    {
      imagen: 'assets/images/familiar_3.png',
      titulo: '¡Rescate!',
      descripcion: 'Es un juego cooperativo de lucha contra el fuego.',
      precio: '22.990',
      precioOferta: '32.000'
    }
  ];
}
