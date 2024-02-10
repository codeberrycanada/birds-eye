import { calculatePortfolioPerformance } from '../utils/portfolioCalculations';
import { currencyFormatter } from '../utils/formatting';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/16/solid';

interface PortfolioPerformanceProps {
    initialValue: number;
    currentValue: number;
    label: string;
}

export default function PortfolioPerformance(props: PortfolioPerformanceProps) {
    const performance = calculatePortfolioPerformance(props.initialValue, props.currentValue);
    const PerformanceIcon = performance.percentage > 0 ? ArrowUpIcon : ArrowDownIcon;
    const performanceIconTextColor = PerformanceIcon === ArrowUpIcon ? 'text-green-600' : 'text-red-900';
    const performanceTextColor = PerformanceIcon === ArrowUpIcon ? 'text-green-400' : 'text-red-600';

    return (
        <div>
            <div className="flex flex-col items-center gap-[2px]">
                <p className={`text-xs font-medium ${performanceTextColor}`}>{currencyFormatter.format(performance.numerical)}</p>
                <div className="flex items-center gap-1">
                    <PerformanceIcon className={`h-5 w-5 ${performanceIconTextColor}`} />
                    <p className={`text-lg font-bold ${performanceTextColor}`}>{!isNaN(performance.percentage) ? Number(performance.percentage.toFixed(2)) + '%' : 'N/A'}</p>
                </div>
            </div>

            <label htmlFor="" className="dark:text-almost-white text-xs uppercase text-center block opacity-80">{props.label}</label>
        </div>
    );
}