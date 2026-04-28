import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artigos',
  imports: [CommonModule],
  templateUrl: './artigos.html',
  styleUrl: './artigos.css',
})

export class Artigos {

 
lista = [

{
imagem: '/assets/images/artigo01.png',
data: 'April 06 2023',
redator: 'By Ali Tufan',
descricao: 'Kenya vs Tanzania Safari: The Better African Safari Experience'
},

{
imagem: '/assets/images/artigo02.png',
data: 'April 06 2023',
redator: 'By Emily Johnson',
descricao: 'Exploring the Serengeti: A Wildlife Adventure'
},

{
imagem: '/assets/images/artigo03.png',
data: 'April 06 2023',
redator: 'By Maxwell Rhodes',
descricao: 'Into the Wild: An Unforgettable Safari Journey'

}

]  

}
