import { NgModule, Component, Directive } from '@angular/core';
import { Player } from './player';
import { MyNavComponent } from './my-nav/my-nav.component';
import { CapHoldersComponent } from './cap-holders/cap-holders.component';
import { PlayerListComponent } from './player-list/player-list.component';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'; 

@NgModule({
  declarations:[
    PlayerListComponent,
  ]
})


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  data;
  players;
  
  constructor(private http:Http){
    this.data = this.http.get('http://127.0.0.1/Project02/public/index.php').map(
      //this.data = this.http.get('playerlist.json').map(
      (res) => res.json()
      )
                .subscribe(
                  (data)=>this.players=data
                );
  }
}

//var PLAYER: Player [] = [];
