import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  private baseUrl = '/myOwnPlugin/control/sampleService';

  constructor(private http: HttpClient) {}

  // tslint:disable-next-line:ban-types
  getSample(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getSampleList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
