import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navi } from '../comps/navi/navi';
import { Home } from '../comps/home/home';
import { EventBinding } from '../databinding/event/event';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navi, Home, EventBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MidtermsApp');
}
