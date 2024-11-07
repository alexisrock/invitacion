import { ApplicationRef, Component, inject, NgZone } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-falta',
  standalone: true,
  imports: [],
  templateUrl: './falta.component.html',
  styleUrl: './falta.component.scss',
})
export class FaltaComponent {
  timeLeft: any;
  tiempoRestante!: {
    dias: number| undefined;
    horas: number| undefined;
    minutos: number| undefined;
    segundos: number| undefined;
  } | undefined;;
  interval: any;


  constructor(private readonly zone: NgZone) {
    const applicationRef = inject(ApplicationRef);
    applicationRef.isStable
      .pipe(first((isStable) => isStable))
      .subscribe(() => {
        this.interval = setInterval(() => {
          this.zone.run(() => {
            const fechaObjetivo: Date = new Date('2025-07-05T14:30:00');
            this.tiempoRestante = this.calcularTiempoRestante(fechaObjetivo);

          });
        }, 1000);
      });
  }

  calcularTiempoRestante(fechaFin: Date): {
    dias: number;
    horas: number;
    minutos: number;
    segundos: number;
  } {
    const ahora: Date = new Date();
    // Calcula la diferencia en milisegundos entre la fecha objetivo y la fecha actual
    const diferencia: number = fechaFin.getTime() - ahora.getTime();

    const diasRestantes: number = Math.floor(
      diferencia / (1000 * 60 * 60 * 24)
    );
    const horasRestantes: number = Math.floor(
      (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutosRestantes: number = Math.floor(
      (diferencia % (1000 * 60 * 60)) / (1000 * 60)
    );
    const segundosRestantes: number = Math.floor(
      (diferencia % (1000 * 60)) / 1000
    );

    return {
      dias: diasRestantes,
      horas: horasRestantes,
      minutos: minutosRestantes,
      segundos: segundosRestantes,
    };
  }
}
