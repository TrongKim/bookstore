import { Component, OnInit } from '@angular/core';
import { AlertDynamicService } from './alert-dynamic.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-alert-dynamic',
  templateUrl: './alert-dynamic.component.html',
  styleUrls: ['./alert-dynamic.component.scss']
})
export class AlertDynamicComponent implements OnInit {
  message: string = '';
  title: string = '';
  state: 'success' | 'error' | 'normal' = 'normal';

  isShowAlert: boolean = false;

  protected subs = new SubSink();

  constructor(protected ads: AlertDynamicService) {}

  ngOnInit(): void {
    this.subs.add(this.ads.alert$.subscribe(data => {
      this.isShowAlert = true;
      this.message = data.message;
      this.title = data.title;
      this.state = data.state;

      setTimeout(() => {
        this.isShowAlert = false;
      }, 2000);
    }));
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subs.unsubscribe();
  }

}
