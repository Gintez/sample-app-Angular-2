import { Component, ViewChild} from '@angular/core';
import { ModalComponent} from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild(ModalComponent)
  public readonly modal: ModalComponent;
}
