import { Component } from '@angular/core';
import { NavegadorComponent } from '../../components/navegador/navegador.component';
import { CardsComponent } from '../../components/cards/cards.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavegadorComponent, 
            CardsComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
