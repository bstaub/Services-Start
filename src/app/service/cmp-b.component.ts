import {Component, OnInit} from '@angular/core';
import {LogService} from './log.service';
import {DataService} from './data.service';

@Component({
  selector: 'si-cmp-b',
  template: `
    <div>
      <input type="text" #input>
      <button (click)="onLog(input.value)" class="btn btn-primary">Log</button>
      <button (click)="onStore(input.value)" class="btn btn-primary">Store</button>
    </div>
    <hr>
    <div>
      <button (click)="onGet()" class="btn btn-primary">Refresh Storage</button>
      <h3>Storage</h3>
      <ul>
        <li *ngFor="let item of items">{{item}}</li>
      </ul>
      <h3>Received Value</h3>
      <p>{{value}}</p>
    </div>
  `
})
export class CmpBComponent implements OnInit {
  value = '';
  items: string[] = [];

  constructor(private logger: LogService, private dataService: DataService) {
  }

  onLog(value: string) {
    this.logger.log(value);
  }

  onStore(value: string) {
    this.dataService.addData(value);
  }

  onGet() {
    this.items = this.dataService.getData();
  }


  // reagiere auf Event und setze subcription auf, auf jede subscription möchte ich reagieren.., subcribe hat 3 parameter (alles callbacks)
  // 1. callback, wenn immer neue daten emited werden
  // 2. callback, fehler
  // 3. callback, beedingung, keine weiteren daten
  // ist viel einfacherer Weg zwischen zwei Komponente zu Kommunizieren
  ngOnInit() {
    this.dataService.pushedData.subscribe(
      (data: string) => this.value = data
    );
  }
}
