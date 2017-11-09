import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class NoteService {

  private notesUrl = 'api/notes';

  constructor(
    private http: HttpClient
  ) { }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.notesUrl).pipe(
      tap(notes => console.log(`Fetched ${notes.length} notes!`)),
      catchError(this.handleError('getNotes',[]))
    )
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}

export class Note {
  id: string;
  title: string;
  content: string;
}