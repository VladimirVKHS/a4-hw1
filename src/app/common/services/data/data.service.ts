import {Injectable} from '@angular/core';
import { resorts, resortTypes } from './example-data';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class DataService {

  public selected$$: BehaviorSubject<Resort>;
  public resorts$$: BehaviorSubject<Resort[]>;

  constructor() {
    this.resorts$$ = new BehaviorSubject<Resort[]>(resorts);
    this.selected$$ = new BehaviorSubject<Resort>(resorts[0]);
  }

  public resortTypes() {
    return resortTypes;
  }

}
