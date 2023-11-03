import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-homehpage',
  templateUrl: './homehpage.component.html',
  styleUrls: ['./homehpage.component.css']
})
export class HomehpageComponent implements OnInit{
  
  constructor(private renderer2: Renderer2, @Inject(DOCUMENT) private _document : any) { }

  ngOnInit() {
    document.body.setAttribute('data-bs-spy', 'scroll');
    document.body.setAttribute('data-bs-target', '.sticky');
    document.body.setAttribute('data-bs-offset', '70');
    this.loadCss();
    this.loadScript();
  }
  
  private loadCss() {
    const styles = [
      'assets/landing/css/bootstrap.min.css',
      'assets/landing/css/materialdesignicons.min.css',
      'assets/landing/css/pe-icon-7-stroke.css',
      'assets/landing/css/style.css',
    ];

    for (const style of styles) {
      const link = document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('type', 'text/css');
      link.setAttribute('href', style);
      document.head.appendChild(link);
    }
  }

  private loadScript() {
    const scripts = [
      'assets/landing/js/bootstrap.bundle.min.js',
      'assets/landing/js/counter.init.js',
      'assets/landing/js/app.js',
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
