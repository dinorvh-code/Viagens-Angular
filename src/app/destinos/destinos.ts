import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-destinos',
  imports: [CommonModule],
  templateUrl: './destinos.html',
  styleUrl: './destinos.css',
})
export class Destinos {

tituloPrincipal = 'Trending destinations';

elementos = [

{

imagem: 'assets/images/destino01.png' ,
titulo: 'París',
descricao: '+100 Tourz'

},

{

imagem: 'assets/images/destino02.png' ,
titulo: 'París',
descricao: '+100 Tourz'

},

{

imagem: 'assets/images/destino03.png' ,
titulo: 'París',
descricao: '+100 Tourz'

},

{

imagem: 'assets/images/destino04.png' ,
titulo: 'París',
descricao: '+100 Tourz'

},

{

imagem: 'assets/images/destino05.png' ,
titulo: 'París',
descricao: '+100 Tourz'

},

{

imagem: 'assets/images/destino06.png' ,
titulo: 'París',
descricao: '+100 Tourz'

},

{

imagem: 'assets/images/destino07.png' ,
titulo: 'París',
descricao: '+100 Tourz'

},

{

imagem: 'assets/images/destino08.png' ,
titulo: 'París',
descricao: '+100 Tourz'

}



]




}
