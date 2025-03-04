import { LoginRequest } from './../../Model/LoginRequest';
import { Component, ContentChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import * as appSettings from '../../../../public/appsettings.json';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BackendServiceService } from '../../Service/backend-service.service';
import { LoginResponse } from '../../Model/LoginResponse';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FormsModule, CommonModule ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  imgSobre: string = appSettings.imgSobre;
  imgFlores: string = appSettings.imgFlores;
  imgCorazon: string = appSettings.imgCorazon;
  imgLoading: string = appSettings.imgLoading;

  isPlaying = true;
  currentTime = 0;
  duration = 0;
  codigo: string = "";
  error: boolean = false;
  message: string = "";
 object:LoginResponse | undefined;
 loading$: Observable<boolean> | undefined;

 @ContentChild("loading")
 customLoadingIndicator: TemplateRef<any> | null = null;
  constructor(public router: Router, private readonly service: BackendServiceService) {
    this.loading$ = service.loading$;

  }

  iniciarSonido() {
    // this.audio = new Audio('/audio.mp3');
    // this.audio.play();
  }

  siguientepagina() {

    if (this.codigo != "" ){
      this.service.loadingOn();
      this.getInfo().then(
        data=> {
          if(data !== undefined){
            this.service.setCurrentLoginResponse(data);
            this.service.loadingOff();
            this.router.navigateByUrl('segundaParte');
          }
          else{
            this.ocultarMessageError("El código no es valido");
            this.service.loadingOff();
          }
        }
      )
    }
    else {
      this.ocultarMessageError("El código es obligatorio");
      this.service.loadingOff();
    }



  }

  ocultarMessageError(mensaje: string) {
    this.error = true;
    this.message = mensaje;
    setTimeout(() => { this.error = false }, 6000)
  }


  getInfo(): Promise<LoginResponse| undefined> {
    return new Promise((resolve, reject) => {
      let loginRequest: LoginRequest = { password: "" };
      loginRequest.password = this.codigo
      this.service.login(loginRequest)
        .subscribe(          {
            next(data) {
              resolve(data)
            },
            error(er) {
              resolve(undefined)

            }
          }
        )

    })

  }

}
