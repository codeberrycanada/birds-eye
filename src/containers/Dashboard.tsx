import PortfolioOverview from '../containers/PortfolioOverview';
import PortfolioHoldings from '../components/PortfolioHoldings';

export default function Dashboard() {
    return(
        <main id="dashboard" className="w-4/5 dark:bg-slate-900 py-8 px-6 flex">
            <PortfolioOverview />
            <PortfolioHoldings />
        </main>
    )
}