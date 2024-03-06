import React, { useEffect, useState } from "react";
import { OptionsFilters } from "../../molecules/options-filters";
import { useDispatch, useSelector } from "react-redux";
import { getHistoryDataCovid_thunks } from "../../../store/thunks/getHistoryDataCovid";
import { GraphicTable } from "../../organisms/Graphic-table";
import { DataTable } from "../../organisms/Data-table";
import "./statisticalPage.scss";

export const StatisticalPage = () => {
  const [age, setFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  const dispatch = useDispatch()
  const { historyDataCovid } = useSelector( (state) => state.historyDataCovid);
  
  useEffect(() => {
    dispatch(getHistoryDataCovid_thunks(age, typeFilter))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [age, typeFilter])

  return (
    <div className="statisticalPage">
      <OptionsFilters 
        setFilterData={setFilter} 
        filterData={age}
        typeFilter={typeFilter} 
        setTypeFilter={setTypeFilter}
      />

      <GraphicTable data={historyDataCovid}/>
      
      <DataTable data={historyDataCovid}/>
    </div>
  );
};
