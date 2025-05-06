"use client";

import {
  CandlestickData,
  CandlestickSeries,
  CandlestickSeriesOptions,
  createChart,
  IChartApi,
} from "lightweight-charts";
import { useEffect, useRef } from "react";

interface Props {
  data: CandlestickData[];
}

export default function CandlestickChart({ data }: Props) {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<IChartApi | null>(null);

  useEffect(() => {
    // Guard against null before using:
    const container = chartContainerRef.current;
    if (!container) return;

    const chart = createChart(container, {
      width: 600,
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

    // Handle resize
    const handleResize = () => {
      chart.applyOptions({ width: container.clientWidth });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [data]);

  return <div ref={chartContainerRef} />;
}
