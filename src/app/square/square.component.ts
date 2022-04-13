import { Component, Input } from '@angular/core';
import { SlotValueType } from '../types/slot-value';

@Component({
  selector: 'app-square',
  template: `
  <button nbButton *ngIf="!value">{{ value }}</button>
  <button nbButton hero status="success" *ngIf="value == 'X'">{{ value }}</button>
  <button nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; outline: none; }']
})
export class SquareComponent {
  @Input() value: SlotValueType = 'X';
}
