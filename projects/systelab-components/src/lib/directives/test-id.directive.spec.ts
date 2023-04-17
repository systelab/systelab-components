import { Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { TestIdDirective } from './test-id.directive';

@Component({
  template: `
    <div systelabTestId='test'></div>
  `
})
class SystelabTestIdDirectiveTestComponent {}

describe('SystelabTestId Directive', () => {
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

  it('should create an instance', fakeAsync(() => {
    const div: DebugElement = fixture.debugElement.query(By.css('div[data-test-id="test"]'));
    expect(div).toBeTruthy();
  }));
});
