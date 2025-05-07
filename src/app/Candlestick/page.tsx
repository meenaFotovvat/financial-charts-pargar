"use client";

import dynamic from "next/dynamic";
import chartInfos from "@/data/chart.json";
import ChartLoader from "@/components/ChartLoader";

const CandlestickChart = dynamic(
  () => import("@/components/CandlestickChart"),
  {
    ssr: false,
    loading: () => <ChartLoader />,
  }
);

const Candlestick = () => {
  return (
    <div className="w-full pt-4">
      <h2 className="pb-4 px-4">نمایش چارت نماد های مالی</h2>
      <CandlestickChart data={chartInfos} />
    </div>
  );
};

export default Candlestick;
