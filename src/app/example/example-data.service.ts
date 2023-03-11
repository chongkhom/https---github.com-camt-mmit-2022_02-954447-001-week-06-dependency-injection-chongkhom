import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { 
  createSection,
  SectionType,
  } from '../section-container/section-container.component';

  const keyName = 'example-data';

@Injectable({
  providedIn: 'root'
})
export class ExampleDataService {
  constructor() { }

  save(data: SectionType[]): void {
    localStorage.setItem(keyName, JSON.stringify(data));
  }

  load(): SectionType[] {
    const JSON = localStorage.getItem(keyName);

    if(json) {
      return JSON?.parse(json) as SectionType[];
    }else {
      return [createSection()];
    }
  }
}