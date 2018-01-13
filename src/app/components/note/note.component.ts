import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NoteService } from '../../services/note.service';
import { Note } from '../../models/note';


@Component({
    selector: 'note-component',
    templateUrl: './note.component.html',
    styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

    @Input() note: Note;
    @Output() onDeleteSelf = new EventEmitter<Number>();

    constructor(private noteService:NoteService) {}

    ngOnInit() {
    }

    deleteSelf() {
        this.onDeleteSelf.emit(this.note._id);
    }
}
