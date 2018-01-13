import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NoteService } from '../../services/note.service';
import { Note } from '../../models/note';


@Component({
    selector: 'app-root',
    templateUrl: './note-list.html',
    styleUrls: ['./note-list.css']
})
export class NoteListComponent implements OnInit {

    notes:Note[] = new Array<Note>();
    addNew = false

    constructor(private noteService: NoteService) { }

    ngOnInit() {
        this.noteService.getMine().subscribe(res => {
            this.notes = res;
        });
    }

    deleteNote(noteId) {
        this.noteService.delete(noteId).subscribe(res => {
            console.log(res)
        });
        this.notes = this.notes.filter(note => {
            return note._id != noteId;
        })
    }

    addNote(note) {
        this.notes.push(note);
        this.addNew = false;
    }
}
