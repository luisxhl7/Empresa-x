import HistoryCovid from "../../services/historyCovid-service";
import { SET_HISTORYDATACOVID, SET_LOAD } from "../slice/HistoryDataCovidSlice";

export const getHistoryDataCovid_thunks = (filter, filterMonth) => {
    return async(dispatch, getState) => {
        try {
            dispatch(SET_LOAD());
            const result = await HistoryCovid.getHistoryDataCovidApi();
            const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
            
            const dataForAge = {};
            const dataForMonth = {}
                        
            const filterData = result.data.data.filter(history => {
                const historyYear = new Date(history.date).getFullYear();
                if (filter === '') {
                    return true;
                } else {
                    return historyYear === parseInt(filter);
                }
            });
            
            for (const iterator of filterData) {
                const fecha = new Date(iterator.date);
                const mesTexto = meses[fecha.getMonth()];
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
                    if (!dataForAge[mesTexto]) {
                        dataForAge[mesTexto] = {
                            mes: mesTexto,
                            pruebas: 0,
                            hospitalizaciones: 0,
                            fallecidos: 0
                        };
                    }else{
                        dataForAge[mesTexto].pruebas += iterator.testing.total.calculated.change_from_prior_day;
                        dataForAge[mesTexto].fallecidos += iterator.outcomes.death.total.calculated.change_from_prior_day;;
                        dataForAge[mesTexto].hospitalizaciones += iterator.outcomes.hospitalized.currently.calculated.change_from_prior_day;
                    }
                }
            }
            
            if (filterMonth !== '') {
                const esto = Object.values(dataForAge)

                const filterForMonth = esto.filter(history => {
                    const fecha = new Date(history.mes);
                    const mesTexto = meses[fecha.getMonth()];
                    const historyYear = mesTexto;
                    if (filterMonth === '') {
                        return true;
                    } else {
                        return historyYear === filterMonth;
                    }
                }).sort((a, b) => meses.indexOf(a.mes) - meses.indexOf(b.mes)).reverse()
                

                for (const iterator of filterForMonth) {
                    if (!dataForMonth[iterator.mes]) {
                        dataForMonth[iterator.mes] = {
                            mes: iterator.mes,
                            pruebas: iterator.pruebas === null ? 0 : iterator.pruebas,
                            hospitalizaciones: iterator.hospitalizaciones === null ? 0 : iterator.hospitalizaciones,
                            fallecidos: iterator.fallecidos  === null ? 0 : iterator.fallecidos,
                        };
                    }
                }

                dispatch(SET_HISTORYDATACOVID({ historyDataCovid: Object.values(dataForMonth) }));
            }else{
                const mesesOrdenados = Object.keys(dataForAge).sort((a, b) => {
                    const indexA = meses.indexOf(a);
                    const indexB = meses.indexOf(b);
                    return indexA - indexB;
                });
    
                const datosOrdenados = mesesOrdenados.map(mes => dataForAge[mes]);
                dispatch(SET_HISTORYDATACOVID({historyDataCovid: datosOrdenados}));
            }
            
        } catch (error) {
            console.log(error);
        }
    }
}
