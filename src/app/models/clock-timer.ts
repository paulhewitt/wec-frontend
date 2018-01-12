import { User } from "./user";
import {Timer} from 'timer.js';

export class ClockTimer {
    id: number;
    name: string;
    timer: Timer;

    user: User;
}