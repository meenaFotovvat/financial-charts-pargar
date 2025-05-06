import CandlestickChart from "@/components/CandlestickChart";
import chartInfos from "@/data/chart.json";

const Candlestick = () => {
  return (
    <div className="pt-4 flex justify-center">
      <CandlestickChart data={chartInfos} />
    </div>
  );
};

export default Candlestick;
