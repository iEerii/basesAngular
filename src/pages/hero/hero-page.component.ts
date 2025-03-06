import { Component, computed, signal } from "@angular/core";
import { UpperCasePipe } from "@angular/common";

@Component ({
    templateUrl: './hero-page.component.html',
    imports:[ UpperCasePipe ]
})

export class HeroPageComponent {
    name = signal('Ironman');
    age = signal(45);

    // Senal computada
    heroDescription = computed(() => {
        // Por fines didacticos se crea una constante
        const description = `${ this.name() } - ${ this.age() }`;
        return description;
    })

    // getHeroDescription(){
    //     return `${this.name()} tiene ${this.age()} años`;
    // }

    // Senal computada de capitalizedName
    capitalizedName = computed(() => this.name().toUpperCase());

    changeHero() {
        this.name.set('Spiderman');
        this.age.set(22);
    }

    resetForm() {
        this.name.set('Ironman');
        this.age.set(45);
    }

    changeAge(){
        this.age.set(60);
    }
}
