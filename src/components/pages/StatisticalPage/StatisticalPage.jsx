import React from "react";
import { OptionsFilters } from "../../molecules/options-filters";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./statisticalPage.scss";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

export const StatisticalPage = () => {
  return (
    <div className="statisticalPage">
      <OptionsFilters />
      <div className="statisticalPage__data-table">
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="100%" stopColor="#8884d8" stopOpacity={0.5} />
                <stop offset="100%" stopColor="#8884d8" stopOpacity={0.5} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="100%" stopColor="#82ca9d" stopOpacity={0.5} />
                <stop offset="100%" stopColor="#82ca9d" stopOpacity={0.5} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid vertical={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#f5f5f5",
                border: "1px solid #dcdcdc",
                borderRadius: "3px",
                padding: "5px",
              }}
              formatter={(value, name, props) => [
                `${props.payload.uv} UV`,
                `${props.payload.pv} PV`,
                `${props.payload.amt} AMT`,
              ]}
            />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fillOpacity={0.5}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fillOpacity={0.5}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
        <div className="statisticalPage__info-color-data">
          <span className="--data-1">dato 1</span>
          <span className="--data-2">dato 2</span>
        </div>
      </div>
    </div>
  );
};
