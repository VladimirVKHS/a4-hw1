import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../common/services/data/data.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-element-left',
  templateUrl: './element-left.component.html',
  styleUrls: ['./element-left.component.css']
})
export class ElementLeftComponent implements OnInit, OnDestroy {

  public filter: ResortType | void = null;

  public resortTypes: ResortType[];

  public resorts$$: BehaviorSubject<Resort[]>;

  public selected: Resort = null;

  private _subscriptions: Subscription[] = [];

  constructor(
      private _dataService: DataService
  ) { }

  ngOnInit() {
    this.resortTypes = this._dataService.resortTypes();
    this.resorts$$ = this._dataService.resorts$$;
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

  public setFilter(resortType: ResortType) {
    this.filter = resortType;
  }

  public select(resort: Resort) {
    this._dataService.selected$$.next(resort);
  }

}
