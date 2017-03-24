import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { CapHoldersComponent } from './cap-holders/cap-holders.component';
import { PurpleCapPipe } from './purple-cap.pipe';
import { OrangeCapPipe } from './orange-cap.pipe';
import { GreenCapPipe } from './green-cap.pipe';
import { routing } from './app.routing';
import { DataService } from './data.service'

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    PlayerListComponent,
    CapHoldersComponent,
    PurpleCapPipe,
    OrangeCapPipe,
    GreenCapPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
