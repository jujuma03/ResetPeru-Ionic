import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { RepositoriesComponent } from './repositories/repositories.component';

import {RepoService} from './repositories/repositories.service.service';

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
