import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { NoteService, Note } from '../services/note.service';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css']
})
export class NoteEditorComponent implements OnInit {

  private note: Note;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private noteSvc: NoteService
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let noteId = params['id'];
      if (noteId === 'new'){
        this.note = new Note('','');
      } else {
        this.noteSvc.getNoteById(noteId)
        .subscribe((note:Note) => {
          this.note = note;
        });
      }
    });
  }

  createOrSaveNote() {
    if (this.note.id) {
      this.noteSvc.updateNote(this.note).subscribe((note:Note) => {
        this.router.navigate(['/notes']);
      });
    } else {
      this.note.id = this.guid();
      this.noteSvc.createNote(this.note).subscribe((note:Note) => {
        this.router.navigate(['/notes']);
      });
    }
  }

  private guid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}
