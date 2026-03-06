import { Routes } from '@angular/router';
import { Home } from '../comps/home/home';
import { PropertyBinding } from '../databinding/property/property';
import { EventBinding } from '../databinding/event/event';
import { TwoWay } from '../databinding/two-way/two-way';
import { Attribute } from '../databinding/attribute/attribute';
import { Class } from '../databinding/class/class';
import { Style } from '../databinding/style/style';
import { Interpolation } from '../databinding/interpolation/interpolation';
import { ProductsComponent } from './models/products/products';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'interpolation', component: Interpolation },
    { path: 'property-binding', component: PropertyBinding },
    { path: 'event', component: EventBinding },
    { path: 'two-way', component: TwoWay },
    { path: 'attribute', component: Attribute },
    { path: 'products', component: ProductsComponent },
    { path: 'class', component: Class },
    { path: 'style', component: Style },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
