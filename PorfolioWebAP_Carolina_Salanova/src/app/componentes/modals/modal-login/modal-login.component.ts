import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';//Esto es para hacer reactivos los formularios en Angular

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {
  form: any = FormGroup;

  constructor(private formBuilder: FormBuilder) {
    ///Creamos el grupo de controles para el formulario de login
    this.form = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
    })
  }

  ngOnInit(): void {
  }

  get Password() {
    return this.form.get("password");
  }

  get PasswordValid() {
    return this.Password?.touched && !this.Password?.valid;
  }

  get Mail() {
    return this.form.get("email");
  }

  get MailValid() {
    return this.Mail?.touched && !this.Mail?.valid
  }

  onEnviar(event: Event) {
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault;

    if (this.form.valid) {
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    } else {
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched();
      alert("Salío mal, ¡No se pudo enviar!");
    }

  }

}