import React from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import Sidebar from './containers/Sidebar';
import Dashboard from './containers/Dashboard';

const App: React.FC = () => {
    return (
        <PortfolioProvider>
            <Sidebar />
            <Dashboard />
        </PortfolioProvider>
    )
}

export default App;