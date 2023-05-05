import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PrivateRoutes from "./Components/UI/PrivateRoutes/PrivateRoutes";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <PrivateRoutes/>
);

