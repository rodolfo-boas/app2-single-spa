import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Exemplo1Component } from './exemplo1/exemplo1.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { environment } from 'src/environments/environment';


const ROUTES_MICRO_APP: Routes = [
  {
    path: '',
    component: Exemplo1Component
  },
  {
    path: '**',
    component: EmptyRouteComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    Exemplo1Component,
    EmptyRouteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES_MICRO_APP)
  ],
  providers: [    {
    provide: APP_BASE_HREF,
    useValue: environment.appBaseHref // tem que ser a mesma route do base-app
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
