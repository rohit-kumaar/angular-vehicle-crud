import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IVehicle } from 'src/app/models/IVehicle';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  public loading: boolean = false;
  public vehicleId: string | null = null;
  public vehicle: IVehicle = {} as IVehicle;
  public errorMessage: string | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loading = false;
    this.activatedRoute.paramMap.subscribe((param) => {
      this.vehicleId = param.get('vehicleId');
    });

    if (this.vehicleId) {
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

  public submitUpdate() {
    if (this.vehicleId) {
      this.apiService.updateVehicle(this.vehicle, this.vehicleId).subscribe(
        (data) => {
          this.router.navigate(['dashboard/registered-vehicle']).then();
        },
        (error) => {
          this.errorMessage = error;
          this.router.navigate([`dashboard/edit/${this.vehicleId}`]).then();
        }
      );
    }
  }
}
