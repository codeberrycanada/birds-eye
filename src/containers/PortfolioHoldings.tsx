import React from "react";
import { SortableTable } from "../components/PortfolioHoldingsTable";

const PortfolioHoldings: React.FC = () => {
    return (
        <div className="dashboard-item min-w-full">
            <h2 className="text-md text-white font-medium text-bold mb-1">Portfolio Holdings</h2>
            <SortableTable />
        </div>
    )
}

export default PortfolioHoldings;