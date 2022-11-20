import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  viewVehicle: any;

  constructor(private api: ApiService, private router: Router) {
    // this.api.get().subscribe((data) => {
    //   this.viewVehicle = data;
    //   console.log(this.viewVehicle[2]);
    // });
  }

  ngOnInit(): void {}
}
