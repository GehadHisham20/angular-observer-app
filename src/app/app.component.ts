import { Component } from '@angular/core';
import { Observable, of, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'obeservable-in-angular';

  data: any[] = [];

  // myObserver = new Observable((observer) => {
  //   setTimeout(() => {
  //     observer.next('Data 1');
  //   }, 1000);

  //   setTimeout(() => {
  //     observer.next('Data 2');
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next('Data 3');
  //   }, 3000);
  //   // setTimeout(() => {
  //   //   observer.complete();
  //   // }, 3500);
  //   // setTimeout(() => {
  //   //   observer.error('Error');
  //   // }, 3500);
  //   setTimeout(() => {
  //     observer.next('Data 4');
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.next('Data 5');
  //   }, 5000);
  // });

  // myObserver = of(['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5'], 12, 123);

  myObserver = from(['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5']);

  getData() {
    this.myObserver.subscribe(
      (value: any) => this.data.push(value), // next
      (error) => {
        alert(error);
      }, // error
      () => {
        alert('Completed');
      } // complete
    );
  }
}
