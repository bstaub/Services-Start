import {Component} from '@angular/core';
import {LogService} from './log.service';
import {DataService} from './data.service';

@Component({
  selector: 'si-cmp-a',
  template: `
    <div>
      <input type="text" #input>
      <button (click)="onLog(input.value)" class="btn btn-primary">Log</button>
      <button (click)="onStore(input.value)" class="btn btn-primary">Store</button>
      <button (click)="onSend(input.value)" class="btn btn-primary">Send</button>
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
export class CmpAComponent {
  value = '';
  items: string[] = [];

  constructor(private logger: LogService, private dataService: DataService) {}

  onLog(value: string) {
    this.logger.log(value);
  }

  onStore(value: string) {
    this.dataService.addData(value);
  }

  onGet() {
    this.items = this.dataService.getData();
  }

  onSend(value: string) {
    this.dataService.pushData(value);  // ruft die Methode im Service auf die das Event mit value emited
  }
}
