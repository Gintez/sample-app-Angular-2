import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RezervationsComponent } from './components/rezervations/rezervations.component';
import { RezervationsListComponent } from './components/rezervations/rezervations-list/rezervations-list.component';
import { VisitorListComponent } from './components/rezervations/visitor-list/visitor-list.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RezervationsComponent,
    RezervationsListComponent,
    VisitorListComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
