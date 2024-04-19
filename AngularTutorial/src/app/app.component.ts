import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
//export class AppComponent {

//  contactForm = new FormGroup({
//    firstname: new FormControl(),
//    lastname: new FormControl(),
//    email: new FormControl(),
//    gender: new FormControl(),
//    isMarried: new FormControl(),
//    country: new FormControl()
//  })

//  onSubmit() {
//    console.log(this.contactForm.value);
//  }
//}

export class AppComponent {
  nombre: string = "";
  etiquetaPeso: string = "Peso";
  peso: number = 0;
  etiquetaAltura: string = "Altura";
  altura: number = 0;
  sistema: string = "";
  mensaje = "";
  imc: number = 0;
  composicion: string = "";

  eligeSistema(): boolean {
    return (this.sistema != "");
  }
  calculoImc() {
    if (this.sistema == "Metrico") {
      this.imc = Number(this.peso) / (Number(this.altura **2));
      return this.imc ;
    } else if (this.sistema == "Ingles") {
      this.imc = (Number(this.peso) / Number(this.altura **2)) * 703;
      return this.imc;
    } else {
      return "Seleccione un sistema";
    }
  }
  devuelveComposicion():string {
    if (this.imc < 18.5) {
      return this.composicion = "Peso inferior al normal";
    } else if (this.imc >= 18.5 && this.imc <= 24.9) {
      return this.composicion = "Normal";
    } else if (this.imc >= 25.0 && this.imc <= 29.9) {
      return this.composicion = "Peso superior al normal";
    } else if (this.imc >= 30) {
      return this.composicion = "Obesidad";
    } else {
      return "error";
    }
  }
  muestra() {
    if (this.eligeSistema()) {
      return this.mensaje = `Hola ${this.nombre}, su sistema de medida es ${this.sistema}, tiene de peso:${this.peso} y de altura ${this.altura}, un IMC de ${this.calculoImc()} y por tanto usted tiene un IMC ${this.devuelveComposicion()}.`
    } else {
      return this.mensaje ="Seleccione Sistema de medida por favor."
    }
  }
}
