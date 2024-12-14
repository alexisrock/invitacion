import {  Component} from '@angular/core';
import * as appSettings from '../../../../../public/appsettings.json';
import { Image } from '../../../Model/Image';
import { NombresComponent } from '../nombres/nombres.component';
import { FaltaComponent } from '../falta/falta.component';
import { CeremoniaComponent } from '../ceremonia/ceremonia.component';
import { CarruselComponent } from "../carrusel/carrusel.component";
import { TenerEncuentaComponent } from '../tener-encuenta/tener-encuenta.component';
import { FinalComponent } from '../final/final.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-segundaparte',
  standalone: true,
  imports: [NombresComponent, FaltaComponent, CeremoniaComponent, CarruselComponent, TenerEncuentaComponent, FinalComponent, NgFor ],
  templateUrl: './segundaparte.component.html',
  styleUrl: './segundaparte.component.scss',
})
export class SegundaparteComponent {

  interval: any;
  modal: boolean = false
  seccion: number=0;
  imgAnillos: string=appSettings.imgAnillos
  transform = 'translateX(0)';
  images: Image[] = [
    { src: appSettings.imgDC1 },
    { src: appSettings.imgDC2 },
    { src: appSettings.imgDC3 },
    { src: appSettings.imgDC4 },
    { src: appSettings.imgDC5 }
  ];
  imgttf1: string=appSettings.imgttf1;
  imgttf2: string=appSettings.imgttf2;
  imgttf3: string=appSettings.imgttf3;
  imgttf4: string=appSettings.imgttf4;
  imgttfok: string=appSettings.imgttfok;
  imgttfnot: string=appSettings.imgttfnot;

  currentIndex = 0;
  constructor() {
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }



  Modal(data: { valor: boolean, seccionH: number }){
    this.modal = data.valor;
    this.seccion=data.seccionH;
  }

  ModalSegunda(valor: boolean, seccionH: number){

    this.Modal({valor, seccionH});
  }
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.transform = `translateX(-${this.currentIndex * 100}%)`;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.transform = `translateX(-${this.currentIndex * 100}%)`;
  }


}
