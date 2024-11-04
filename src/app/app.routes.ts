import { Routes } from '@angular/router';
import { InicioComponent } from './View/inicio/inicio.component';
import { SegundaparteComponent } from './View/presentacion/segundaparte/segundaparte.component';

export const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'segundaParte', component: SegundaparteComponent}
];
