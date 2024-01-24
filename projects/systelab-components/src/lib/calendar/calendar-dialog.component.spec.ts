import { I18nService } from "systelab-translate";
import { DialogRef } from "../../public-api";
import { CalendarDialog, CalendarDialogParameters } from "./calendar-dialog.component";

describe('CalendarDialog', () => {
    let component: CalendarDialog;
    let dialog: DialogRef<CalendarDialogParameters>;
    let i18nService: I18nService;

    beforeEach(() => {
        dialog = jasmine.createSpyObj('dialog', ['context', 'close']);
        dialog.context = new CalendarDialogParameters();
        i18nService = jasmine.createSpyObj('i18nService', ['getCurrentLanguage']);
        component = new CalendarDialog(dialog, i18nService);
    });

    it('should instantiate an instance correctly', () => {
        expect(component).toBeDefined();
    });

    it('should close the dialog correctly', () => {
        component.close();
        expect(dialog.close).toHaveBeenCalled();
    });

    it('should select a day slot correctly', () => {
        const daySlot = {day: 25, date: new Date(2017, 10, 25), isHoliday: true};
        component.selectDaySlot(daySlot);
        expect(dialog.close).toHaveBeenCalled();
    });

    it('should not select a day slot when date is null', () => {
        const daySlot = {day: 25, date: null, isHoliday: true};
        component.selectDaySlot(daySlot);
        expect(dialog.close).not.toHaveBeenCalled();
    });

    it('should do something correctly', () => {
        spyOn(console, 'log');
        const data = {someData: 'jordi'};
        component.doSomething(data);
        expect(console.log).toHaveBeenCalledWith(data);
    });

    it('should change the year correctly', () => {
        const currentYear = component.currentDate.getFullYear();
        const yearFactor = 1;
        component.changeYear(yearFactor);
        expect(component.currentDate.getFullYear()).toEqual(currentYear + yearFactor);
        expect(component.days.length).toEqual(0);
    });

    it('should change the month correctly', () => {
        const currentMonth = component.currentDate.getMonth();
        const monthFactor = 1;
        component.changeMonth(monthFactor);
        expect(component.currentDate.getMonth()).toEqual(currentMonth + monthFactor);
        expect(component.days.length).toEqual(0);
    });
});