import apiServices from '../services/apiServices';
import authStorage from '../utils/localStorage';

import { store } from "../store";

const initialState = {
  reservas: null
};

const model = {
  state: initialState,
  reducers: {},
  effects: (dispatch) => ({

    async getAllUserBookingsById(){
      try {
        const { user } = store.getModelState("authentication");
        const resBack = await apiServices.getAllUserBookingsById(user.id);
        this.setState({
            reservas: resBack
        });
      } catch (error) {
        this.setState({
          error: error.messageError,
        });
      }
    }


  }),
};

export default model;
