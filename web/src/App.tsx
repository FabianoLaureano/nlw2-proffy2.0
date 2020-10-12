import React from 'react';

import { AuthProvider } from './contexts/auth';

import Routes from './routes';

//import Routes from './routes/index'

import './assets/styles/global.css';

// JSX = JavaScript + XML

function App() {
  return (
    //<BrowserRouter>
		<AuthProvider>				
			<Routes />				
		</AuthProvider>
	//</BrowserRouter>
  );
}

export default App;
