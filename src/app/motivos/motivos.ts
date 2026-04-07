import { Component } from '@angular/core';

@Component({
  selector: 'app-motivos',
  imports: [],
  templateUrl: './motivos.html',
  styleUrl: './motivos.css',
})
export class Motivos {

  tituloPrincipal = 'Why Choose Tourz';

diferenciais = [

{
icone:  'assets/images/icone01.png',
titulo: 'Ultimate flexibility',
descricao: 'You are in control, with free cancellation and payment options to satisfy any plan or budget'
},

{
icone: 'assets/images/icone02.png',
titulo: 'Memorable experiences',
descricao: 'Browse and book tours and activities so incredible, you will want to tell your friends'
},

{
icone: 'assets/images/icone03.png',
titulo: 'Quality at our core',
descricao: 'High-quality standards. Millions of reviews. A tourz company.'
},

{
icone: 'assets/images/icone04.png',
titulo: 'Award-winning support',
descricao: 'New price? New plan? No problem. We are here to help, 24/7.'
}

]

}


