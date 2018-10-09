import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(
      [
        { path: 'home', component: HomeComponent},
        { path: 'about', component: AboutComponent},
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
