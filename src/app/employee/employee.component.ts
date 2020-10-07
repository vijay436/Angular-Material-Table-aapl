import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericApiService } from '../shared/generic-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeOverlayComponent } from './employee-overlay/employee-overlay.component';


export interface Employee {
  Data1: string;
  Data2: string;
  Data3: string;
  Data4: string;
  Data5: string;

}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @ViewChild('employeeSort', { static: false }) employeeSort: MatSort;

  tableHeader: any[];
  tblDataList: Employee[];
  parameterName: string;
  list: any;

  employeeDataSource: MatTableDataSource<any> = new MatTableDataSource(Object.assign([], []));
  loadingEmployees: boolean;
  employee$: Subscription;
  dataReturnedText: string;
  employeeCol: string;
  employeeData: Subscription;

  displayedColumns: string[] = [
    'Id', 'Name', 'IsComplete'
  ];

  constructor(private dailog: MatDialog, private genericApiService: GenericApiService<any>) { }

  ngOnInit() {
    this.getEmpData();
  }

  getEmpData() {
    this.employeeDataSource.data = [];
    this.loadingEmployees = true;
    this.employee$ = this.genericApiService.getAll('Employees/EmployeeList').subscribe(
      (res) => {
        this.employeeDataSource.data = res;
        setTimeout(() => {
          this.employeeDataSource.sort = this.employeeSort;
        });
        this.dataReturnedText = (this.employeeDataSource.data.length === 0) ? 'No Records Found.' : '';
        this.loadingEmployees = false;

      },
      (err) => {
        this.loadingEmployees = false;
      }
    );
  }

  employeeSortChange() {
    this.employeeCol = (this.employeeSort.direction !== '') ? this.employeeSort.active : '';
  }

  openEditOverlay(empId: any) {
    this.showEditOverlay(empId.id);
  }

  showEditOverlay(id: number): void {
    this.employeeData = this.genericApiService.getById('Employees/EmpById/', id.toString()).subscribe(
      (res) => {
        setTimeout(() => {
          this.showOverlay(id, res);
        });
      });
  }

  addEmployee(){
    this.showOverlay(0, null);
  }

  showOverlay(id: number, empData: any) {
    let width = 600;

    const dialogRef = this.dailog.open(EmployeeOverlayComponent, {
      width: width + 'px',
      
      disableClose: true,
      data: {
        id: id,
        employeeData: empData,
        overlayTitle: 'Update Employee'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.status === 'success') {
        // To refresh table.
        this.getEmpData();
      }
    });
  }
}











