import { Component, Input, OnInit } from '@angular/core';
import { PurpleCapPipe } from '../purple-cap.pipe';
import { DataService } from '../data.service';
import { Player } from '../player';


@Component({
  selector: 'app-cap-holders',
  templateUrl: './cap-holders.component.html',
  styleUrls: ['./cap-holders.component.css'],
  providers: [DataService]
})

export class CapHoldersComponent implements OnInit {
  currentPlayer: Player;
  constructor(private _dataService: DataService) {

   }
  
  @Input('playerToWatch') playersVar;
 
  viewPlayerInfo(item) {
    this.currentPlayer = item;
    console.log(this.currentPlayer);
     window.location.hash="#";
    window.location.hash="#selectedPlayer";
  }

  ngOnInit() {
     this._dataService.fetchData();
  }

}
