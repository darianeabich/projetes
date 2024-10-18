import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThematicService {
  getThematic() {
    console.log('get thematic');
  }
}
