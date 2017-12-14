import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './components/Home/app.component';
import { About } from "./components/About/about";
import { Home } from "./components/HomeOne/home";

const appRoutes: Routes = [
  { path: 'about', component: About },
  { path: 'home', component: Home },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    About,
    Home
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }