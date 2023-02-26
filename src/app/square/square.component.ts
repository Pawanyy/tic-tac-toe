import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: ` <button *ngIf="value == ''" mat-stroked-button>{{ value }}</button> 
              <button *ngIf="value == 'X'" color="primary" mat-flat-button>{{ value }}</button>
              <button *ngIf="value == 'O'" color="accent" mat-flat-button>{{ value }}</button>
              `,
  styles: ['button { width: 100%; height: 100% !important; font-size: 8rem;}'],
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | '' = '';
}
