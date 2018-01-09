import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, tap, map } from 'rxjs/operators';

import { NotificationService } from './notification.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NoteService {

  private notes: Note[] = [];

  private notesUrl = 'api/notes';

  constructor(
    private http: HttpClient,
    private notificationSvc: NotificationService
  ) { }

  getNotes(): Observable<Note[]> {

    if (this.notes.length !== 0) {
      return of(this.notes);
    }

    return this.http.get<Note[]>(this.notesUrl).pipe(
      tap((notes:Note[]) => {
        this.notificationSvc.success(`Fetched ${notes.length} notes!`);
        this.notes = notes;
        return this.notes;
      }),
      catchError(this.handleError('getNotes',[]))
    );

  }

  updateNote(note: Note): Observable<any> {
    return this.http.put(this.notesUrl, note, httpOptions).pipe(
      tap( _ => {
        this.notificationSvc.success(`Updated note with id [${note.id}]`);

        this.notes.forEach((n:Note) => {
          if (n.id === note.id) {
            n = note;
          }
        });

        return note;
      }),
      catchError(this.handleError<any>('updateNote'))
    );
  }

  createNote(note: Note): Observable<any> {
    return this.http.post(this.notesUrl, note, httpOptions).pipe(
      tap((note:Note) => {
        this.notificationSvc.success(`Created note with id [${note.id}]`);
        this.notes.push(note);
        return note;
      }),
      catchError(this.handleError<any>('createNote'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.notificationSvc.fail(error);
      return of(result as T);
    };
  }

}

export class Note {
  
  id: string;
  title: string;
  content: string;

  constructor(title:string, content:string) {
    this.title = title;
    this.content = content;
  }

}