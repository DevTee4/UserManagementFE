import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class WebRequestService {
  serverURL = "http://localhost:52003/api/";
  constructor(private http: HttpClient) {}

  get(url: string) {
    const URL = this.serverURL + `${url}`;
    return this.http.get<Array<any>>(URL);
  }

  post(url: string, body: any){
    return this.http.post(this.serverURL+ url, body);
  }
  put(url: string, body: any, upstream = false) {
    return this.http.put(this.serverURL + url, body);
  }

  delete(url: string, upstream = false): Observable<any> {
    console.log('Delete Url: ', this.serverURL + url);
    return this.http.delete(this.serverURL+ url);
  }
}
