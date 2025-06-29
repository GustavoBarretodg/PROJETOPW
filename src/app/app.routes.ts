import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CadastroEventoComponent } from './pages/cadastro-evento/cadastro-evento.component';
import { MeuperfilComponent } from './pages/meu-perfil/meu-perfil.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'cadastroEvento',
    component: CadastroEventoComponent
  },
  {
    path:'meuperfil',
    component: MeuperfilComponent
  },
  {
    path: '**',
    redirectTo: 'home'  // Qualquer rota inválida -> home
  }
];
