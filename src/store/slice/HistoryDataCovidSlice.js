import { createSlice } from '@reduxjs/toolkit'

export const HistoryDataCovidSlice = createSlice({
    name: 'historyDataCovid',
    initialState: {
        historyDataCovid: null,
        loadHistoryDataCovid: false
    },
    reducers: {
        SET_HISTORYDATACOVID: ( state, action ) => {
            state.historyDataCovid = action.payload.historyDataCovid
            state.loadHistoryDataCovid = false
        },
        SET_LOAD: ( state, action ) => {
            state.loadHistoryDataCovid = true
        }
    }
})

export const { SET_HISTORYDATACOVID, SET_LOAD } = HistoryDataCovidSlice.actions;

export default HistoryDataCovidSlice.reducer;


