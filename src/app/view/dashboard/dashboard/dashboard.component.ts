import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(protected afs: AngularFireStorage) {}

  ngOnInit(): void {
  }

  async changeEventUploadImage(event: Event) {
    const input_element = event.target as HTMLInputElement;
    if (!input_element) return;
    if (!input_element.files) return;
    const file = input_element.files[0];
    if (!file) return;
    const test = await this.afs.upload("files/"+file.name, file);
    const url = await test.ref.getDownloadURL();
    alert(url);
    console.log(url);
  }

}
