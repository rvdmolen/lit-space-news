import { toastSignal } from './signals.js';
import { SignalWatcher } from './signals-watcher.js';


class Toast {
  #watchers = new Set();

  publish(message, config = { duration: 3000 }) {
    const newToastMessage = { text: message, config };
    toastSignal.set(newToastMessage);
  }

  subscribe(callback) {
    const watcher = SignalWatcher.createWatcher(toastSignal, callback);
    this.#watchers.add(watcher);
    return {
      'unsubscribe' : () => this.#unsubscribe(watcher)
    };
  }

  #unsubscribe(watcher) {
    if (this.#watchers.has(watcher)) {
      SignalWatcher.stopWatcher(watcher, toastSignal);
      this.#watchers.delete(watcher);
    }
  }
}

export const toastService = new Toast();
