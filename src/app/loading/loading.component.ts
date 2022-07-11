import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  constructor() {}

  progress: number = 0;
  increment: number = 5;
  connected: boolean = false;

  ngOnInit(): void {
    setInterval(() => this.manageProgress(), 4000);
  }

  manageProgress() {
    if (this.progress === 100) {
      this.connected = true;
    } else {
      this.progress = this.progress + this.increment;
    }
  }
}
