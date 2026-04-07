import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Menu} from './menu/menu';
import {Banner} from './banner/banner';
import { Motivos } from './motivos/motivos';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, Banner, Motivos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projectVA');
}
