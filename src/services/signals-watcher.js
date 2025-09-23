import { Signal } from '@lit-labs/signals';

const createWatcher = (callBackFn, signal) => {
  const watcher = new Signal.subtle.Watcher(async () => {
    await Promise.resolve();
    callBackFn(signal.get());
    watcher.watch();
  });
  return watcher;
};

export const SignalWatcher = {
  createWatcher(signal, callBackFn) {
    const watcher = createWatcher(callBackFn, signal);
    watcher.watch(signal);
    return watcher;
  },

  stopWatcher(watcher, signal) {
    watcher.unwatch(signal);
  }
};
