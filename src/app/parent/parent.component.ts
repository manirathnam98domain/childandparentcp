import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  defualtValue = 'Parent Component';

  messageChild = '';

  receviceMessage(e: any) {
    this.messageChild = e;
  }
}
