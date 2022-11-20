import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss'],
})
export class AddVehicleComponent implements OnInit {
  constructor(private api: ApiService, private router: Router) {}

  // addVehicleForm = new FormGroup({
  //   office: new FormControl(''),
  //   number: new FormControl(''),
  //   city: new FormControl(''),
  //   state: new FormControl(''),
  //   phone: new FormControl(''),
  //   email: new FormControl(''),
  //   address: new FormControl(''),
  // });

  ngOnInit(): void {}

  // addVehicle() {
  //   this.api.post(this.addVehicleForm.value).subscribe(
  //     () => {
  //       alert('Add Vehicle successfully');
  //       this.router.navigate(['dashboard/registered-vehicle']);
  //     },
  //     (err) => {
  //       alert(err + 'Something want wrong');
  //     }
  //   );
  // }
}
