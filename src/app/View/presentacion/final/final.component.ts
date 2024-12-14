import { Component } from '@angular/core';
import * as appSettings from '../../../../../public/appsettings.json';

@Component({
  selector: 'app-final',
  standalone: true,
  imports: [],
  templateUrl: './final.component.html',
  styleUrl: './final.component.scss'
})
export class FinalComponent {
  imgMilagus: string =appSettings.imgMilaGus;
  imgGus: string =appSettings.imgGus;
  imgMila: string =appSettings.imgMila;
}
