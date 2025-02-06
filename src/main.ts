import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ReportComponent } from './components/report/report.component';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <app-report />
    </main>
  `,
  imports: [ReportComponent],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
