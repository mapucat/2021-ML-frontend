import { api } from '../common/environment';
import axios from "axios";

export default class ItemsService {
  apiEndpoint = api.ANALYSTS_URL;

  /**
   * Función para obtener la lista de items según una búsqueda determinada
   * @param {*} q 
   */
  getItems = (q) => {
    return axios.get(`${api.MLBACKEND_URL}/items`, {
      params: {
        q
      }
    });
  };

  /**
   * Función para obtener un item según su id
   * @param {*} q 
   */
  getItem = (id) => {
    return axios.get(`${api.MLBACKEND_URL}/items/${id}`);
  };
}
