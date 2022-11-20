import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IVehicle } from 'src/app/models/IVehicle';
import { ApiService } from 'src/app/service/api.service';
import { VehicleModel } from '../dashboard/dashboard.model';

@Component({
  selector: 'app-registered-vehicle',
  templateUrl: './registered-vehicle.component.html',
  styleUrls: ['./registered-vehicle.component.scss'],
})
export class RegisteredVehicleComponent implements OnInit {
  public loading: boolean = false;
  public vehicles: IVehicle[] = [];
  public errorMessage: string | null = null;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.loading = true;
    this.apiService.getAllVehicle().subscribe(
      (data) => {
        this.vehicles = data;
        this.loading = false;
      },
      (error) => {
        this.errorMessage = error;
        this.loading = false;
      }
    );
  }
}
