import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IVehicle } from 'src/app/models/IVehicle';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss'],
})
export class AddVehicleComponent implements OnInit {
  public loading: boolean = false;
  public vehicle: IVehicle = {} as IVehicle;
  public errorMessage: string | null = null;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {}

  public addSubmit() {
    this.apiService.createVehicle(this.vehicle).subscribe(
      (data) => {
        this.router.navigate(['dashboard/registered-vehicle']).then();
      },
      (error) => {
        this.errorMessage = error;
        this.router.navigate(['dashboard/add-vehicle']).then();
      }
    );
  }
}
