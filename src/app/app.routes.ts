import { Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { FamiliarComponent } from './components/familiar/familiar.component';
import { InfantilComponent } from './components/infantil/infantil.component';
import { CooperativoComponent } from './components/cooperativo/cooperativo.component';
import { AventuraComponent } from './components/aventura/aventura.component';

export const routes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    {path: 'index', component: IndexComponent},
    {path: 'familiar', component: FamiliarComponent},
    {path: 'infantil', component: InfantilComponent},
    {path: 'cooperativo', component: CooperativoComponent},
    {path: 'aventura', component: AventuraComponent},
];
