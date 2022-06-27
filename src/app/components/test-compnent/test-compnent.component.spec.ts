import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestCompnentComponent } from './test-compnent.component';

describe('TestCompnentComponent', () => {
  let component: TestCompnentComponent;
  let fixture: ComponentFixture<TestCompnentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestCompnentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestCompnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have test-compnent works!', () => {
    const compiled = fixture.debugElement.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.innerText).toBe('test-compnent works!');
  });
});
