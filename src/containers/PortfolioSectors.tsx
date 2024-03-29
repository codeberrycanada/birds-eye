import React, { useContext } from 'react';
import DoughnutChart from '../components/DoughnutChart';
import { PortfolioContext } from '../context/PortfolioContext';

const PortfolioSectors: React.FC = () => {
    const { holdings } = useContext(PortfolioContext);

    return (
        <div className="dashboard-item w-2/6">
            <h2 className="text-md text-slate dark:text-white font-medium text-bold mb-1">Sector Breakdown</h2>
            <div className="dashboard-item-wrapper">
                <DoughnutChart data={holdings} />
            </div>
        </div>
    );
}

export default PortfolioSectors;