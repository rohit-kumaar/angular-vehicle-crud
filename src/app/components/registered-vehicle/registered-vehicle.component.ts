import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { VehicleModel } from '../dashboard/dashboard.model';

@Component({
  selector: 'app-registered-vehicle',
  templateUrl: './registered-vehicle.component.html',
  styleUrls: ['./registered-vehicle.component.scss'],
})
export class RegisteredVehicleComponent implements OnInit {
  // regdVehicle: any;

  constructor(private api: ApiService, private router: Router) {
    // this.api.get().subscribe((data) => {
    //   this.regdVehicle = data;
    // });
  }

  // update after delete functionality
  // getVehicle() {
  //   this.api.get().subscribe((data) => {
  //     this.regdVehicle = data;
  //   });
  // }

  // deleteDetails(id: any) {
  //   this.api.delete(id).subscribe(() => {
  //     this.getVehicle();
  //   });
  // }

  ngOnInit(): void {}
}
