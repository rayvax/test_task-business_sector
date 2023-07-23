import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider as StoreProvider } from 'react-redux';
import './style/global.entry.scss';
import store from './store/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
);
