import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { Trabajador } from 'src/app/pag/trabajador.modelo';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  formulario = this.Formulario.group({
    nombre: '',
    apellido: '',
    area: '',
    edad: '',
    salario: null,
  });

  constructor(private Formulario: FormBuilder, private TrabajadorService: TrabajadorService) { }

  ngOnInit(): void {
  }

  guardar() {
    let nuevoTrabajador: Trabajador = {
      nombre: this.formulario.get('nombre')?.value,
      apellido: this.formulario.get('apellido')?.value,
      edad: this.formulario.get('edad')?.value,
      area: this.formulario.get('area')?.value,
      salario: this.formulario.get('salario')?.value,
    };
    this.TrabajadorService.addTrabajador(nuevoTrabajador);
    this.limpiarForm();
  }

  limpiarForm(): void {
    this.formulario.reset();
  }

}
