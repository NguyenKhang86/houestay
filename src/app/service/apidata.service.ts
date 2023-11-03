import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class ApidataService {
    public host: string = 'https://insoltech.vn/api/';

    static AccessTokenJwt: string = '';
    public static CookieName: string = "MyCookie";
    public headersOptions: any
    cookie: any;

    constructor( private http: HttpClient) {
        ApidataService.AccessTokenJwt = this.getCookie(ApidataService.CookieName)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ApidataService.AccessTokenJwt}`
    });
    this.headersOptions = { headers: headers };
    }

    public setCookie(name: string, value: string, expireDays: number, path: string = '') {
        let d: Date = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        let expires: string = `expires=${d.toUTCString()}`;
        let cpath: string = path ? `; path=${path}` : '';
        document.cookie = `${name}=${value}; ${expires}${cpath}`;
    }

    public getCookie(name: string) {
        let ca: Array<string> = document.cookie.split(';');
        let caLen: number = ca.length;
        let cookieName = `${name}=`;
        let c: string;

        for (let i: number = 0; i < caLen; i += 1) {
        c = ca[i].replace(/^\s+/g, '');
        if (c.indexOf(cookieName) == 0) {
            return c.substring(cookieName.length, c.length);
        }
        }
        return '';
    }
    
  public static apiKey: string = "";

  public deleteCookie(name: string) {
    this.cookie.deleteAll('/admin');
    this.cookie.deleteAll('/');
  }

    // GET
    GetApi(url: string): Observable<any> {
        return this.http.get<any>(this.host + url, this.headersOptions)
    }
    // POST
    postApi(url: string, data: any): Observable<any> {
        return this.http.post<any>(this.host + url, data, this.headersOptions)
    }
}
