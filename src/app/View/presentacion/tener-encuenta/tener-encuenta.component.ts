import { Component, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMusic, faShirt, faClipboardList, faImages } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-tener-encuenta',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './tener-encuenta.component.html',
  styleUrl: './tener-encuenta.component.scss'
})
export class TenerEncuentaComponent {
  faMusic = faMusic
  fashirt = faShirt
  faClipBoard = faClipboardList
  faImages = faImages
  @Output() event = new EventEmitter<{ valor: boolean, seccionH: number }>();

  Modal(valor: boolean, seccionH:number){
    this.event.emit({valor, seccionH});

  }

}
