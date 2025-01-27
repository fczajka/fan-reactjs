import type { SetStateActionBoolean } from '@types';
import type { ReactElement } from 'react';

export interface ReactElementChildren {
  children: ReactElement;
}

export interface ModalProps {
  showModal: boolean;
  setShowModal: SetStateActionBoolean;
}
