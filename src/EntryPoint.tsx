import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import App from './Components/ui/App';
import IsOpenContext from './context/IsOpenContext';

const persistor = persistStore(store);

function EntryPoint() {
  const IsOpen = useState(false);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <IsOpenContext.Provider value={IsOpen}>
            <App />
          </IsOpenContext.Provider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default EntryPoint;
