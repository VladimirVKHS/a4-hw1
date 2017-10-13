import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-activity-row',
  templateUrl: './activity-row.component.html',
  styleUrls: ['./activity-row.component.css']
})
export class ActivityRowComponent implements OnInit {

  @Input()
  public resort: Resort;

  constructor() { }

  ngOnInit() {
  }

}
