import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NoteService, Note } from '../note.service';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css']
})
export class NoteEditorComponent implements OnInit {

  private note: Note;

  constructor(
    private route: ActivatedRoute,
    private noteSvc: NoteService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.noteSvc.getNoteById(id)
    .subscribe((note:Note) => {
      this.note = note ? note : new Note('New Title','New Content');
    });
  }

  createOrSaveNote() {
    if (this.note.id) {
      this.noteSvc.updateNote(this.note).subscribe((note:Note) => {});
    } else {
      this.note.id = this.guid();
      this.noteSvc.createNote(this.note).subscribe((note:Note) => {});
    }
  }

  private guid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}
