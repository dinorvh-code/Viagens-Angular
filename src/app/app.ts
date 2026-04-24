import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Menu} from './menu/menu';
import {Banner} from './banner/banner';
import { Motivos } from './motivos/motivos';
import { Destinos } from './destinos/destinos';
import { Toursp } from './toursp/toursp';
import { Caixote } from './caixote/caixote';
import { Habitosp } from './habitosp/habitosp';
import { Tendencias } from './tendencias/tendencias';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, Banner, Motivos, Destinos, Toursp, Caixote, Habitosp, Tendencias,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projectVA');
}
