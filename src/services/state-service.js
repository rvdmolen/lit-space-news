import { Signal, signal } from '@lit-labs/signals';


const searchSpaceItemSignal = signal(undefined);
const openSideBarSignal = signal(undefined);

const createWatcher = (callBackFn, signal) => {
  const watcher = new Signal.subtle.Watcher(async (val) => {
    await 0;
    callBackFn(signal.get());
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
    const watcher = createWatcher(callBackFn, signal);
    watcher.watch(signal);
    return watcher;
  }
};


