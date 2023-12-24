import { Component, OnInit } from '@angular/core';
import { LastCustomerService } from './last-customer.service';
import { CookieUtils } from 'src/app/utils/cookie.utils';

@Component({
  selector: 'app-last-customer',
  templateUrl: './last-customer.component.html',
  styleUrls: ['./last-customer.component.scss'],
  providers: [LastCustomerService]
})
export class LastCustomerComponent implements OnInit {

  constructor(protected lcs: LastCustomerService) { }
  users = [
    {
      avatar: 'assets/img/dashboard/last-user/Avatar.png',
      username: 'Neil Sims',
      email: 'Neil@gmail.com',
      total_buy: '367'
    },
    {
      avatar: 'assets/img/dashboard/last-user/Avatar.png',
      username: 'Neil Sims',
      email: 'Neil@gmail.com',
      total_buy: '367'
    },
    {
      avatar: 'assets/img/dashboard/last-user/Avatar.png',
      username: 'Neil Sims',
      email: 'Neil@gmail.com',
      total_buy: '367'
    },
    {
      avatar: 'assets/img/dashboard/last-user/Avatar.png',
      username: 'Neil Sims',
      email: 'Neil@gmail.com',
      total_buy: '367'
    },
    {
      avatar: 'assets/img/dashboard/last-user/Avatar.png',
      username: 'Neil Sims',
      email: 'Neil@gmail.com',
      total_buy: '367'
    },
    {
      avatar: 'assets/img/dashboard/last-user/Avatar.png',
      username: 'Neil Sims',
      email: 'Neil@gmail.com',
      total_buy: '367'
    },
  ];

  ngOnInit(): void {
    let admin_id = CookieUtils.getCookie('admin_id');
    if (!admin_id) return;
    this.lcs.getAllUser(admin_id).subscribe(users => this.users = users);
  }

  onLoadAvatarError(event: ErrorEvent): void {
    const element = event.target as HTMLImageElement;
    element.src = 'assets/img/dashboard/last-user/Avatar.png';
  }

}
