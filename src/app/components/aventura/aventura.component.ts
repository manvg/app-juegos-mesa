import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-aventura',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './aventura.component.html',
  styleUrl: './aventura.component.scss'
})
export class AventuraComponent {
  productos = [
    {
      imagen: 'assets/images/aventura_1.png',
      titulo: 'Almanac: El Camino del Dragón',
      descripcion: 'Tu caravana está lista y los vagones ordenados. El camino que tienes por delante está plagado de peligros, pero ése es el precio de una fortuna inimaginable.',
      precio: '34.990',
      precioOferta: '44.000'
    },
    {
      imagen: 'assets/images/aventura_2.png',
      titulo: 'Wonder Book',
      descripcion: 'Wonder Book es un juego cooperativo y narrativo. Sumérgete en la aventura y descubre los diferentes rumbos que puede tomar la historia. ¡Cada decisión tendrá su consecuencia!',
      precio: '44.990',
      precioOferta: '61.990'
    },
    {
      imagen: 'assets/images/aventura_3.png',
      titulo: 'Tough Calls: Dystopia',
      descripcion: 'Tough Calls: Dystopia es un juego narrativo y argumentativo ambientado en una variedad de escenarios construidos desde la Ciencia Ficción, como una invasión zombie...',
      precio: '16.990',
      precioOferta: null
    }
  ];
}
