import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '../../../node_modules/@angular/router/types/_router_module-chunk';

@Component({
  selector: 'app-navi',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navi.html',
  styleUrl: './navi.css',
})
export class Navi {}
