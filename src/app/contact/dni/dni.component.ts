import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dni-input',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent implements OnChanges{


@Input() tipoDNI: String = 'DNI';
formularioDocumento: FormGroup;
variableNueva: String = 'DNI';
  

  constructor(private form: FormBuilder){//Se inyecta la dependencia como parametro 
    this.formularioDocumento = this.form.group({
      dni: ['']
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes?.['tipoDNI'].currentValue)
  }


  hasErrors( controlName: string,errorType: string){
    return this.formularioDocumento.get(controlName)?.hasError(errorType) && this.formularioDocumento.get(controlName)?.touched

  }

}
