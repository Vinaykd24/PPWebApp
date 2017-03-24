import { Component, Input , OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Player } from '../player';

@Component({
  selector: 'player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  providers: [DataService]
})



export class PlayerListComponent implements OnInit {
  currentPlayer: Player;
  constructor(private _dataService: DataService){
    
  }
  @Input('playerToWatch') playersVar;
 
  viewPlayerInfo(item) {
    this.currentPlayer = item;
    console.log(this.currentPlayer);
     window.location.hash="#";
    window.location.hash="#selectedPlayer";
  }
  
  ngOnInit(){
    this._dataService.fetchData();
  }
}
