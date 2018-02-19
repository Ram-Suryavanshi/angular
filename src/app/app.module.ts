import { HomeComponent } from './home.component';
import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PipesPipe } from './pipes.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { PanelComponent } from './panel/panel.component';
import { DirectiveComponent } from './directive/directive.component';
import { CommonModule } from '@angular/common';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PipesPipe,
    FavouriteComponent,
    PanelComponent,
    DirectiveComponent,
    InputFormatDirective,
    ContactFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule, 
    RouterModule.forRoot([
      // {
      //   path:'',
      //   component:AppComponent
      // },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'panel',
        component:PanelComponent
      },
      {
        path:'directive',
        component:DirectiveComponent
      },
      {
        path:'contact',
        component:ContactFormComponent
      },
      // {
      //   path:'/**',
      //   component:NotFoundComponent
      // },

    ])   
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
