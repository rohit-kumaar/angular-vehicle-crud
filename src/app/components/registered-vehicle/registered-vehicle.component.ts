import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-registered-vehicle',
  templateUrl: './registered-vehicle.component.html',
  styleUrls: ['./registered-vehicle.component.scss'],
})
export class RegisteredVehicleComponent implements OnInit {
  regdVehicle: any;

  constructor(private api: ApiService, private router: Router) {
    this.api.getEmployee().subscribe((data) => {
      this.regdVehicle = data;
    });
  }

  ngOnInit(): void {}
}
