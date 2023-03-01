import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Message {
    severity?: string;
    summary?: string;
    detail?: string;
    id?: any;
    key?: string;
    life?: number;
    sticky?: boolean;
    closable?: boolean;
    data?: any;
    icon?: string;
    contentStyleClass?: string;
    styleClass?: string;
}

@Injectable({ providedIn: 'root' })
export class OverlayService {
    private clickSource = new Subject<Message | Message[]>();

    clickObservable = this.clickSource.asObservable();

    add(event) {
        if (event) {
            this.clickSource.next(event);
        }
    }
}