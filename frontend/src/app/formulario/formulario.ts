import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {

  formulario: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {

    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  enviarFormulario() {

    if (this.formulario.valid) {
      console.log('Enviando...', this.formulario.value);
      this.http.post('http://localhost:3000/auth/signup', this.formulario.value).subscribe({
        next: (response: any) => {
          console.log('Respuesta del servidor', response);
          alert('Formulario enviado y usuario registrado');
        },
        error: (error: any) => {
          console.error('Error al registrar usuario', error);
          alert('Error al enviar el formulario');
        }
      });
    } else {
      alert('Por favor, completa correctamente el formulario');
    }

  }

}