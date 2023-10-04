import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms'; 

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  formulario: FormGroup;
  asignaturasValidas: string[] = ['Matemáticas', 'Ciencias', 'Historia', 'Literatura'];

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, this.validarNombre.bind(this)]], 
      email: ['', [Validators.required, Validators.email]],
      asignatura: ['', [Validators.required, this.validarAsignatura.bind(this)]]
    });
  }

  validarNombre(control: AbstractControl) {
    const nombre = control.value;
    if (nombre === 'admin' || nombre === 'root') {
      return { nombreInvalido: true };
    }
    return null;
  }

  validarAsignatura(control: AbstractControl) {
    const asignatura = control.value;
    if (asignatura === '') {
      return { asignaturaObligatoria: true };
    } else if (!this.asignaturasValidas.includes(asignatura)) {
      return { asignaturaInvalida: true, opcionesValidas: this.asignaturasValidas.join(', ') };
    }
    return null;
  }
  
  getErrors(controlName: string) {
    const control = this.formulario.get(controlName);
    return control?.errors ? Object.keys(control.errors) : [];
  }

  onSubmit() {
    if (this.formulario.valid) {
      
      console.log(this.formulario.value);
    }
  }
}


