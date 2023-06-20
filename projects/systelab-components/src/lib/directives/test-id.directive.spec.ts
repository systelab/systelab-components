import { Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { TestIdDirective } from './test-id.directive';
import { APP_CONFIG } from '../systelab-components.module.config';

@Component({
  template: `
    <div systelabTestId='test'></div>
  `
})
class SystelabTestIdDirectiveTestComponent {}

describe('SystelabTestId Directive without module configuration', () => {
    let fixture: ComponentFixture<SystelabTestIdDirectiveTestComponent>;
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [BrowserModule],
        declarations: [ SystelabTestIdDirectiveTestComponent, TestIdDirective ],
        schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      }).compileComponents();

      fixture = TestBed.createComponent(SystelabTestIdDirectiveTestComponent);
      fixture.detectChanges();
    });

    it('shouldn\'t add "data-test-id" attribute with defined label into DOM element because of productionMode ' +
       'hasn\'t been set', fakeAsync(() => {
      const div: DebugElement = fixture.debugElement.query(By.css('div[data-test-id="test"]'));
      expect(div).toBeFalsy();
    }));
});

describe('SystelabTestId Directive with productionMode to true', () => {
    let fixture: ComponentFixture<SystelabTestIdDirectiveTestComponent>;
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [BrowserModule],
        declarations: [ SystelabTestIdDirectiveTestComponent, TestIdDirective ],
        providers: [{
          provide: APP_CONFIG, useValue: {productionMode: true},
        }],
        schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      }).compileComponents();

      fixture = TestBed.createComponent(SystelabTestIdDirectiveTestComponent);
      fixture.detectChanges();
    });

      it('shouldn\'t add "data-test-id" attribute with defined label into DOM element because of productionMode ' +
          'has been set as true', fakeAsync(() => {
        const div: DebugElement = fixture.debugElement.query(By.css('div[data-test-id="test"]'));
        expect(div).toBeFalsy();
      }));
});

describe('SystelabTestId Directive with productionMode to false', () => {
  let fixture: ComponentFixture<SystelabTestIdDirectiveTestComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserModule],
      declarations: [ SystelabTestIdDirectiveTestComponent, TestIdDirective ],
      providers: [{
        provide: APP_CONFIG, useValue: {productionMode: false},
      }],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    }).compileComponents();

    fixture = TestBed.createComponent(SystelabTestIdDirectiveTestComponent);
    fixture.detectChanges();
  });

  it('should add "data-test-id" attribute with defined label into DOM element', fakeAsync(() => {
    const div: DebugElement = fixture.debugElement.query(By.css('div[data-test-id="test"]'));
    expect(div).toBeTruthy();
  }));
});
