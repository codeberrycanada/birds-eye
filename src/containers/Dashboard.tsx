import PortfolioOverview from '../containers/PortfolioOverview';
import PortfolioSectors from '../containers/PortfolioSectors';
import PortfolioHoldings from '../containers/PortfolioHoldings';

export default function Dashboard() {
    return(
        <main id="dashboard" className="w-4/5 dark:bg-slate-900 py-8 px-6 gap-6 flex flex-wrap">
            <PortfolioOverview />
            <PortfolioSectors />
            <PortfolioHoldings />
        </main>
    )
}