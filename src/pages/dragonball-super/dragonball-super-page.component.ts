import { Component, inject } from "@angular/core";
import { CharacterLisComponent } from "../../app/components/dragonball/character-lis/character-lis.component";
import { CharacterAddComponent } from "../../app/components/dragonball/character-add/character-add-component";
import { DragonballService } from "../../app/services/dragonball.service";

@Component({
	templateUrl: './dragonball-super-page.component.html',
	selector: 'dragonball-super',
	imports: [
		CharacterLisComponent,
		CharacterAddComponent
	]
})

export class DragonballSuperPageComponent {
    // manera antigua de inyectar un servicio
    // constructor (
    //     public drangonballService: DragonballService
    // ){}

    // manera actual de inyectar un servicio
    public dragonballService = inject(DragonballService);
}
