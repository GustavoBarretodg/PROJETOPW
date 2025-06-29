import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, FormRecord, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

interface CadastroEventoForm {
  nomeEvento: FormControl,
  tipoEvento: FormControl,
  data: FormControl,
  horarioIncio: FormControl,
  horarioFim: FormControl,
  descricaoEvento: FormControl,
  quantidadePesosas: FormControl,
}

@Component({
  selector: 'app-cadastro-evento',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [
    LoginService
  ],
  templateUrl: './cadastro-evento.component.html',
  styleUrl: './cadastro-evento.component.scss'
})
export class CadastroEventoComponent {
  cadastroeventoForm!: FormGroup<CadastroEventoForm>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ){
    this.cadastroeventoForm = new FormGroup({
  nomeEvento: new FormControl('', [Validators.required, Validators.minLength(3)]),
  tipoEvento: new FormControl('', [Validators.required]),
  data: new FormControl('', [Validators.required]),
  horarioIncio: new FormControl('', [Validators.required]),
  horarioFim: new FormControl('', [Validators.required]),
  descricaoEvento: new FormControl('', [Validators.required, Validators.minLength(10)]),
  quantidadePesosas: new FormControl('', [Validators.required]),
});

  }

  submit(){
    this.loginService.login(this.cadastroeventoForm.value.nomeEvento, this.cadastroeventoForm.value.tipoEvento).subscribe({
      next: () => this.toastService.success("Login feito com sucesso!"),
      error: () => this.toastService.error("Erro inesperado! Tente novamente mais tarde")
    })
  }

  navigate(){
    this.router.navigate(["login"])
  }
}
