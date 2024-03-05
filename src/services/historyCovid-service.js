import axios from "axios"
import * as endPoints from '../constants/api-constants'

class HistoryCovid {

  static getHistoryDataCovidApi = () => {
    return axios.get(endPoints.HistoryDataCovidApi);
  }
  
}

export default HistoryCovid;