import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavegadorComponent } from '../../components/navegador/navegador.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavegadorComponent,
            NgFor],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']  // Corrigido: styleUrl -> styleUrls
})

export class HomeComponent {
  constructor(private router: Router) {}  // ✅ Injeta o Router

  handleSubmit(tipo: 'primary' | 'secondary') {
    if (tipo === 'primary') {
      console.log('Navegar para: Meus eventos');
      // Exemplo: this.router.navigate(['/meus-eventos']);
    } else if (tipo === 'secondary') {
      console.log('Navegar para: Meus ingressos');
      // Exemplo: this.router.navigate(['/meus-ingressos']);
    }
  }
features = [
  {
    icon: 'assets/icons/lista.svg',
    title: 'Gestão de convidados',
    description: 'Você poderá gerir 100% da sua lista ou compartilhar esta tarefa com seu cerimonial.'
  },
  {
    icon: 'assets/icons/qrcode.svg',
    title: 'QR code exclusivo',
    description: 'Cada convidado irá receber um QR Code exclusivo para acessar seu evento.'
  },
  {
    icon: 'assets/icons/facial.svg',
    title: 'Controle facial',
    description: 'Para receber o QR Code o convidado deverá enviar uma selfie que permitirá a confirmação de identidade no dia do evento.'
  },
  {
    icon: 'assets/icons/check.svg',
    title: 'Liberação automática',
    description: 'O sistema reconhece o QR Code e realiza a liberação automaticamente.'
  }
];

  navigate() {
    this.router.navigate(["login"]);
 // ✅ Navega para a rota /login
  }
}
