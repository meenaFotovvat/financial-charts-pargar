"use client";

import dynamic from "next/dynamic";
import chartInfos from "@/data/chart.json";

const CandlestickChart = dynamic(
  () => import("@/components/CandlestickChart"),
  { ssr: false }
);

const Candlestick = () => {
  return (
    <div className="w-full pt-4">
      <CandlestickChart data={chartInfos} />
    </div>
  );
};

export default Candlestick;
