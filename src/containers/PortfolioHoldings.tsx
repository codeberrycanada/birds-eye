import React from "react";
import PortfolioHoldingsTable from "../components/PortfolioHoldingsTable";
import EnhancedTable from "../components/SortableTable";

const PortfolioHoldings: React.FC = () => {
    return (
        <div className="dashboard-item min-w-full">
            <h2 className="text-md text-white font-medium text-bold mb-1">Portfolio Holdings</h2>
            {/* <PortfolioHoldingsTable /> */}
            <EnhancedTable />
        </div>
    )
}

export default PortfolioHoldings;