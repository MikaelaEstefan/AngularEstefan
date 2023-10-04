import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms'; // Añade AbstractControl

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, this.validarNombre.bind(this)]], // Usa .bind(this) para mantener el contexto
      email: ['', [Validators.required, Validators.email]]
    });
  }

  validarNombre(control: AbstractControl) { // Especifica el tipo de control
    const nombre = control.value;
    if (nombre === 'admin' || nombre === 'root') {
      return { nombreInvalido: true };
    }
    return null;
  }

  // Función para obtener los errores de validación
  getErrors(controlName: string) {
    const control = this.formulario.get(controlName);
    return control?.errors ? Object.keys(control.errors) : [];
  }

  onSubmit() {
    if (this.formulario.valid) {
      // Procesa el formulario aquí
      console.log(this.formulario.value);
    }
  }
}


