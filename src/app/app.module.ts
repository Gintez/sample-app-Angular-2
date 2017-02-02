import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { VisitorsComponent } from './components/visitors/visitors.component';
import { VisitorListComponent } from './components/visitors/visitor-list/visitor-list.component';
import { RezervationsComponent } from './components/rezervations/rezervations.component';
import { RezervationsListComponent } from './components/rezervations/rezervations-list/rezervations-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VisitorsComponent,
    VisitorListComponent,
    RezervationsComponent,
    RezervationsListComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
