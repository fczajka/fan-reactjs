import type { ReactElement } from 'react';
import type { SetStateActionBoolean } from '../../../data/Types';

export interface ReactElementChildren {
  children: ReactElement;
}

export interface ModalProps {
  showModal: boolean;
  setShowModal: SetStateActionBoolean;
}
