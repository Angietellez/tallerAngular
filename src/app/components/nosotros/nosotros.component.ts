import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nosotros",
  templateUrl: "./nosotros.component.html",
  styleUrls: ["./nosotros.component.css"],
})
export class NosotrosComponent implements OnInit {
  
  imagen = [ 'assets/img/oficina.png'];
  imagen2 = [ 'assets/img/hulk.jpg'];
  imagen3 = [ 'assets/img/paseo.png'];
  imagen4 = [ 'assets/img/boom.jpg'];

titulos = {
  titulo1: '¿QUIENES SOMOS?',
  titulo2: '¿QUE NOS HACE ESPECIALES?',
  titulo3: 'TEAM BUILDING',
  titulo4: 'ENVIANOS TU HOJA DE VIDA'
}

  ngOnInit(): void {
  }
}