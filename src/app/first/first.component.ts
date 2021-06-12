import { Component, OnInit, ViewChild  } from '@angular/core';

import {  MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/table';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  sNo: number;
  productName: string;
  amount: number;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {sNo: 1, productName: 'T-Shirt', amount: 500, status: 'Available'},
  {sNo: 2, productName: 'Watch', amount: 600, status: 'Available'},
  {sNo: 3, productName: 'Shoe', amount: 500, status: 'Available'},
  {sNo: 4, productName: 'Wallet', amount: 600, status: 'Unavailable'}
];

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  dataSource;
  displayedColumns = [];
  //uncommand below line afer your initial project run
  // @ViewChild(MatSort) sort: MatSort;

  constructor() {   

    this.displayedColumns = ['sNo', 'productName', 'amount', 'status'];
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    //uncommand below line afer your initial project run
    // this.dataSource.sort = this.sort;
   }

  ngOnInit() {
  }

  ngAfterViewInit() {
    //uncommand below line afer your initial project run
    // this.dataSource.sort = this.sort;
  }
}
