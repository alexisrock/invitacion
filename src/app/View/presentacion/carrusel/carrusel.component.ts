import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { Image } from '../../../Model/Image';
import * as appSettings from '../../../../../public/appsettings.json';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [FontAwesomeModule, NgFor  ],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.scss'
})
export class CarruselComponent {
  faCoffee = faCameraRetro;

  images: Image[] = [
    { src:  appSettings.imgCarrucel1 },
    { src: appSettings.imgCarrucel2 },
    { src: appSettings.imgCarrucel3 }
  ];
  currentIndex = 0;
  transform = 'translateX(0)';

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.transform = `translateX(-${this.currentIndex * 100}%)`;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.transform = `translateX(-${this.currentIndex * 100}%)`;
  }
}
