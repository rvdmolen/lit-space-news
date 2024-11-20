import { Signal, signal } from '@lit-labs/signals';


const searchSpaceItemSignal = signal(undefined);
const openSideBarSignal = signal(undefined);

const createWatcher = (callBackFn) => {
  const watcher = new Signal.subtle.Watcher(async () => {
    await 0;
    callBackFn();
    watcher.watch();
  });
  return watcher;
};

export const SignalService = {
  get searchSpaceItemSignal() {
    return searchSpaceItemSignal;
  },

  get openSideBarSignal() {
    return openSideBarSignal;
  },

  createSignalWatcher(signal, callBackFn) {
    const watcher = createWatcher(callBackFn);
    watcher.watch(signal);
    return watcher;
  }
};


