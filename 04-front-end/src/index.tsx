import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './common/reportWebVitals';
import Applicaiton from './components/Application/Applicaiton';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Applicaiton />
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals(console.log);
