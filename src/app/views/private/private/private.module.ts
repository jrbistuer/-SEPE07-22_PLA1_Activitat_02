import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { SaludoComponent } from 'src/app/utils/widgets/saludo/saludo.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent,
    AboutUsComponent,
    SaludoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PrivateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule
  ]
})
export class PrivateModule { }
