import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NoteService } from '../../services/note.service';


@Component({
    selector: 'note-component',
    templateUrl: './note.component.html',
    styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

    note = {}

    constructor(private noteService:NoteService) {}

    ngOnInit() {
        this.noteService.getMine().subscribe(res => {
            this.note = res[0]
        });
    }
}
