import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { VehicleModel } from '../dashboard/dashboard.model';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {

  formValue!: FormGroup;
  employeeData!: any;
  showAddBtn!: boolean;
  showUpdateBtn!: boolean;
  vehicleModelObject: VehicleModel = new VehicleModel();
  constructor(private formbuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      office: [''],
      number: [''],
      city: [''],
      state: [''],
      phone: [''],
      email: [''],
      address: [''],
    });

    this.getAllEmployee();
  }

  // add new data
  postEmployeeDetails() {
    this.vehicleModelObject.office = this.formValue.value.office;
    this.vehicleModelObject.number = this.formValue.value.number;
    this.vehicleModelObject.city = this.formValue.value.city;
    this.vehicleModelObject.state = this.formValue.value.state;
    this.vehicleModelObject.phone = this.formValue.value.phone;
    this.vehicleModelObject.email = this.formValue.value.email;
    this.vehicleModelObject.address = this.formValue.value.address;

    this.api.postEmployee(this.vehicleModelObject).subscribe(
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
    this.api.getEmployee(this.vehicleModelObject).subscribe((res) => {
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
    this.vehicleModelObject.id = item.id;
    this.formValue.controls['office'].setValue(item.office);
    this.formValue.controls['number'].setValue(item.number);
    this.formValue.controls['city'].setValue(item.city);
    this.formValue.controls['state'].setValue(item.state);
    this.formValue.controls['phone'].setValue(item.phone);
    this.formValue.controls['email'].setValue(item.email);
    this.formValue.controls['address'].setValue(item.address);
  }

  // update the data
  updateEmployeeDetails() {
    this.vehicleModelObject.office = this.formValue.value.office;
    this.vehicleModelObject.number = this.formValue.value.number;
    this.vehicleModelObject.city = this.formValue.value.city;
    this.vehicleModelObject.state = this.formValue.value.state;
    this.vehicleModelObject.phone = this.formValue.value.phone;
    this.vehicleModelObject.email = this.formValue.value.email;
    this.vehicleModelObject.address = this.formValue.value.address;

    this.api
      .updateEmployee(this.vehicleModelObject, this.vehicleModelObject.id)
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
