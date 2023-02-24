import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: ` <button mat-stroked-button>{{ value }}</button> `,
  styles: ['button { width: 100%; height: 100% !important; font-size: 8rem;}'],
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | ' ' = ' ';
}
