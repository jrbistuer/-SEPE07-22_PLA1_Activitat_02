import { NgModule } from '@angular/core';

import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DetailComponent } from './detail/detail.component';
import { SaludoComponent } from 'src/app/utils/widgets/saludo/saludo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    DetailComponent,
    SaludoComponent
  ],
  imports: [
    PrivateRoutingModule,
    SharedModule.forRoot()
  ]
})
export class PrivateModule { }
