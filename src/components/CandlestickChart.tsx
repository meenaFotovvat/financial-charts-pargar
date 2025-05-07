"use client";

import {
  CandlestickData,
  createChart,
  IChartApi,
  CandlestickSeriesOptions,
  CandlestickSeries,
} from "lightweight-charts";
import { useEffect, useRef, useState } from "react";

interface Props {
  data: CandlestickData[];
}

export default function CandlestickChart({ data }: Props) {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const container = chartContainerRef.current;
    if (!container) return;

    const chart = createChart(container, {
      width: container.offsetWidth || 300,
      height: 300,
      layout: {
        background: { color: "#222" },
        textColor: "#DDD",
      },
      grid: {
        vertLines: { color: "#444" },
        horzLines: { color: "#444" },
      },
      timeScale: { timeVisible: true },
    });

    chartRef.current = chart;

    const newSeries = chart.addSeries(CandlestickSeries, {
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderVisible: false,
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    } as CandlestickSeriesOptions);

    newSeries.setData(data);
    chart.timeScale().fitContent();

    let resizeObserver: ResizeObserver | undefined;

    if (isMounted) {
      resizeObserver = new ResizeObserver(() => {
        if (chartRef.current && chartContainerRef.current) {
          chartRef.current.applyOptions({
            width: chartContainerRef.current.clientWidth || 300,
          });
        }
      });

      resizeObserver.observe(container);
    }

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      chart.remove();
    };
  }, [data, isMounted]);

  return (
    <div className="px-4">
      <div className="w-full" ref={chartContainerRef} />
    </div>
  );
}
