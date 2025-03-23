import { type RefObject, useEffect } from 'react';

export function useCloseOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,
  onClose: () => void,
) {
  useEffect(() => {
    function handleCloseClick(event: MouseEvent) {
      if (ref.current && ref.current.contains(event.target as Node)) return;
      onClose();
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key !== 'Escape') return;
      onClose();
    }

    document.addEventListener('mouseup', handleCloseClick);
    document.addEventListener('keyup', handleEscape);

    return () => {
      document.removeEventListener('mouseup', handleCloseClick);
      document.removeEventListener('keyup', handleEscape);
    };
  }, [ref, onClose]);
}
