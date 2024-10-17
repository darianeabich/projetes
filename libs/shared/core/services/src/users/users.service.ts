import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserI } from '@projetes/interfaces';
import { catchError, map, Observable, of } from 'rxjs';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { environment } from './../../../../../../apps/projetes/src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);
  apiUsers = `${environment.apiUrl}usuarios`;

  getUsers(offset?: number, limit?: number) {
    if (!offset) {
      offset = 0;
    }
    return this.http
      .get(`${this.apiUsers}?limit=${limit}&offset=${offset}`)
      .pipe(
        map((response: any) => {
          return response;
        }),
        catchError((error: any) => {
          return of(error);
        })
      );
  }

  getById(id: number): Observable<UserI> {
    return this.http.get<UserI>(`${this.apiUsers}/${id}`);
  }

  create(usuario: any) {
    return this.http.post(this.apiUsers, usuario);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUsers}/${id}`);
  }

  update(id: number, user: any) {
    return this.http.patch(`${this.apiUsers}/${id}`, user);
  }
}
