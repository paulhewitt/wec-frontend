import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { NoteService } from '../../../services/note.service';


@Component({
    selector: 'new-note',
    templateUrl: './new-note.html',
    styleUrls: ['./new-note.css']
})
export class NewNoteComponent {

    note = {
        title: "",
        body: ""
    }

    constructor(private noteService: NoteService) { }

    doClick() {
        this.noteService.create(this.note).subscribe(res => {
            console.log(res)
        });
    }
}
