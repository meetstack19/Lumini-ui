import { ChartRadialText, type RadialChartData } from "@/components/ui/radial-charts/radial-charts";
import { useEffect, useState } from 'react';

// Dummy data generator - in real app this would come from API
const generateDummyRadialData = (): RadialChartData[] => {
    return [
        { category: "Active Users", value: 1247, fill: "var(--color-active)" },
        { category: "Inactive Users", value: 523, fill: "var(--color-inactive)" },
        { category: "New Signups", value: 389, fill: "var(--color-new)" },
    ];
};

// Simulate API call
const fetchRadialData = async (): Promise<RadialChartData[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return generateDummyRadialData();
};

export const UserMetricRadialChart = () => {
    const [data, setData] = useState<RadialChartData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                setIsLoading(true);
                // In real app: const response = await fetch('/api/radial-data');
                // const apiData = await response.json();
                const apiData = await fetchRadialData();
                setData(apiData);
            } catch (err) {
                setError('Failed to load chart data');
                console.error('Error loading radial chart data:', err);
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
        value: {
            label: "Total Users",
        },
        active: {
            label: "Active Users",
            color: "var(--chart-1)",
        },
        inactive: {
            label: "Inactive Users",
            color: "var(--chart-2)",
        },
        new: {
            label: "New Signups",
            color: "var(--chart-3)",
        },
    };

    return (
        <div className="container--graph">
            <ChartRadialText
                data={data}
                config={chartConfig}
                title="User Activity Overview"
                description="Current user distribution by activity status"
                dataKey="value"
            />
        </div>
    );
};