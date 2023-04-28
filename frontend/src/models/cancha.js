import apiServices from '../services/apiServices';
import authStorage from '../utils/localStorage';

import CanchaUno from '../assets/cancha-uno.jpg'
import CanchaDos from '../assets/cancha-dos.jpg'
import CanchaTres from '../assets/cancha-tres.jpg'
import CanchaCuatro from '../assets/cancha-cuatro.jpg'
import CanchaCinco from '../assets/cancha-cinco.jpg'
import CanchaSeis from '../assets/cancha-seis.jpg'

const imgCanchas = [CanchaUno, CanchaDos, CanchaTres, CanchaCuatro, CanchaCinco, CanchaSeis];

const initialState = {
  canchas: null, 
  error: null,
  message: null
};

const model = {
  state: initialState,
  reducers: {},
  effects: (dispatch) => ({
    
    async getAllSoccerFields(){
    
      const canchasResp = await apiServices.getAllSoccerFields();
      
      for (var i = 0; i < imgCanchas.length; i++) {
        canchasResp[i] = { ...canchasResp[i], img: imgCanchas[i] };
      }

      this.setState({
        canchas: canchasResp,
      });
    },
    

    clearState() {
      this.setState(initialState);
    },

    clearError() {
      this.setState({
        error: null,
        message: null,
      });
    },
  }),
};

export default model;
