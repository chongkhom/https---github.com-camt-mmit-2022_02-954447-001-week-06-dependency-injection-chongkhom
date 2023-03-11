import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionContainerComponent, createSection, SectionType } from './section-container/section-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SectionContainerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-ng3';

  data: SectionType[] = [
    [{value: 1}, {value: 2}], 
    [{value: 3}],
  ];

  removeChild(index: number): void {
    this.data.splice(index,1);
  }
}
