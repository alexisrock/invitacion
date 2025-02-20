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
import { BackendServiceService } from '../../../Service/backend-service.service';
import { Subscription } from 'rxjs';
import { Invitado } from '../../../Model/LoginResponse';
import { ConfirmAssistanceRequest, InvitadoCA } from '../../../Model/ConfirmAssistanceRequest';

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
    { src: appSettings.imgDC6 },
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
  listInvitados: Invitado[] = [];

  listRequest: InvitadoCA[] = [];

  private loginResponseServiceSubscription: Subscription | undefined;



  constructor(private service: BackendServiceService) {
    this.loginResponseServiceSubscription = service.currentLogin.subscribe( currentLogin => {
       this.listInvitados = currentLogin.invitados;
    })
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

  addInvitadosCA( invitadoId: number, asistencia: boolean ){
    let request = {} as InvitadoCA;
    request.id = invitadoId;
    request.asistencia = asistencia === true ? 1 : 0;
    request.confirmado = 1;
    this.listRequest.push(request)
  }

  sendConfirm(){

    if (this.listRequest.length!==0) {

      let request = {} as ConfirmAssistanceRequest;
      request.invitados = this.listRequest;
      this.service.confirmAsisitencia(request)
      .subscribe({
        next: (value) => {
          this.Modal({valor: false, seccionH: 0});
        },error(err) {


        }})

    }


  }






}
