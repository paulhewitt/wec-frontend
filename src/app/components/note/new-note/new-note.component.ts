import { Component, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { NoteService } from '../../../services/note.service';
import { Note } from '../../../models/note'


@Component({
    selector: 'new-note',
    templateUrl: './new-note.html',
    styleUrls: ['./new-note.css']
})
export class NewNoteComponent {

    @Output() onAddNote = new EventEmitter<Note>();
    note = {
        title: "",
        body: ""
    }

    constructor(private noteService: NoteService) { }

    addNote() {
        this.noteService.create(this.note).subscribe(res => {
            this.onAddNote.emit(res);
        });
    }
}
