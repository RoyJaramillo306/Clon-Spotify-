import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { ValidatorsService } from '@modules/auth/services/validators.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public obser!: Subscription;
  public errorMsg!: string;
  private token!: string;

  get emailErrorMsg():string{
    
    const errors = this.formulario.get('email')?.errors;

    if (errors?.required) {
      return 'El campo es obligatorio';
    } else if (errors?.pattern) {
      return 'Formato de correo invalido';
    }

    return '';
  
  }

  get passErrorMsg():string{
    
    const errors = this.formulario.get('password')?.errors;
    const longitud = this.formulario.get('password')?.value.length;

    if (errors?.required) {
      return 'El campo es obligatorio';
    } else if (longitud < 6) {
      return 'La contraseña debe ser mayor a 6 caracteres';
    }

    return '';
  
  }

  public formulario: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor( private formBuilder: FormBuilder, private validatorsService: ValidatorsService, 
               private authService: AuthService, private router: Router ){}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      this.obser.unsubscribe();
  }

  validar(campo:string){
    return this.formulario.get(campo)?.invalid && this.formulario.get(campo)?.touched;
  }

  enviarData(){
    const data = this.formulario.value;
    this.obser = this.authService.enviarRegistro(data)
                  .subscribe( resp => {
                    this.token = resp.tokenSession;
                    this.authService.session(this.token);
                    if (resp === 409){
                      setTimeout(() => {
                        this.errorMsg = '';
                      }, 2500);
                      this.errorMsg = 'Email o contraseña no válidos!';
                    }
                    this.router.navigate(['/canciones']);
                  })
  }

}
