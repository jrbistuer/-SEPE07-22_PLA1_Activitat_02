import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateService } from './services/canactivate.service';
import { LoginComponent } from './views/login/login.component';
import { PrivateModule } from './views/private/private/private.module';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // { path: 'private', loadChildren: () => PrivateModule, canActivate: [CanactivateService] },
  { path: 'private', loadChildren: () => import('./views/private/private/private.module').then(m => m.PrivateModule) },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
