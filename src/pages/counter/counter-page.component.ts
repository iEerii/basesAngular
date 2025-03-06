import { Component, signal } from "@angular/core";

// Para que sea un componente se añade el decorador Component
@Component({
    // Siempre comenzar con ./ al principio de la ruta para que haga referencia al path relativo donde nos encontramos.
    templateUrl: './counter-page.component.html',
    styles: `
        button {
            padding: 5px;
            margin: 5px 10px;
            width: 75px;
        }
    `
})

export class CounterPageComponent {
    counter = 10;
    // La señal
    counterSignal = signal(10);

    // Metodo que incremente el valor
    increaseBy(value: number) {
        this.counter += value;
        this.counterSignal.update((current) => current + value)
    }

    decreaseBy(value: number) {
        this.counter -= value;
    }

    resetCounter() {
        this.counter = 10;
        this.counterSignal.set(0);
    }
}
