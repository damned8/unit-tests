import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TestCompnentComponent } from './test-compnent.component';

const TEST_COMPONENT_INPUT_STAB = ['FOO', 'BAR', 'BAZ'];
describe('TestCompnentComponent', () => {
  let component: TestCompnentComponent;
  let fixture: ComponentFixture<TestCompnentComponent>;
  let debugElement: DebugElement;
  let spy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestCompnentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestCompnentComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();

    spy = spyOn(component, 'getEmitValue').and.returnValue(
      TEST_COMPONENT_INPUT_STAB
    );
  });

  afterEach(() => {
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have test-compnent works!', () => {
    expect(debugElement.query(By.css('p')).nativeElement.innerText).toContain(
      'test-compnent works!'
    );
  });

  it('should have input and display it', () => {
    component.input = TEST_COMPONENT_INPUT_STAB;
    fixture.detectChanges();
    const elements = debugElement.queryAll(By.css('span')).length;
    expect(elements).toEqual(TEST_COMPONENT_INPUT_STAB.length);
  });

  it('should have output', () => {
    component.output.subscribe((v) =>
      expect(v).toEqual(TEST_COMPONENT_INPUT_STAB)
    );
    debugElement.query(By.css('button')).nativeElement.click();
  });
});
