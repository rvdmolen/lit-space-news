import { signal } from '@lit-labs/signals';


const toastSignal = signal(undefined);
const openSideBarSignal = signal(undefined);
const searchSpaceItemSignal = signal(undefined);


export  {
  toastSignal,
  openSideBarSignal,
  searchSpaceItemSignal
}
