import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DetailComponent } from './detail/detail.component';
import { ResolveDataService } from 'src/app/services/resolve-data.service';

const routes: Routes = [
  { path: '', children: [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent,
      resolve: {
        vacances: ResolveDataService
      }
    },
    { path: 'about', component: AboutUsComponent },
    { path: 'detail/:id', component: DetailComponent },
    { path: '**', redirectTo: '/home' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
