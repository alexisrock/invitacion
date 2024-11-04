import {  Component} from '@angular/core';

import { NombresComponent } from '../nombres/nombres.component';
import { FaltaComponent } from '../falta/falta.component';
import { CeremoniaComponent } from '../ceremonia/ceremonia.component';

@Component({
  selector: 'app-segundaparte',
  standalone: true,
  imports: [NombresComponent, FaltaComponent, CeremoniaComponent],
  templateUrl: './segundaparte.component.html',
  styleUrl: './segundaparte.component.scss',
})
export class SegundaparteComponent {

  interval: any;
  modal: boolean = false
  seccion: number=0;
  /**
   *
   */
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



}
