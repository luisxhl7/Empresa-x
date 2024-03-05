import React, { useEffect, useState } from "react";
import { OptionsFilters } from "../../molecules/options-filters";
import { useDispatch, useSelector } from "react-redux";
import { getHistoryDataCovid_thunks } from "../../../store/thunks/getHistoryDataCovid";
import { GraphicTable } from "../../organisms/Graphic-table";
import { DataTable } from "../../organisms/Data-table";
import "./statisticalPage.scss";

export const StatisticalPage = () => {
  const initialState = 'all'
  const [age, setFilter] = useState(initialState);

  const dispatch = useDispatch()
  const { historyDataCovid } = useSelector( (state) => state.historyDataCovid);
  
  useEffect(() => {
    dispatch(getHistoryDataCovid_thunks(age))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [age])

  return (
    <div className="statisticalPage">
      <OptionsFilters setFilterData={setFilter} filterData={age} initialState={initialState}/>

      <GraphicTable data={historyDataCovid}/>
      
      <DataTable data={historyDataCovid}/>
    </div>
  );
};
