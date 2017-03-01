import {Component} from '@angular/core';

@Component({
  selector: 'two-binding',
  templateUrl: './twobinding.component.html'
})

export class TwoBindingComponent {
  public name: string = "Demo two way data binding";
  public fName = "Nguyen";
  public lName: string = "Manh Kaka";
}
