'use client';

import { TrendingUp } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

export interface AreaChartData {
  [key: string]: string | number;
}

export interface AreaChartConfig {
  [key: string]: {
    label: string;
    color?: string;
  };
}

export interface ChartAreaGradientProps {
  data: AreaChartData[];
  config: AreaChartConfig;
  title?: string;
  description?: string;
  xAxisKey: string;
  dataKeys: string[];
  showTrend?: boolean;
  trendValue?: string;
  trendText?: string;
}

export function ChartAreaGradient({
  data,
  config,
  title = "Area Chart - Gradient",
  description = "Showing data over time",
  xAxisKey,
  dataKeys,
  showTrend = true,
  trendValue = "5.2%",
  trendText = "this month"
}: ChartAreaGradientProps) {
  return (
    <Card className="w-[500px]">
      {/* <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader> */}
      <CardContent className="">
        <ChartContainer config={config}>
          <AreaChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={xAxisKey}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) =>
                typeof value === 'string' && value.length > 3
                  ? value.slice(0, 3)
                  : value
              }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <defs>
              {dataKeys.map((key) => (
                <linearGradient
                  key={key}
                  id={`fill${key}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor={`var(--color-${key.toLowerCase()})`}
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor={`var(--color-${key.toLowerCase()})`}
                    stopOpacity={0.1}
                  />
                </linearGradient>
              ))}
            </defs>
            {dataKeys.map((key) => (
              <Area
                key={key}
                dataKey={key}
                type="natural"
                fill={`url(#fill${key})`}
                fillOpacity={0.4}
                stroke={`var(--color-${key.toLowerCase()})`}
                stackId="a"
              />
            ))}
          </AreaChart>
        </ChartContainer>
      </CardContent>
      {showTrend && (
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 leading-none font-medium">
                Users Activity {trendValue} {trendText}{' '}
                <TrendingUp className="h-4 w-4" />
              </div>
              <div className="text-muted-foreground flex items-center gap-2 leading-none">
                {data.length > 0 && data[0][xAxisKey]} -{' '}
                {data.length > 0 && data[data.length - 1][xAxisKey]}
              </div>
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
