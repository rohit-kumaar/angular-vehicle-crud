import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IVehicle } from 'src/app/models/IVehicle';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  public loading: boolean = false;
  public vehicleId: string | null = null;
  public vehicle: IVehicle = {} as IVehicle;
  public errorMessage: string | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.vehicleId = param.get('vehicleId');
    });

    if (this.vehicleId) {
      this.loading = true;
      this.apiService.getVehicle(this.vehicleId).subscribe(
        (data) => {
          this.vehicle = data;
          this.loading = false;
        },
        (error) => {
          this.errorMessage = error;
          this.loading = false;
        }
      );
    }
  }

  public isNotEmpty() {
    return Object.keys(this.vehicle).length > 0;
  }
}
