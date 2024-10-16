import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WelcomeService {
  private readonly jsonPhrases = '/assets/frases.json';
  private httpClient = inject(HttpClient);

  getPhrases() {
    return this.httpClient.get(this.jsonPhrases).pipe(
      first(),
      tap((data) => console.log(data))
    );
  }
}
