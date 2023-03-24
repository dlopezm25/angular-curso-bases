import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})

export class HeroeComponent{

    nombre: string = 'Batman'
    edad: number = 27

    get nombreCapitalizado(){
        return this.nombre.toUpperCase()
    }

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre = 'Flash'
    }

    cambiarEdad():void{
        this.edad = 33
    }
}