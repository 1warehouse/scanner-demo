import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import CheckDevice from 'src/hocs/CheckDevice';
import Router from 'src/router';

import 'src/assets/styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CheckDevice>
        <Router />
      </CheckDevice>
    </BrowserRouter>
  </React.StrictMode>,
);
