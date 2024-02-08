import React from "react";
import PortfolioHoldingsTable from "../components/PortfolioHoldingsTable";

const PortfolioHoldings: React.FC = () => {
    return (
        <div className="dashboard-item min-w-full">
            <h2 className="text-md text-white font-medium text-bold mb-1">Portfolio Holdings</h2>
            <PortfolioHoldingsTable />
        </div>
    )
}

export default PortfolioHoldings;