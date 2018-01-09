import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.css']
})
export class CurrentTimeComponent implements OnInit {

  @Input()
  url: string;

  private currentTime: string = '';

  constructor() { }

  ngOnInit() {
    this.updateTime();
  }

  private updateTime(): void {
    setInterval(() => {
      let now = new Date();
      this.currentTime = `${now.toLocaleDateString()} - ${now.toLocaleTimeString()}`;
    }, 1000);
  }

}
