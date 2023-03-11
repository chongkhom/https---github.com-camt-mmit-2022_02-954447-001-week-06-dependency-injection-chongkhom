import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionType } from 'src/app/section-container/section-container.component';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-display-dynamic-input',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './display-dynamic-input.component.html',
  styleUrls: ['./display-dynamic-input.component.scss']
})
export class DisplayDynamicInputComponent implements OnInit{
  @Input() data!: SectionType;
  @Input() router!: ActivatedRoute;

  ngOnInit(): void {
    if (!this.data || !this.router) {
    throw new Error( )
    }
  }
}
