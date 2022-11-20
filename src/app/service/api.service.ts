import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { IVehicle } from '../models/IVehicle';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private serviceURL: string = `http://localhost:3000`; // json-server url

  constructor(private httpClient: HttpClient) {}

  //  GET All Vehicle
  public getAllVehicle(): Observable<IVehicle[]> {
    let dataURL: string = `${this.serviceURL}/registered-vehicle`;
    return this.httpClient.get<IVehicle[]>(dataURL).pipe(catchError(this.handleError));
  }

  // GET Single Vehicle
  public getVehicle(vehicleId: string): Observable<IVehicle> {
    let dataURL: string = `${this.serviceURL}/registered-vehicle/${vehicleId}`;
    return this.httpClient.get<IVehicle>(dataURL).pipe(catchError(this.handleError));
  }

  // CREATE a Vehicle
  public createVehicle(vehicle: IVehicle): Observable<IVehicle> {
    let dataURL: string = `${this.serviceURL}/registered-vehicle`;
    return this.httpClient.post<IVehicle>(dataURL, vehicle).pipe(catchError(this.handleError));
  }

   // UPDATE a Vehicle
   public updateVehicle(vehicle: IVehicle, vehicleId:string): Observable<IVehicle> {
    let dataURL: string = `${this.serviceURL}/registered-vehicle/${vehicleId}`;
    return this.httpClient.put<IVehicle>(dataURL, vehicle).pipe(catchError(this.handleError));
  }

     // DELETE a Vehicle
     public deleteVehicle( vehicleId:string): Observable<{}> {
      let dataURL: string = `${this.serviceURL}/registered-vehicle/${vehicleId}`;
      return this.httpClient.delete<{}>(dataURL).pipe(catchError(this.handleError));
    }

  // Error Handling
  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      // client error
      errorMessage = `Error : ${error.error.message}`;
    } else {
      //server error
      errorMessage = `Status : ${error.status} \n Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  // post(data: any) {
  //   return this.http
  //     .post<any>('http://localhost:3000/registered_vehicle', data)
  //     .pipe(
  //       map((res: any) => {
  //         return res;
  //       })
  //     );
  // }
  // get() {
  //   return this.http.get<any>('http://localhost:3000/registered_vehicle').pipe(
  //     map((res: any) => {
  //       return res;
  //     })
  //   );
  // }
  // update(data: any, id: number) {
  //   return this.http
  //     .put<any>('http://localhost:3000/registered_vehicle/' + id, data)
  //     .pipe(
  //       map((res: any) => {
  //         return res;
  //       })
  //     );
  // }
  // delete(id: number) {
  //   return this.http
  //     .delete<any>('http://localhost:3000/registered_vehicle/' + id)
  //     .pipe(
  //       map((res: any) => {
  //         return res;
  //       })
  //     );
  // }
}
