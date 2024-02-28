import React, { useContext } from 'react';
import PortfolioValue from '../components/PortfolioValue';
import PortfolioPerformance from '../components/PortfolioPerformance';
import { PortfolioContext } from '../context/PortfolioContext';
import { getCurrentPortfolioValue, getInitialPortfolioValue, getPreviousDayPortfolioChange } from '../utils/portfolioCalculations';

const PortfolioOverview: React.FC = () => {
    const { holdings } = useContext(PortfolioContext);
    const initialValue = getInitialPortfolioValue(holdings);
    const prevDayChange = getPreviousDayPortfolioChange(holdings);
    const currentValue = getCurrentPortfolioValue(holdings);

    return (
        <div className="dashboard-item w-2/6">
            <h2 className="text-md text-slate dark:text-white font-medium text-bold mb-1">Portfolio Overview</h2>
            <div id="portfolioOverview" className="dashboard-item-wrapper px-9">
                <PortfolioValue currentValue={currentValue}></PortfolioValue>
                <div className="flex gap-6 min-w-full justify-center">
                    <PortfolioPerformance initialValue={initialValue} currentValue={currentValue} label="Total Return"></PortfolioPerformance>
                    <PortfolioPerformance initialValue={currentValue - prevDayChange} currentValue={currentValue} label="Daily Return"></PortfolioPerformance>
                </div>
            </div>
        </div>
    )
}

export default PortfolioOverview;