import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { ReservationsListComponent } from './components/reservations/reservations-list/reservations-list.component';
import { VisitorListComponent } from './components/reservations/visitor-list/visitor-list.component';
import { DataService } from './services/data.service';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReservationsComponent,
    ReservationsListComponent,
    VisitorListComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule
    // FormsModule,
    // HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
