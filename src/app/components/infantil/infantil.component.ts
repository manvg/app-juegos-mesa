import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-infantil',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './infantil.component.html',
  styleUrl: './infantil.component.scss'
})
export class InfantilComponent {
  productos = [
    {
      imagen: 'assets/images/infantil_1.png',
      titulo: 'Taco Gatito Pizza',
      descripcion: 'Este juego de cartas requiere de toda tu atención y rapidez. ¡Sobre todo rapidez!',
      precio: '11.990',
      precioOferta: null
    },
    {
      imagen: 'assets/images/infantil_2.png',
      titulo: '¿Quién Fue?',
      descripcion: 'Compiten para deshacerse de sus cartas y así evitar la culpa de ser el dueño del animal que se hizo caca.',
      precio: '12.990',
      precioOferta: null
    },
    {
      imagen: 'assets/images/infantil_3.png',
      titulo: 'Mindo: Perros',
      descripcion: 'Juego de lógica para niños. Puzzles multinivel, completar el cuadrado con las piezas dadas.',
      precio: '10.000',
      precioOferta: null
    }
  ];
}
