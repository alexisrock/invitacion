import { Component, ContentChild, TemplateRef } from '@angular/core';
import * as appSettings from '../../../../../public/appsettings.json';
import { Image } from '../../../Model/Image';
import { NombresComponent } from '../nombres/nombres.component';
import { FaltaComponent } from '../falta/falta.component';
import { CeremoniaComponent } from '../ceremonia/ceremonia.component';
import { CarruselComponent } from "../carrusel/carrusel.component";
import { TenerEncuentaComponent } from '../tener-encuenta/tener-encuenta.component';
import { FinalComponent } from '../final/final.component';
import { CommonModule, NgFor } from '@angular/common';
import { BackendServiceService } from '../../../Service/backend-service.service';
import { Invitado } from '../../../Model/LoginResponse';
import { ConfirmAssistanceRequest, InvitadoCA } from '../../../Model/ConfirmAssistanceRequest';
import { ObservationRequest } from '../../../Model/ObservationRequest';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { SuggestSongRequest } from '../../../Model/SuggestSongRequest';

@Component({
  selector: 'app-segundaparte',
  standalone: true,
  imports: [NombresComponent, FaltaComponent, CeremoniaComponent, CarruselComponent, TenerEncuentaComponent, FinalComponent, NgFor, FormsModule, CommonModule],
  templateUrl: './segundaparte.component.html',
  styleUrl: './segundaparte.component.scss',
})
export class SegundaparteComponent {

  displaymessage: boolean = false
  displayLoadding: boolean = false
  messageRespobse: string = ""
  validaCampos: boolean = false
  interval: any;
  modal: boolean = false
  seccion: number = 0;
  imgAnillos: string = appSettings.imgAnillos
  imgcalendario: string= appSettings.imgCalendario
  imgflorizq: string= appSettings.imgFloresizquierda
  imgFlorder: string= appSettings.imgFloresderecha
  transform = 'translateX(0)';
  images: Image[] = [
    { src: appSettings.imgDC6 },
    { src: appSettings.imgDC7 },
    { src: appSettings.imgDC4 },
    { src: appSettings.imgDC2 },
    { src: appSettings.imgDC1 },
    { src: appSettings.imgDC3 },
    { src: appSettings.imgDC5 }
  ];

  imgttf1: string = appSettings.imgttf1;
  imgttf2: string = appSettings.imgttf2;
  imgttf3: string = appSettings.imgttf3;
  imgttf4: string = appSettings.imgttf4;
  imgttfok: string = appSettings.imgttfok;
  imgttfnot: string = appSettings.imgttfnot;
  currentIndex = 0;
  listInvitados?: Invitado[] = [];
  listRequest: InvitadoCA[] = [];
  observacion: string = "";
  idUser?: number = 0;
  loading: Observable<boolean> | undefined ;
  currentTime = 0;

  imgLoading: string = appSettings.imgLoading;
  urlSong: string = "";
  momento: string = "";

  @ContentChild("loading")
  customLoadingIndicator: TemplateRef<any> | null = null;
  constructor(private readonly service: BackendServiceService) {
    let response = this.service.getLoginResponse();
    this.listInvitados = response?.invitados;
    this.idUser = response?.id;

  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  Modal(data: { valor: boolean, seccionH: number }) {
    this.modal = data.valor;
    this.seccion = data.seccionH;
  }

  ModalSegunda(valor: boolean, seccionH: number) {
    this.Modal({ valor, seccionH });
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.transform = `translateX(-${this.currentIndex * 100}%)`;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.transform = `translateX(-${this.currentIndex * 100}%)`;
  }

  addInvitadosCA(invitadoId: number, asistencia: boolean ) {
    let request = {} as InvitadoCA;
    request.id = invitadoId;
    request.asistencia = asistencia === true ? 1 : 0;
    request.confirmado = 1;
    this.listRequest.push(request)
  }

  ocultarMessageError(mensaje: string, validateCam: boolean) {
    this.displaymessage = true;
    this.messageRespobse = mensaje;
    this.validaCampos = validateCam
    setTimeout(() => { this.displaymessage = false;  this.messageRespobse = ""  }, 6000)
  }


  sendConfirm() {
    this.displayLoadding = true;
    if (this.listRequest.length !== 0) {

      let request = {} as ConfirmAssistanceRequest;
      request.invitados = this.listRequest;
      this.service.confirmAsisitencia(request)
        .subscribe({
          next: (value) => {
            this.displayLoadding = false;
            this.ocultarMessageError(value.message, true)
          }, error:(err)  => {
            this.displayLoadding = false;
          }
        })

    }
    this.displayLoadding = false;
  }



  sendObservation() {
    this.displayLoadding = true;
    if (this.observacion !== "" && this.observacion.length > 3) {
      this.service.loadingOn();
      let Request = {} as ObservationRequest;
      Request.observacion = this.observacion;
      Request.pk_id_invitado = this.idUser;
      this.service.sendObservation(Request)
        .subscribe({
          next: (value) => {
            this.displayLoadding = false;
            this.observacion = ""
            this.ocultarMessageError(value.message, true)
          }, error(err) {

          }
        })

    }else{
      this.displayLoadding = false;
      this.ocultarMessageError("¡Faltan  campos por llenar!", false)
    }

  }

  sendSuggestSong(){
    this.displayLoadding = true;
    if (this.ValidateFormSuggestSong()) {
      this.service.loadingOn();
      let Request = {} as SuggestSongRequest;
      Request.momento_cancion = this.momento;
      Request.url_cancion = this.urlSong;
      Request.pk_id_invitado = this.idUser;
      this.service.sendSuggestsond(Request)
        .subscribe({
          next: (value) => {
            this.displayLoadding = false;
            this.momento = ""
            this.urlSong = ""
            this.ocultarMessageError(value.message, true)
          }, error(err) {

          }
        })

    }else{
      this.displayLoadding = false;
      this.ocultarMessageError("¡Faltan  campos por llenar!", false)
    }

  }

  ValidateFormSuggestSong(){
    if (this.urlSong !== "" && this.urlSong.length > 3  && this.momento !== "" && this.momento.length > 3 ) {
      return true;
    }
    return false;
  }




}
