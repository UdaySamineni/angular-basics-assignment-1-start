import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `<div>
    <p class="alert-success">success-alert works!</p>
    <p app-warning-alert></p>
    </div>`,
})
export class SuccessAlertComponent {

}
