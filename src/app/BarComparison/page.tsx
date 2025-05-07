"use client";

import ChartLoader from "@/components/ChartLoader";
import dynamic from "next/dynamic";

const BarComparisonChart = dynamic(
  () => import("@/components/BarComparisonChart"),
  {
    ssr: false,
    loading: () => <ChartLoader />,
  }
);

const Candlestick = () => {
  return (
    <div className="items-center justify-center min-h-screen p-8 py-20 gap-16 sm:p-20">
      <h2 className="mb-4">پیاده سازی نمودار</h2>
      <BarComparisonChart />
    </div>
  );
};

export default Candlestick;
