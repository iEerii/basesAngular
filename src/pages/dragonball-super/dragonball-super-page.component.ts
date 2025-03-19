import { Component, signal} from "@angular/core";
import { CharacterLisComponent } from "../../app/components/dragonball/character-lis/character-lis.component";
import { CharacterAddComponent } from "../../app/components/dragonball/character-add/character-add-component";

interface Character {
    id: number,
    name: string,
    power: number
}

@Component({
    templateUrl: './dragonball-super-page.component.html',
    selector: 'dragonball-super',
    imports: [
        CharacterLisComponent,
        CharacterAddComponent
    ]
})

export class DragonballSuperPageComponent {
    name = signal('');
    power = signal(0);

    characters = signal<Character[]>([
        {id: 1, name: 'Goku', power: 9001},
        {id: 2, name: 'Vegeta', power: 8001},
    ])

    // Se manda a llamar newCharacter, es decir se recibe como param
    addCharacter(newCharacter: Character) {
        // Para insertarlo:
        this.characters.update((list) => [ ... list, newCharacter ])
    }

    resetFields() {
        this.name.set('');
        this.power.set(0)
    }
}
