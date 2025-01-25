import { ReactElement } from 'react';
import { SetStateActionBoolean } from '../../../data/Types';

export interface ReactElementChildren {
  children: ReactElement;
}

export interface ModalProps {
  showModal: boolean;
  setShowModal: SetStateActionBoolean;
}
