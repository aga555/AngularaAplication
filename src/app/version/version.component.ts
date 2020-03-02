import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-version',
  styleUrls: ['./version.component.css'],
  template: `
    <p class="version__application">Aktualna wersja aplikacji: {{ version }}</p>
  `,
  styles: [
      `
      .version__application {
        position: absolute;
        right: 2rem;
        color: black;
        z-index: 10;
        bottom: 0.4rem;
      }
    `,
  ],
})
export class VersionComponent implements OnInit {
  readonly version: string;

  constructor() {
    this.version = '0.0.1';
  }


  ngOnInit(): void {
  }

}

