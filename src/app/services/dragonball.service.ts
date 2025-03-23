import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

// Cargar los datos del localStorage
const loadFromLocalStorage = (): Character[] => {
    const characters = localStorage.getItem('characters')

    return characters ? JSON.parse(characters) : [];
}

@Injectable({providedIn: 'root'})
export class DragonballService {
  characters = signal<Character[]>(loadFromLocalStorage())

  // Crear una funcion que guarde la data en localStorage
  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()))
  })

  // Se manda a llamar newCharacter, es decir se recibe como param
  addCharacter(newCharacter: Character) {
  // Para insertarlo:
    this.characters.update((list) => [ ... list, newCharacter ])
  }
}
