import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cards = [
    {
      titulo: 'Angular Material',
      subtitulo: 'Componentes Modernos',
      imagem: 'https://via.placeholder.com/400x200',
      descricao: 'Card utilizando Angular Material!!!!!!!',
    },
    {
      titulo: 'Material Angular',
      subtitulo: 'Padrões do Google',
      imagem: 'https://via.placeholder.com/400x200?text=Material+Design',
      descricao: 'Card utilizando Material Angular !!!!!!!',
    },
    {
      titulo: 'ANIMAÇÔES',
      subtitulo: 'Botões e Eventos',
      imagem: 'https://via.placeholder.com/400x200?text=Interatividade',
      descricao: 'Este card mostra como usar eventos e interatividade!',
    },
  ];

  curtir(titulo: string) {
    alert(`Parabens vc clicou em: "${titulo}"`);
  }

  compartilhar(titulo: string) {
    alert(`Você compartilhou "${titulo}"`);
  }
}
