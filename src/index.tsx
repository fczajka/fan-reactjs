import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import EntryPoint from './EntryPoint.tsx';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <EntryPoint />
    </StrictMode>,
  );
} else {
  console.error('Root element not found');
}
