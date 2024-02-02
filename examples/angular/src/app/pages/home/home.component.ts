import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private valueSource = new BehaviorSubject<string>('INITIAL');
  value$ = this.valueSource.asObservable();

  changeText() {
    this.valueSource.next((Math.random() + 1).toString(36).substring(7));
  }

  clearText() {
    this.valueSource.next('');
  }
}
