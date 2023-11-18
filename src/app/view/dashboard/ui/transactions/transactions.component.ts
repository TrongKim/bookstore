import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  transactions = [
    {
      name: 'Bonnie Green',
      date_time: 'Apr 23 ,2021',
      amount: 2500,
      status: 'Completed'
    },
    {
      name: 'Bonnie Green',
      date_time: 'Apr 23 ,2021',
      amount: -500,
      status: 'Completed'
    },
    {
      name: 'Bonnie Green',
      date_time: 'Apr 23 ,2021',
      amount: 2500,
      status: 'In progress'
    },
    {
      name: 'Bonnie Green',
      date_time: 'Apr 23 ,2021',
      amount: 2500,
      status: 'In progress'
    },
    {
      name: 'Bonnie Green',
      date_time: 'Apr 23 ,2021',
      amount: 2500,
      status: 'Cancelled'
    },
  ];

  ngOnInit(): void {
  }

}
