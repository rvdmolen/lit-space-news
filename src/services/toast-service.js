import { signal } from '@lit-labs/signals';
import { SignalService } from './state-service.js';

const toastSignal = signal(undefined);

class ToastService {
  #toastWatcher;

  publish(message, config = {duration: 3000}) {
    const newToastMessage = {
      text: message,
      config
    }
    toastSignal.set(newToastMessage);
  }

  subscribe(callback) {
    this.#toastWatcher = SignalService.createWatcher(toastSignal, callback);
  }

  unsubscribe() {
    SignalService.stopWatcher(this.#toastWatcher, toastSignal);
  }
}

export const toastService = new ToastService();
