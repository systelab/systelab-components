import { SystelabComponentsModule } from './systelab-components.module';
import { fakeAsync, TestBed } from '@angular/core/testing';

describe('Systelab Components', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SystelabComponentsModule],
        });
    });

    it('module should be loaded', fakeAsync(() => {
        const module = TestBed.inject(SystelabComponentsModule);
        expect(module).toBeTruthy();
    }));
});
