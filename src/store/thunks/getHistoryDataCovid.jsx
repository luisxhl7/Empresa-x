import HistoryCovid from "../../services/historyCovid-service";
import { SET_HISTORYDATACOVID, SET_LOAD } from "../slice/HistoryDataCovidSlice";

export const getHistoryDataCovid_thunks = (filterYear, filterMonth) => {
    return async(dispatch, getState) => {
        try {
            dispatch(SET_LOAD());
            const result = await HistoryCovid.getHistoryDataCovidApi();
            const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
            
            const dataForAge = {};
            const dataForMonth = {}
                        
            const filterDataForYear = result?.data?.data?.filter(item => {
                const historyYear = new Date(item.date).getFullYear();
                if (filterYear === '') {
                    return true;
                } else {
                    return historyYear === parseInt(filterYear);
                }
            });
            
            
            for (const iterator of filterDataForYear) {
                const date = new Date(iterator.date);
                const monthText = meses[date.getMonth()];
                
                if (filterMonth !== '') {
                    if (!dataForAge[iterator.date]) {
                        dataForAge[iterator.date] = {
                            mes: iterator.date,
                            pruebas: iterator.testing.total.calculated.change_from_prior_day,
                            hospitalizaciones: iterator.outcomes.hospitalized.currently.calculated.change_from_prior_day,
                            fallecidos: iterator.outcomes.death.total.calculated.change_from_prior_day
                        };
                    }
                }else{
                    if (!dataForAge[monthText]) {
                        dataForAge[monthText] = {
                            mes: monthText,
                            pruebas: 0,
                            hospitalizaciones: 0,
                            fallecidos: 0
                        };
                    }else{
                        dataForAge[monthText].pruebas += iterator.testing.total.calculated.change_from_prior_day;
                        dataForAge[monthText].fallecidos += iterator.outcomes.death.total.calculated.change_from_prior_day;;
                        dataForAge[monthText].hospitalizaciones += iterator.outcomes.hospitalized.currently.calculated.change_from_prior_day;
                    }
                }
            }
            
            if (filterMonth !== '') {
                const arrayYear = Object.values(dataForAge)

                const filterForMonth = arrayYear.filter(history => {
                    const date = new Date(history.mes);
                    const monthText = meses[date.getMonth()];

                    if (filterMonth === '') {
                        return true;
                    } else {
                        return filterMonth === monthText;
                    }
                }).sort((a, b) => meses.indexOf(a.mes) - meses.indexOf(b.mes)).reverse()
                
                for (const iterator of filterForMonth) {
                    if (!dataForMonth[iterator.mes]) {
                        dataForMonth[iterator.mes] = {
                            mes: iterator.mes,
                            pruebas: iterator.pruebas || 0,
                            hospitalizaciones: iterator.hospitalizaciones || 0,
                            fallecidos: iterator.fallecidos || 0,
                        };
                    }
                }

                dispatch(SET_HISTORYDATACOVID({ historyDataCovid: Object.values(dataForMonth) }));
            }else{
                const monthsOrdered = Object.keys(dataForAge).sort((a, b) => {
                    const indexA = meses.indexOf(a);
                    const indexB = meses.indexOf(b);
                    return indexA - indexB;
                });
    
                const orderedData = monthsOrdered.map(mes => dataForAge[mes]);
                dispatch(SET_HISTORYDATACOVID({historyDataCovid: orderedData}));
            }
            
        } catch (error) {
            console.log(error);
        }
    }
}
