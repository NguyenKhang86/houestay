import { Data } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })

export class JsonApiService {

    public host: string = "  http://localhost:3000";
    constructor( private http: HttpClient) {}
    
    Get(url: string): Observable<any> {
        return this.http.get<any>(this.host + url);
    }
    Delete(id: number): Observable<any> {
        return this.http.delete<any>(this.host + id);
    }
    Post(url: string, data: any): Observable<any> {
        return this.http.post<any>(this.host + url, data);
    }
    Put(url: string, data: any): Observable<any> {
        return this.http.put<any>(this.host + url, data);
    }
}
