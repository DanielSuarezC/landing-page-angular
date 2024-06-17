import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit,OnDestroy{

  //Formularios de tipo Plantilla
  // public usuario: any = {
  //   name: '',
  //   email: ''
  // }

  // enviar(){
  //   console.log(this.usuario);
  // }

  //Formularios de tipo reactivo

  /*usuarioActivo: any = {
    nombre: 'Pedro',
    apellido: 'Perez',
    dni:'123445'
  };*/

  formularioContacto: FormGroup;
  tipoDNI: String = 'DNI';
  mostrarDni: boolean = false

  constructor(private form: FormBuilder){//Se inyecta la dependencia como parametro 
    this.formularioContacto = this.form.group({
      nombre: ['',[Validators.required, Validators.minLength(3)]],
      apellido: [''],
      tipoDni: [''],
      email: ['',[Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
    /*this.formularioContacto.valueChanges.subscribe(valor => {
      console.log(valor)
    }) Para suscribir y por ende leer todo lo que le pase al formulario*/
    this.formularioContacto.get('nombre')?.setValue('Juan');
    this.formularioContacto.get('nombre')?.disable();

    this.formularioContacto.get('tipoDni')?.valueChanges.subscribe(value => {
      this.tipoDNI = value;
      this.mostrarDni = value != '';
    })
  }

  ngOnDestroy(): void {
    console.log('se destruyó el componente')
  }



  /*ngOnInit(): void {
    //Se hace para validar si ya un usuario está logueado, no tenga que volver a ingresar su cuenta
    //this.formularioContacto.get('nombre')?.setValue(this.usuarioActivo); En vez de settear los elementos de esta manera, lo podemos hacer con patchvalue
    
    this.formularioContacto.patchValue({
      nombre: this.usuarioActivo.nombre,
      apellido: this.usuarioActivo.apellido,
      dni: this.usuarioActivo.dni,
    })
    this.formularioContacto.get('nombre')?.disable();
    this.formularioContacto.get('apellido')?.disable();
    this.formularioContacto.get('dni')?.disable();
    //Otra forma de establecer validators
    this.formularioContacto.get('apellido')?.setValidators([Validators.required,Validators.minLength(3)])

    //Si queremos quitar validaciones a un campo usamos:
    this.formularioContacto.get('apellido')?.clearValidators();
    this.formularioContacto.get('apellido')?.updateValueAndValidity();

  }*/

  hasErrors( controlName: string,errorType: string){
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched

  }

  enviar(){
    console.log(this.formularioContacto)
  }
}
