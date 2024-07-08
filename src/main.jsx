import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import './responsive.css'
import './appresponsive.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router.jsx'
import { UserProvider } from './ContextAPI/UserContext.jsx';
import { Web3ReactProvider } from '@web3-react/core'
import getLibrary from './utils/getLibrary.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </Web3ReactProvider>
  </React.StrictMode>,
)
