import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const API = environment.api.url;

@Injectable({
  providedIn: 'root'
})
export class GenericApiService<T> {

  constructor(private _http: HttpClient) { }

  getAll(url: string) : Observable<T[]>{
    return this._http.get<T[]>(API + url, {}).pipe(
      map(res => {
        return res;
    }));
  }

  getById(url : string, params : string): Observable<T>{
    return this._http.get<T>(API + url + params, {}).pipe(map(res =>{
      return res;
    }));
  }

  post(url: string, entity: T): Observable<T>{
    return this._http.post<T>(API + url, entity).pipe(map(res =>{
      return res;
    }));
  }

  put(url:string, entity : T): Observable<T>{
    return this._http.put<T>(API + url, entity).pipe(map(res => {
      return res;
    }));
  }

  delete(url: string, Id : string): Observable<T>{
    return this._http.delete<T>(API + url + Id, {}).pipe(map(res =>{
      return res;
    }));
  }
}
