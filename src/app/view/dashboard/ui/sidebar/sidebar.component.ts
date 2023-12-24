import { Component, OnInit } from '@angular/core';
import { DashBoardService } from '../../dashboard/dashboard.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  constructor(protected dbs: DashBoardService) { }

  ngOnInit(): void {
  }

  clickEventChangePageProduct(): void {
    this.dbs.changePageProduct('product');
  }

}
