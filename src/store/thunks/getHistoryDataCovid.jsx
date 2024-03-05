import HistoryCovid from "../../services/historyCovid-service";
import { SET_HISTORYDATACOVID, SET_LOAD } from "../slice/HistoryDataCovidSlice";

export const getHistoryDataCovid_thunks = (filter) => {
    return async(dispatch, getState) => {
        try {
            dispatch(SET_LOAD());
            const result = await HistoryCovid.getHistoryDataCovidApi();

            const datosPorMes = {};
            const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

            for (const iterator of result?.data?.data) {
                const fecha = new Date(iterator.date);
                const year = fecha.getFullYear();
                const mesTexto = meses[fecha.getMonth()];

                if (!datosPorMes[mesTexto]) {
                    datosPorMes[mesTexto] = {
                        mes: mesTexto,
                        pruebas: 0,
                        hospitalizaciones: 0,
                        fallecidos: 0
                    };
                }

                if (filter === 'all' || year === filter) {
                    datosPorMes[mesTexto].pruebas += iterator.testing.total.value;
                    datosPorMes[mesTexto].fallecidos += iterator.outcomes.death.total.value - iterator.outcomes.death.total.calculated.change_from_prior_day;
                    datosPorMes[mesTexto].hospitalizaciones += iterator.outcomes.hospitalized.currently.value - iterator.outcomes.hospitalized.currently.calculated.change_from_prior_day;
                }
            }
            
            const mesesOrdenados = Object.keys(datosPorMes).sort((a, b) => {
                const indexA = meses.indexOf(a);
                const indexB = meses.indexOf(b);
                return indexA - indexB;
            });

            const datosOrdenados = mesesOrdenados.map(mes => datosPorMes[mes]);
            dispatch(SET_HISTORYDATACOVID({historyDataCovid: datosOrdenados}));
            
        } catch (error) {
            console.log(error);
        }
    }
}
