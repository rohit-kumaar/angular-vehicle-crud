import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  post(data: any) {
    return this.http.post<any>('http://localhost:3000/post', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  get() {
    return this.http.get<any>('http://localhost:3000/post').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  update(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/post/' + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  delete(id: number) {
    return this.http.delete<any>('http://localhost:3000/post/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
