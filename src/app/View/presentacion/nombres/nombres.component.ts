import { Component } from '@angular/core';
import * as appSettings from '../../../../../public/appsettings.json';
@Component({
  selector: 'app-nombres',
  standalone: true,
  imports: [],
  templateUrl: './nombres.component.html',
  styleUrl: './nombres.component.scss'
})
export class NombresComponent {
  fecha: string = '05.07.2025';
  imgNovios: string= appSettings.imgNovios;
}
