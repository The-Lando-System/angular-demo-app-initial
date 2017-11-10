import { Component, OnInit } from '@angular/core';
import { NoteService, Note } from '../note.service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  private notes: Note[] = [];

  constructor(
    private noteService: NoteService
  ) { }

  ngOnInit() {
    this.noteService.getNotes()
    .subscribe((notes:Note[]) => {
      this.notes = notes;
    });
  }

}
