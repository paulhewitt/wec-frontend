import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
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

    other = {
        userId: ''
    }

    constructor(private noteService: NoteService, public dialog: MatDialog) {}

    ngOnInit() {
    }

    deleteSelf() {
        this.onDeleteSelf.emit(this.note._id);
    }

    share() {
        this.noteService.share(this.note._id, this.other.userId).subscribe(res => {
            console.log(res)});
    }
}