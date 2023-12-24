import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { CookieUtils } from 'src/app/utils/cookie.utils';
import { DashBoardService } from './dashboard.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(protected afs: AngularFireStorage, protected dbs: DashBoardService) {}

  isShowDashboard: boolean = false;
  isShowDialogLogin: boolean = false;

  isPageProducts: boolean = false;

  protected subs = new SubSink();

  ngOnInit(): void {
    this.subs.add(this.dbs.isChangePageProduct$.subscribe(state => {
      if (state === 'product') this.isPageProducts = true;
      else this.isPageProducts = false;
    }));

    let admin_id = CookieUtils.getCookie('admin_id');
    if (!admin_id) {
      this.isShowDialogLogin = true;
      return;
    }
    this.isShowDashboard = true;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  async changeEventUploadImage(event: Event) {
    const input_element = event.target as HTMLInputElement;
    if (!input_element) return;
    if (!input_element.files) return;
    const file = input_element.files[0];
    if (!file) return;
    const test = await this.afs.upload("files/"+file.name, file);
    const url = await test.ref.getDownloadURL();
    console.log(url);
  }

  clickEventCloseLoginPopup(): void {
    this.isShowDialogLogin = false;
    this.isShowDashboard = true;
  }

}
