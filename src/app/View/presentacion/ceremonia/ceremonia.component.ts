import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceremonia',
  standalone: true,
  imports: [],
  templateUrl: './ceremonia.component.html',
  styleUrl: './ceremonia.component.scss'
})
export class CeremoniaComponent {
  @Output() event = new EventEmitter<{ valor: boolean, seccionH: number }>();


  Modal(valor: boolean, seccionH:number){
    this.event.emit({valor, seccionH});

  }

}
