import { ChartAreaGradient, type AreaChartData } from "@/components/ui/graph-area/graph-area-gradient";
import { useEffect, useState } from 'react';

// Dummy data generator - in real app this would come from API
const generateDummyAreaData = (): AreaChartData[] => {
    return [
        { month: 'January', HighlyActiveUsers: 1860, ModeratelyActiveUsers: 800, LeastActiveUsers: 100 },
        { month: 'February', HighlyActiveUsers: 3050, ModeratelyActiveUsers: 2000, LeastActiveUsers: 150 },
        { month: 'March', HighlyActiveUsers: 2370, ModeratelyActiveUsers: 1200, LeastActiveUsers: 200 },
        { month: 'April', HighlyActiveUsers: 730, ModeratelyActiveUsers: 1900, LeastActiveUsers: 250 },
        { month: 'May', HighlyActiveUsers: 2090, ModeratelyActiveUsers: 1300, LeastActiveUsers: 200 },
        { month: 'June', HighlyActiveUsers: 2140, ModeratelyActiveUsers: 1400, LeastActiveUsers: 150 },
        { month: 'July', HighlyActiveUsers: 2890, ModeratelyActiveUsers: 1800, LeastActiveUsers: 180 },
        { month: 'August', HighlyActiveUsers: 3200, ModeratelyActiveUsers: 2100, LeastActiveUsers: 190 },
        { month: 'September', HighlyActiveUsers: 3200, ModeratelyActiveUsers: 2100, LeastActiveUsers: 120 },
        { month: 'October', HighlyActiveUsers: 3200, ModeratelyActiveUsers: 2100, LeastActiveUsers: 100 },
        { month: 'November', HighlyActiveUsers: 3200, ModeratelyActiveUsers: 2100, LeastActiveUsers: 140 },
        { month: 'December', HighlyActiveUsers: 3200, ModeratelyActiveUsers: 2100, LeastActiveUsers: 200 },
    ];
};

// Simulate API call
const fetchAreaData = async (): Promise<AreaChartData[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return generateDummyAreaData();
};

export const UserMetricGraphArea = () => {
    const [data, setData] = useState<AreaChartData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                setIsLoading(true);
                // In real app: const response = await fetch('/api/analytics/traffic');
                // const apiData = await response.json();
                const apiData = await fetchAreaData();
                setData(apiData);
            } catch (err) {
                setError('Failed to load chart data');
                console.error('Error loading area chart data:', err);
            } finally {
                setIsLoading(false);
            }
        };

        loadData();
    }, []);

    if (isLoading) {
        return (
            <div className="container--graph">
                <div className="flex items-center justify-center h-[400px]">
                    <div className="text-lg">Loading chart data...</div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container--graph">
                <div className="flex items-center justify-center h-[400px]">
                    <div className="text-red-500">{error}</div>
                </div>
            </div>
        );
    }

    const chartConfig = {
      HighlyActiveUsers: {
        label: 'Highly Active Users',
        color: 'chart-1',
      },
      ModeratelyActiveUsers: {
        label: 'Moderately Active Users',
        color: 'var(chart-2)',
      },
      LeastActiveUsers: {
        label: 'Least Active Users',
        color: 'var(destructive)',
      },
    };

    return (
        <div className="container--graph">
            <ChartAreaGradient
                data={data}
                config={chartConfig}
                title="User Activity Overview"
                description="Highly Active, Moderately Active, Least Active users over time"
                xAxisKey="month"
                dataKeys={['HighlyActiveUsers', 'ModeratelyActiveUsers', 'LeastActiveUsers']}
                showTrend={false}
                trendValue="12.8%"
                trendText="this month"
            />
        </div>
    );
};