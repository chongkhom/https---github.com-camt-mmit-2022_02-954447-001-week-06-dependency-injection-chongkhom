import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-section.component.html',
  styleUrls: ['./display-section.component.scss']
})
export class DisplaySectionComponent implements OnInit {
  @Input() data!: SectionType;

  
}
