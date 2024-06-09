import { Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { FamiliarComponent } from './components/familiar/familiar.component';

export const routes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    {path: 'index', component: IndexComponent},
    {path: 'familiar', component: FamiliarComponent}
];
