import React from 'react'
import { StoreProvider } from 'easy-peasy';
import { Contadores } from './components/Contadores';
import store from './store/store.js';

export const App = () => {
  return (
    <>
    <StoreProvider store={store}>
      <Contadores />
    </StoreProvider>
    </>
  )
}

export default App;