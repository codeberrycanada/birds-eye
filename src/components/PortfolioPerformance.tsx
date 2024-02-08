import { calculatePortfolioPerformance } from '../utils/portfolioCalculations';
import { shortCurrencyFormatter } from '../utils/formatting';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/16/solid';

interface PortfolioPerformanceProps {
    initialValue: number;
    currentValue: number;
}

export default function PortfolioPerformance(props: PortfolioPerformanceProps) {
    const initialValue = props.initialValue;
    const currentValue = props.currentValue;
    const performance = calculatePortfolioPerformance(initialValue, currentValue);
    const PerformanceIcon = performance.percentage > 0 ? ArrowUpIcon : ArrowDownIcon;
    const performanceIconTextColor = PerformanceIcon === ArrowUpIcon ? 'text-green-600' : 'text-red-900';
    const performanceTextColor = PerformanceIcon === ArrowUpIcon ? 'text-green-400' : 'text-red-600';
    return (
        <div id="portfolioPerformance" className="flex items-center justify-center mt-2 gap-2 pr-3">
            <PerformanceIcon className={`h-4 w-4 ${performanceIconTextColor}`} />
            <p className={`font-medium ${performanceTextColor}`}>{Number(performance.percentage.toFixed(2))}%</p>
            <p className={`font-medium ${performanceTextColor}`}>{shortCurrencyFormatter(performance.numerical)}</p>
        </div>
    );
}