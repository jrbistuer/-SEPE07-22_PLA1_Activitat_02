import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateService } from './services/canactivate.service';
import { ResolveDataService } from './services/resolve-data.service';
import { LoginComponent } from './views/login/login.component';
import { PrivateModule } from './views/private/private.module';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // { path: 'private', loadChildren: () => PrivateModule, canActivate: [CanactivateService] },
  { path: 'private', loadChildren: () => import('./views/private/private.module').then(m => m.PrivateModule),
      canActivate: [CanactivateService]
    },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
