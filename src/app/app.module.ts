import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotesComponent } from './notes/notes.component';
import { NoteEditorComponent } from './note-editor/note-editor.component';

import { Broadcaster } from './services/broadcaster.service';
import { NotificationService } from './services/notification.service';
import { NoteService } from './services/note.service';

import { AppRoutingModule } from './app-routing.module';
import { NotificationComponent } from './notification/notification.component';
import { CurrentTimeComponent } from './current-time/current-time.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteEditorComponent,
    NavbarComponent,
    NotificationComponent,
    CurrentTimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [ NoteService, NotificationService, Broadcaster ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
