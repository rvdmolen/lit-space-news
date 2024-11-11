import { Signal, signal } from '@lit-labs/signals';

export const searchSpaceItemSignal = signal(undefined);

// Use native signal watcher since it is not implemented in Lit yet
export const searchSpaceItemWatcher = (signal, callBackFn) => {
  const watcher = new Signal.subtle.Watcher(async () => {
    await 0;
    callBackFn();
    watcher.watch();
  });
  watcher.watch(signal);
  return watcher;
}
