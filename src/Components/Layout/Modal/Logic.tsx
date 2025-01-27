import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import type { ReactElementChildren } from './interface';
import type { MutableRef } from '@types';

function Logic({ children }: ReactElementChildren) {
  const elRef: MutableRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal');
    if (!modalRoot || !elRef.current) {
      return;
    }
    modalRoot.appendChild(elRef.current);
    const cleanup = () => {
      if (elRef.current) {
        modalRoot.removeChild(elRef.current);
      }
    };
    cleanup();
  }, []);

  return createPortal(<>{children}</>, elRef.current);
}

export default Logic;
