import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { addDotEveryThreeDigits } from "../../../utils/addDotEveryThreeDigits";
import './graphic-table.scss'
import { Oval } from "react-loader-spinner";

export const GraphicTable = ({ data, descTableBlue, descTablePurple, isLoader }) => {
  const result = data && data.length > 0 ? data[0] : null;

    return (
        <div className="graphicTable__data-table">
            <h1 className="graphicTable__data-table__title">
                Datos Covid-19
            </h1>
            {result ? 
                <>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart
                            data={data}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                            width={730} height={250}
                        >
                        <defs>
                            <linearGradient id="colorhospitalized" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="100%" stopColor="#95A4FC" stopOpacity={0.5} />
                                <stop offset="100%" stopColor="#95A4FC" stopOpacity={0.5} />
                            </linearGradient>
                            <linearGradient id="colordeath" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="100%" stopColor="#B1E3FF" stopOpacity={0.5} />
                                <stop offset="100%" stopColor="#B1E3FF" stopOpacity={0.5} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey={"mes"} axisLine={false} tickLine={false}/>
                        <YAxis axisLine={false} tickLine={false}/>
                        <CartesianGrid vertical={false}/>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#ffffff",
                                border: "1px solid #dcdcdc",
                                borderRadius: "7px",
                                padding: "5px",
                            }}
                            formatter={(value, name, props) => [
                                `${name}: ${addDotEveryThreeDigits(value)}`,
                            ]}
                        />
                        <Area
                            type="monotone"
                            dataKey="fallecidos"
                            stroke="#B1E3FF"
                            fillOpacity={1}
                            fill="url(#colordeath)"
                        />
                        <Area
                            type="monotone"
                            dataKey="hospitalizaciones"
                            stroke="#95A4FC"
                            fillOpacity={1}
                            fill="url(#colorhospitalized)"
                        />

                        </AreaChart>
                    </ResponsiveContainer>
                    <div className="graphicTable__info-color-data">
                        <div>
                            <p className="--data-1">
                                {descTableBlue}
                            </p>
                        </div>
                        <div>
                            <p className="--data-2">
                                {descTablePurple}
                            </p>
                        </div>
                    </div>
                </>
                :
                <div className="graphicTable__data-table__content">
                    {isLoader ?
                        <Oval
                            visible={true}
                            height="80"
                            width="80"
                            secondaryColor='#f6faff'
                            ariaLabel="oval-loading"
                            wrapperStyle={{
                                margin: '10px auto 10px auto',
                            }}
                            wrapperClass=""
                        />
                        :
                        <p>No hay resultados</p>
                    }
                </div>
            }
        </div>
    );
};
