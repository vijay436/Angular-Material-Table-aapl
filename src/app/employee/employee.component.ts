import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface AddressBook {
  name: string;
  phoneNumber: number;
}

const addrBook1: AddressBook[] = [
  { name: 'Bob', phoneNumber: 9742844473 },
  { name: 'Mary', phoneNumber: 9000522688 },
  { name: 'Jane', phoneNumber: 9700455898 }
];

const addrBook2: AddressBook[] = [
  { name: 'Mary', phoneNumber: 9000522688 },
  { name: 'John', phoneNumber: 9742844473 },
  { name: 'Jane', phoneNumber: 9700455898 }
];

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, AfterViewInit {
  addrBook1Col: string;
  addrBook2Col: string;
  displayedColumns: string[] = ['name', 'phoneNumber'];
  addrBook1DataSource = new MatTableDataSource(addrBook1);
  addrBook2DataSource: MatTableDataSource<any> = new MatTableDataSource(Object.assign([], []));

  @ViewChild('addrBook1Sort', { static: false }) addrBook1Sort: MatSort;
  @ViewChild('addrBook2Sort', { static: false }) addrBook2Sort: MatSort;

  ngOnInit() {
    this.getAddrBook2();
  }

  ngAfterViewInit() {
    this.addrBook1DataSource.sort = this.addrBook1Sort;
    this.addrBook2DataSource.sort = this.addrBook2Sort;
  }

  getAddrBook2() {
    var unique1 = [];
    for (var i = 0; i < addrBook1.length; i++) {
      var found = false;

      for (var j = 0; j < addrBook2.length; j++) { 
        if (addrBook1[i].name === addrBook2[j].name) {
          found = true;
          break;
        }
      }
      if (found == false) {
        unique1.push(addrBook1[i]);
      }
    }

    var unique2 = [];
    for (var i = 0; i < addrBook2.length; i++) {
      var found = false;

      for (var j = 0; j < addrBook1.length; j++) { 
        if (addrBook2[i].name === addrBook1[j].name) {
          found = true;
          break;
        }
      }
      if (found == false) {
        unique2.push(addrBook2[i]);
      }
    }

    const unique = unique1.concat(unique2);

    this.addrBook2DataSource = new MatTableDataSource(unique);
  }


  addrBook1SortChange() {
    this.addrBook1Col = (this.addrBook1Sort.direction !== '') ? this.addrBook1Sort.active : '';
  }
  addrBook2SortChange() {
    this.addrBook2Col = (this.addrBook2Sort.direction !== '') ? this.addrBook2Sort.active : '';
  }
}











