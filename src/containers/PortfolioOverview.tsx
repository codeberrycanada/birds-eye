import React, { useContext } from 'react';
import PortfolioValue from '../components/PortfolioValue';
import PortfolioPerformance from '../components/PortfolioPerformance';
import { PortfolioContext } from '../context/PortfolioContext';
import { getCurrentPortfolioValue, getInitialPortfolioValue } from '../utils/portfolioCalculations';

const PortfolioOverview: React.FC = () => {
    const { holdings } = useContext(PortfolioContext);
    const initialValue = getInitialPortfolioValue(holdings);
    const currentValue = getCurrentPortfolioValue(holdings);

    return (
        <div className="dashboard-item">
            <h2 className="text-xl text-white text-bold mb-1">Portfolio Overview</h2>
            <div id="portfolioOverview" className="p-6 bg-slate-950">
                <PortfolioValue currentValue={currentValue}></PortfolioValue>
                <PortfolioPerformance initialValue={initialValue} currentValue={currentValue}></PortfolioPerformance>
            </div>
        </div>
    )
}

export default PortfolioOverview;