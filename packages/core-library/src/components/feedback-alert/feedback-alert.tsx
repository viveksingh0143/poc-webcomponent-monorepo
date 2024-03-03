import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
  tag: 'feedback-alert',
  styleUrl: '../../styles/tailwind.css',
  shadow: true,
})
export class FeedbackAlert {
  @Prop() type: 'success' | 'error' | 'warning' = 'success';
  @Prop() needAction: boolean = false;
  @Prop() label: string = 'Feedback';
  @Prop() description: string = '';
  @Prop() okText: string = 'Ok';
  @Prop() cancelText: string = 'Cancel';
  @Event() okClick: EventEmitter;
  @Event() cancelClick: EventEmitter;


  getAlertClasses() {
    switch (this.type) {
      case 'success':
        return 'bg-green-50 text-green-800';
      case 'error':
        return 'bg-red-50 text-red-800';
      case 'warning':
        return 'bg-yellow-50 text-yellow-800';
      default:
        return 'bg-green-50 text-green-800';
    }
  }

  render() {
    return (
      <div class={`rounded-md p-4 ${this.getAlertClasses()}`}>
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-sm font-medium">{this.label}</h3>
            <div class="mt-2 text-sm">
              <p>{this.description}</p>
            </div>
            {this.needAction && (
            <div class="mt-4">
              <div class="-mx-2 -my-1.5 flex">
                <button type="button" class={`rounded-md px-2 py-1.5 text-sm font-medium hover:bg-${this.type}-100 focus:outline-none focus:ring-2 focus:ring-${this.type}-600 focus:ring-offset-2 focus:ring-offset-${this.type}-50`} onClick={() => this.okClick.emit()}>{this.okText}</button>
                <button type="button" class={`ml-3 rounded-md px-2 py-1.5 text-sm font-medium text-${this.type}-800 bg-${this.type}-50 hover:bg-${this.type}-100 focus:outline-none focus:ring-2 focus:ring-${this.type}-600 focus:ring-offset-2 focus:ring-offset-${this.type}-50`} onClick={() => this.cancelClick.emit()}>{this.cancelText}</button>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    );
  }

}