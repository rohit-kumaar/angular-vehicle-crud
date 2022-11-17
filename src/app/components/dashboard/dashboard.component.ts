import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { EmployeeModel } from './dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  formValue!: FormGroup;
  employeeData!: any;
  showAddBtn!: boolean;
  showUpdateBtn!: boolean;
  employeeModelObject: EmployeeModel = new EmployeeModel();
  constructor(private formbuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      salary: [''],
    });

    this.getAllEmployee();
  }

  // add new data
  postEmployeeDetails() {
    this.employeeModelObject.firstName = this.formValue.value.firstName;
    this.employeeModelObject.lastName = this.formValue.value.lastName;
    this.employeeModelObject.email = this.formValue.value.email;
    this.employeeModelObject.mobile = this.formValue.value.mobile;
    this.employeeModelObject.salary = this.formValue.value.salary;

    this.api.postEmployee(this.employeeModelObject).subscribe(
      (res) => {
        console.log(res);
        alert('Emp added successfully');

        // close the modal after form are add
        let ref = document.getElementById('cancel');
        ref?.click();

        // reset form field
        this.formValue.reset();

        // new data is update in DOM
        this.getAllEmployee();
      },
      (err) => {
        alert(err + 'Something want wrong');
      }
    );
  }

  // get all data
  getAllEmployee() {
    this.api.getEmployee(this.employeeModelObject).subscribe((res) => {
      this.employeeData = res;
    });
  }

  // delete existing data from list
  deleteEmployee(item: any) {
    this.api.deleteEmployee(item.id).subscribe((res) => {
      alert('Employee Data is deleted');

      // when data is deleted DOM will be update automatically
      this.getAllEmployee();
    });
  }

  // set existing data when i click edit btn
  onEdit(item: any) {
    this.showAddBtn = false;
    this.showUpdateBtn = true;
    this.employeeModelObject.id = item.id;
    this.formValue.controls['firstName'].setValue(item.firstName);
    this.formValue.controls['lastName'].setValue(item.lastName);
    this.formValue.controls['email'].setValue(item.email);
    this.formValue.controls['mobile'].setValue(item.mobile);
    this.formValue.controls['salary'].setValue(item.salary);
  }

  // update the data
  updateEmployeeDetails() {
    this.employeeModelObject.firstName = this.formValue.value.firstName;
    this.employeeModelObject.lastName = this.formValue.value.lastName;
    this.employeeModelObject.email = this.formValue.value.email;
    this.employeeModelObject.mobile = this.formValue.value.mobile;
    this.employeeModelObject.salary = this.formValue.value.salary;

    this.api
      .updateEmployee(this.employeeModelObject, this.employeeModelObject.id)
      .subscribe((res) => {
        alert('Data will be updated');
        // close the modal after form are add
        let ref = document.getElementById('cancel');
        ref?.click();

        // reset form field
        this.formValue.reset();

        // new data is update in DOM
        this.getAllEmployee();
      });
  }

  // remove update btn or add btn
  clickAddEmployee() {
    this.formValue.reset();
    this.showAddBtn = true;
    this.showUpdateBtn = false;
  }
}
