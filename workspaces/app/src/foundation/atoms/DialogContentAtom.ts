import { atom } from 'jotai';

export const isOpenDialogAtom = atom<boolean>(false);
type DialogContentState = {a11yId: string, content: string, title: string};
const StateAtom = atom<DialogContentState>({a11yId: '', content: '', title: ''});

export const DialogContentAtom = atom(
  (get) => {
    return get(StateAtom);
  },
  (_get, set, content:  DialogContentState) => {
    set(StateAtom, content);
  },
);
