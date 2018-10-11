import { Component, Input } from "@angular/core";

@Component({
  selector: "app-spinner",
  template: `
        <svg *ngIf="showSpinner" viewBox="0 0 44 44" class="Polaris-Spinner Polaris-Spinner--colorTeal Polaris-Spinner--sizeLarge" role="status">
        <path d="M15.542 1.487A21.507 21.507 0 0 0 .5 22c0 11.874 9.626 21.5 21.5 21.5 9.847 0 18.364-6.675 20.809-16.072a1.5 1.5 0 0 0-2.904-.756C37.803 34.755 30.473 40.5 22 40.5 11.783 40.5 3.5 32.217 3.5 22c0-8.137 5.3-15.247 12.942-17.65a1.5 1.5 0 1 0-.9-2.863z"></path>
        </svg>
    `,
  styleUrls: []
})
export class SpinnerComponent {
  @Input()
  showSpinner: boolean = false;
}
