import React, { useEffect, useState } from "react";
import { OptionsFilters } from "../../molecules/options-filters";
import { useDispatch, useSelector } from "react-redux";
import { getHistoryDataCovid_thunks } from "../../../store/thunks/getHistoryDataCovid";
import { GraphicTable } from "../../organisms/Graphic-table";
import { DataTable } from "../../organisms/Data-table";
import "./statisticalPage.scss";

export const StatisticalPage = () => {
  const dispatch = useDispatch()
  const { historyDataCovid, loadHistoryDataCovid } = useSelector( (state) => state.historyDataCovid);

  const [age, setFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  
  useEffect(() => {
    dispatch(getHistoryDataCovid_thunks(age, typeFilter))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [age, typeFilter])

  return (
    <section className="statisticalPage">
      <OptionsFilters 
        setFilterData={setFilter} 
        filterData={age}
        typeFilter={typeFilter} 
        setTypeFilter={setTypeFilter}
        isLoader={loadHistoryDataCovid}
      />

      <GraphicTable 
        data={historyDataCovid} 
        descTableBlue='Fallecidos' 
        descTablePurple='Hospitalizados'
        isLoader={loadHistoryDataCovid}
      />
      
      <DataTable data={historyDataCovid} isLoader={loadHistoryDataCovid}/>
    </section>
  );
};
