import { configureStore } from "@reduxjs/toolkit";
import historyDataCovidReducer from './slice/HistoryDataCovidSlice'


export default configureStore({
    reducer: {
        historyDataCovid: historyDataCovidReducer,
    }
})
