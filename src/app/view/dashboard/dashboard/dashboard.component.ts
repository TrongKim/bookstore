import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  ngOnInit(): void {
  }

  changeEventUploadImage(event: Event): void {
    const input_element = event.target as HTMLInputElement;
    if (!input_element) return;
    if (!input_element.files) return;
    const file = input_element.files[0];
    if (!file) return;
    console.log(file);
  }

}
