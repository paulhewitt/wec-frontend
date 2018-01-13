import { ClockTimer } from "./clock-timer";
import { Calendar } from "./calendar";
import { TaskList } from "./task-list";
import { Notes } from "./notes";

export class User {
    _id: number;
    firstName: string;
    lastName: string;
    image: String;

    clockTimer: ClockTimer[];
    taskList: TaskList[];
    notes: Notes[];
    calendar: Calendar;
}