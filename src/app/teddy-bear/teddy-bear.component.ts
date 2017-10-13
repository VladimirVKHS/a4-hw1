import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../common/services/data/data.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-teddy-bear',
  templateUrl: './teddy-bear.component.html',
  styleUrls: ['./teddy-bear.component.css']
})
export class TeddyBearComponent implements OnInit, OnDestroy {

  public selected: Resort = null;

  private _subscriptions: Subscription[] = [];

  constructor(
      private _dataService: DataService
  ) { }

  ngOnInit() {
    const sub = this._dataService.selected$$
        .subscribe((resort: Resort) => {
          this.selected = resort;
        });
    this._subscriptions.push(sub);
  }

  ngOnDestroy() {
    this._subscriptions
        .forEach(s => s.unsubscribe());
  }

}
