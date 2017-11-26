# systelab-calendar-header, systelab-calendar-table

Components to create a custom calendar

## Using the templates

```
<systelab-calendar-header [currentDate]="currentDate" [locale]="locale"
                          (previousYear)="changeYear(-1)" (previousMonth)="changeMonth(-1)"
                          (nextMonth)="changeMonth(1)" (nextYear)="changeYear(1)">
</systelab-calendar-header>

<systelab-calendar-table #calendar class="uk-flex-item-1" [currentDate]="currentDate" [days]="days" [locale]="locale">
```


```
<systelab-calendar-table #calendar class="uk-flex-item-1" [currentDate]="currentDate" [days]="days" [locale]="locale">
        <ng-template  let-daySlot="daySlot">
            <a [ngClass]="{'is-holiday': daySlot.isHoliday,'disable-link':daySlot.isDisabled}" (click)="selectDaySlot(daySlot)">
                {{daySlot.day}}
            </a>
            <!--
            <div *ngIf="!daySlot.isHoliday" class="buttons">
                <button class="button1" (click)="doSomething(daySlot)"></button>
                <button class="button2"></button>
                <button class="button3"></button>
            </div>
            -->
        </ng-template>
    </systelab-calendar-table>
```

