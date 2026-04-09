import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toursp',
  imports: [CommonModule],
  templateUrl: './toursp.html',
  styleUrl: './toursp.css',
})
export class Toursp {

tituloPrincipal = 'Find Popular Tours';

elementos = [

{

imagem: 'assets/images/destinop01.png',
minidescricao: 'Paris, France',
descricao: 'Centipede Tour - Guided Arizona Desert Tour by ATV',
avaliacoes: '4.8 (243)',
dias: '4 days',
preco: '$189'

},

{

imagem: 'assets/images/destinop02.png',
minidescricao: 'New York, USA',
descricao: 'Molokini and Turtle Town Snorkeling Adventure Aboard',
avaliacoes: '4.8 (243)',
dias: '4 days',
preco: '$225'

},

{

imagem: 'assets/images/destinop03.png',
minidescricao: 'London, UK',
descricao: 'Westminster Walking Tour & Westminster Abbey Entry',
avaliacoes: '4.8 (243)',
dias: '4 days',
preco: '$943'

},

{

imagem: 'assets/images/destinop04.png',
minidescricao: 'New York, USA',
descricao: 'All Inclusive Ultimate Circle Island Day Tour with Lunch ',
avaliacoes: '4.8 (243)',
dias: '4 days',
preco: '$771'

},

{

imagem: 'assets/images/destinop05.png',
minidescricao: 'Paris, France',
descricao: 'Centipede Tour - Guided Arizona Desert Tour by ATV',
avaliacoes: '4.8 (243)',
dias: '4 days',
preco: '$189'

},

{

imagem: 'assets/images/destinop06.png',
minidescricao: 'New York, USA',
descricao: 'Clear Kayak Tour of Shell Key Preserve and Tampa Bay Area',
avaliacoes: '4.8 (243)',
dias: '4 days',
preco: '$225'

},

{

imagem: 'assets/images/destinop07.png',
minidescricao: 'London, UK',
descricao: 'History and Hauntings of Salem Guided Walking Tour',
avaliacoes: '4.8 (243)',
dias: '4 days',
preco: '$943'

},

{

imagem: 'assets/images/destinop08.png',
minidescricao: 'New York, USA',
descricao: 'Mauna Kea Summit Sunset and Stars Free Astro Photos Hilo Kona Waikoloa Pick Up',
avaliacoes: '4.8 (243)',
dias: '4 days',
preco: '$771'

}

]





}

