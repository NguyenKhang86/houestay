import { DOCUMENT } from "@angular/common";
import { Inject, Injectable, Renderer2 } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class LoadService {
  setCookie(CookieName: string, data: any, arg2: number, arg3: string) {
    throw new Error('Method not implemented.');
  }

    constructor(
        private renderer2: Renderer2, 
        @Inject(DOCUMENT) private _document : any
        ) {}

    loadBody() {
        document.body.setAttribute('class', 'loading');
      }
    
      loadCss() {
        const styles = [
          'assets/default/css/bootstrap.min.css',
          'assets/default/css/app.min.css',
          'assets/default/css/icons.min.css' 
        ];
    
        for (const style of styles) {
          const link = document.createElement('link');
          link.setAttribute('rel', 'stylesheet');
          link.setAttribute('type', 'text/css');
          link.setAttribute('href', style);
          document.head.appendChild(link);
        }
      }
    
      loadScript() {
        const scripts = [
          'assets/default/js/vendor.min.js',
          'assets/default/js/app.min.js'
        ];
        for (const item of scripts) {
          const script = this.renderer2.createElement('script');
          script.type = 'text/javascript';
          script.src = item;
          const body = this._document.getElementsByTagName('body')[0];
          this.renderer2.appendChild(body, script);
        }
      }
}
