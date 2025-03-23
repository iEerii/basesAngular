import { Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
    selector: 'dragonball-character-lis',
    templateUrl: './character-lis.component.html',
})

export class CharacterLisComponent {
    characters = input.required<Character[]>();
    listName = input.required<string>();
}
