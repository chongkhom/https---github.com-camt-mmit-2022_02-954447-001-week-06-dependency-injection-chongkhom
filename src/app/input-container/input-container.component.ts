import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export type InputType = { value: number };

@Component({
  selector: 'app-input-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.scss']
})
export class InputContainerComponent implements OnInit {
  @Input() no!: number;
  @Input() data!: InputType;
  @Input() removable: boolean = true;

  @Output() remove = new EventEmitter<void>();
  @Output() dataChange = new EventEmitter<InputType | null>();

  protected readonly id = Math.floor(Math.random() * 6);  

  ngOnInit(): void {
    if (!this.data || !this.no) {
      throw new Error('Value property must be specificied');
    }
  }

  onChange(value: number): void {
    this.data.value = value;
    this.dataChange.emit(this.data);
  }

  OnRemove(): void {
    this.remove.emit();
    this.dataChange.emit(null);
  }
}
