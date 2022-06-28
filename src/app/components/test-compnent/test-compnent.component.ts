import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test-compnent',
  templateUrl: './test-compnent.component.html',
  styleUrls: ['./test-compnent.component.scss'],
})
export class TestCompnentComponent implements OnInit {
  @Input() input!: string[];
  @Output() output =  new EventEmitter<string[]>()
  constructor() {}

  ngOnInit(): void {}

  emit(): void {
    this.output.emit(this.getEmitValue())
  }

  getEmitValue(): string[] {
    return ['foo', 'bar']
  }
}
