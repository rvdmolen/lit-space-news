import { openSideBarSignal } from './signals.js';
import { SignalWatcher } from './signals-watcher.js';


class SideBar {
  #watchers = new Set();

  open(state) {
    openSideBarSignal.set(state);
  }

  subscribe(callback) {
    const watcher = SignalWatcher.createWatcher(openSideBarSignal, callback);
    this.#watchers.add(watcher);
    return {
      'unsubscribe' : () => this.#unsubscribe(watcher)
    };
  }

  #unsubscribe(watcher) {
    if (this.#watchers.has(watcher)) {
      SignalWatcher.stopWatcher(watcher, openSideBarSignal);
      this.#watchers.delete(watcher);
    }
  }

  unsubscribeAll() {
    for (const watcher of this.#watchers) {
      SignalWatcher.stopWatcher(watcher, openSideBarSignal);
    }
    this.#watchers.clear();
  }
}

export const sideBarService = new SideBar();
