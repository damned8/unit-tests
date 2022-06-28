import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  DebugElement,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TestDirectiveDirective } from './test-directive.directive';

@Component({
  template: `<div
    #ref="appTestDirectiveRef"
    [appTestDirective]="'foo'"
    [appTestDirectiveColor]="textColor"
  >
    123
  </div>`,
})
class TestWrapperComponent {
  @ViewChild('ref', { static: true })
  element!: ElementRef<TestDirectiveDirective>;
  textColor = 'red';
}

describe('TestDirectiveDirective', () => {
  let component: TestWrapperComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestWrapperComponent, TestDirectiveDirective],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TestWrapperComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make text colorize', () => {
    const color = 'blue';
    component.textColor = color;
    fixture.detectChanges();

    expect(debugElement.query(By.css('div')).nativeElement.style.color).toBe(
      color
    );
  });
});
