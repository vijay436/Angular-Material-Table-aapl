import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GenericApiService } from 'src/app/shared/generic-api.service';

@Component({
  selector: 'app-employee-overlay',
  templateUrl: './employee-overlay.component.html',
  styleUrls: ['./employee-overlay.component.css']
})
export class EmployeeOverlayComponent implements OnInit {

  overlayForm: FormGroup;
  overlayTitle: string = 'Add or Update Employee';
  employee: Employee;
  cancelCloseBtnTitle: string = 'Cancel';

  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EmployeeOverlayComponent>,
    private genericApiService: GenericApiService<any>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.overlayForm = this.formBuilder.group({
      Id: [Number],
      Name: ['', [Validators.required ]],
      IsComplete: [Boolean]
    });
  

    this.overlayTitle = this.data.overlayTitle;

    if (this.data.id > 0) {
      this.employee = this.data.employeeData;
      this.overlayForm.patchValue(this.employee);
      this.overlayTitle = 'Update Employee';
      this.cancelCloseBtnTitle = 'Close';
    } else {
      this.employee = new Employee();
      this.overlayTitle = 'Add Employee';
    }
  }

  save(){
    this.employee = this.overlayForm.value;
    if(this.overlayForm.valid){
      if(this.employee.Id > 0){
        this.updateEmployee(this.employee.Id);
      }else{
        this.addEmployee();
      }
    }
  }

  addEmployee(): void{
    let employeeDto = {
      'Id' : this.overlayForm.get('Id').value,
      'Name': this.employee.Name,
      'IsComplete': this.employee.IsComplete
    }
   // this.employee.Id = JSON.parse(this.employee.Id);
    this.genericApiService.post('Employees/Insert', employeeDto).subscribe(
      (res) =>{
        if(res.status === 'success'){
          let retObj = {event : 'Add', status:'success', data: this.employee} 
          this.dialogRef.close(retObj);
         }
      }
    );
  }

  updateEmployee(id: number): void{
    this.genericApiService.post('Employees/Update/'+ id, this.employee).subscribe(
      (res) =>{
        if(res.status === 'success'){
          let retObj = {event : 'Add', status:'success', data: this.employee} 
          this.dialogRef.close(retObj);
        }
      }
    );
  }

  close(){
    this.dialogRef.close({event:'cancel', data:null});
  }

}

export class Employee {
  Id: number = 0;
  Name: string = '';
  IsComplete: boolean = false;
}
