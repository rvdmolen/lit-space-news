import { searchSpaceItemSignal, toastSignal } from './signals.js';
import { SignalWatcher } from './signals-watcher.js';


class Search {
  #watchers = new Set();

  search(data) {
    searchSpaceItemSignal.set(data);
  }

  subscribe(callback) {
    const watcher = SignalWatcher.createWatcher(searchSpaceItemSignal, callback);
    this.#watchers.add(watcher);
    return {
      'unsubscribe' : () => this.#unsubscribe(watcher)
    };
  }

  #unsubscribe(watcher) {
    if (this.#watchers.has(watcher)) {
      SignalWatcher.stopWatcher(watcher, searchSpaceItemSignal);
      this.#watchers.delete(watcher);
    }
  }
}

export const searchService = new Search();
