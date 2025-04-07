import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input()
  defualtValueChild = '';

  @Output()
  sendMessageToParent = new EventEmitter();

  calledParen(e: any) {
    this.sendMessageToParent.emit(e.target.value);
  }
}
