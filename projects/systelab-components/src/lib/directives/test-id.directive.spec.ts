import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TestIdDirective } from './test-id.directive';

@Component({
  template: `
    <div systelabTestId='test'></div>
  `
})
class TestComponent {}

describe('SystelabTestId Directive', () => {
  let fixture: ComponentFixture<TestComponent>;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ TestComponent, TestIdDirective ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    }).createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const div: HTMLElement = fixture.nativeElement.query(By.css('div[data-test-is="test"]'));
    expect(div).toBeTruthy();
  });
});
