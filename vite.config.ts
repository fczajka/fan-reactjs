import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@types': '/src/data/Types.ts',
      '@enums': '/src/data/Enums.ts',
      '@interfaces': '/src/data/Interfaces.ts',
      '@helpers': '/src/helpers/index.ts',
      '@IsOpen': '/src/context/IsOpenContext.ts',
      '@ui': '/src/Components/ui/index.ts',
      '@storeReducers': '/src/store/reducers/reducers.ts',
      '@storeHooks': '/src/store/hooks/hooks.ts',
      '@storeInitialState': '/src/store/initialState/initialState.ts',
      '@storeSlices': '/src/store/slices/food.ts',
      '@store': '/src/store/store.ts',
      '@home': '/src/pages/home/index.tsx',
      '@details': '/src/pages/details/index.tsx',
    },
  },
});
