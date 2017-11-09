import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotesComponent } from './notes/notes.component';
import { NoteEditorComponent } from './note-editor/note-editor.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/notes',
    pathMatch: 'full'
  },
  {
    path: 'notes',
    component: NotesComponent
  },
  {
    path: 'note-editor/:id',
    component: NoteEditorComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}