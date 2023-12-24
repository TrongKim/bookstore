import { Component, OnInit } from '@angular/core';
import { DashBoardService } from '../../dashboard/dashboard.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  constructor(protected dbs: DashBoardService) { }

  ngOnInit(): void {
  }

  clickEventChangeHomePage(): void {
    this.dbs.changePageProduct('home');
  }

}
