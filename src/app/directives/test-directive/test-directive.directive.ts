import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTestDirective]',
  exportAs: 'appTestDirectiveRef',
})
export class TestDirectiveDirective implements OnInit {
  @Input('appTestDirective') inputData?: string;
  @Input() appTestDirectiveColor?: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', this.appTestDirectiveColor);
  }
}
