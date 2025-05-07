"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "۱", robot: 1, fatemeh: 5 },
  { name: "۲", robot: 2, fatemeh: 15 },
  { name: "۳", robot: 1, fatemeh: 2 },
  { name: "۴", robot: 0.5, fatemeh: 0.5 },
  { name: "۵", robot: 0.5, fatemeh: 0.5 },
  { name: "۶", robot: 8, fatemeh: 22 },
  { name: "۷", robot: 2, fatemeh: 3 },
  { name: "۸", robot: 18, fatemeh: 13 },
  { name: "۹", robot: 1, fatemeh: 18 },
  { name: "۱۰", robot: 2, fatemeh: 14 },
];

export default function BarComparisonChart() {
  return (
    <div className="bg-[#0B0B18] text-white p-6 rounded-2xl w-full max-w-5xl mx-auto">
      <h2 className="text-right">میزان ضرر شما و ربات در هر معامله</h2>
      <div className="relative">
        {/* Custom legend inside top-left */}
        <div className="absolute top-[-30px] left-[53px] z-10 flex gap-4 items-center p-2">
          <div className="flex items-center gap-1">
            <span className="w-4 h-4 rounded-full bg-[#FDE68A]" />
            <span className="text-sm">عملکرد فاطمه</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-4 h-4 rounded-full bg-[#C084FC]" />
            <span className="text-sm">عملکرد ربات</span>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 40, right: 20, left: 20, bottom: 20 }}
          >
            <CartesianGrid
              stroke="#2A2A3F" // subtle grid color
              strokeDasharray="3 3" // optional dashed line
              horizontal={true}
              vertical={false} // disable vertical lines
            />
            <XAxis
              tickSize={0}
              axisLine={false}
              dataKey="name"
              tick={{ fill: "#fff" }}
            />
            <YAxis
              tickSize={0}
              axisLine={false}
              ticks={[20, 40, 60, 80, 100]}
              tickFormatter={(value) => `${value}%`}
              tick={{ fill: "#fff" }}
              tickMargin={25}
            />
            <Tooltip
              formatter={(value: number) => `${value}%`}
              contentStyle={{ backgroundColor: "#1E1E2F", border: "none" }}
              labelStyle={{ color: "#fff" }}
            />
            <Bar
              dataKey="fatemeh"
              fill="#FDE68A"
              radius={[4, 4, 0, 0]}
              maxBarSize={20}
            />
            <Bar
              dataKey="robot"
              fill="#C084FC"
              radius={[4, 4, 0, 0]}
              maxBarSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
