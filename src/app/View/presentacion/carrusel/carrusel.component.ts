import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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

  imagenCamara:string =appSettings.imgCamara;

  images: Image[] = [
    { src: appSettings.imgCarrucel1 },
    { src: appSettings.imgCarrucel2 },
    { src: appSettings.imgCarrucel3 },
    { src: appSettings.imgCarrucel4 },
    { src: appSettings.imgCarrucel5 },
    { src: appSettings.imgCarrucel6 },
    { src: appSettings.imgCarrucel7 },
    { src: appSettings.imgCarrucel8 },
    { src: appSettings.imgCarrucel9 },
    { src: appSettings.imgCarrucel10 },
    { src: appSettings.imgCarrucel11 },
    { src: appSettings.imgCarrucel12 },
    { src: appSettings.imgCarrucel13 },
    { src: appSettings.imgCarrucel14 },
    { src: appSettings.imgCarrucel15 },
    { src: appSettings.imgCarrucel16 },
    { src: appSettings.imgCarrucel17 },
    { src: appSettings.imgCarrucel18 },
    { src: appSettings.imgCarrucel19 },
    { src: appSettings.imgCarrucel20 },
    { src: appSettings.imgCarrucel21 },
    { src: appSettings.imgCarrucel22 },
    { src: appSettings.imgCarrucel23 },
    { src: appSettings.imgCarrucel24 }


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
