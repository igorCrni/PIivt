import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './common/reportWebVitals';
import Applicaiton from './components/Application/Applicaiton';
import './index.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Applicaiton />
  </React.StrictMode>
);

reportWebVitals(console.log);
