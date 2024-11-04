import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  audio = new Audio();
  isPlaying = false;
  currentTime = 0;
  duration = 0;

/**
 *
 */
  constructor(public router: Router) {
    if (typeof window !== 'undefined') {
    this.iniciarSonido()
    }
  }

  iniciarSonido(){
    this.audio = new Audio('/audio.mp3');
    this.audio.play();
  }

  siguientepagina(){
    this.router.navigateByUrl('segundaParte');
  }

}
